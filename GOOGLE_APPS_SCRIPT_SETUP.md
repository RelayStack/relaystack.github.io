# Google Apps Script Setup Guide

## Step 1: Create Google Sheet

1. Go to https://sheets.new
2. Create a new spreadsheet named "RelayStack Leads"
3. In the first row, add these headers:
```
Timestamp | Name | Email | Phone | Website | Industry | Country | City | Budget | Services | Timeline | Challenge | HasWebsite | Status | Source
```

## Step 2: Create Apps Script

1. In your Google Sheet, click **Extensions > Apps Script**
2. Replace the default code with this:

```javascript
const SHEET_NAME = 'Sheet1';
const EMAIL_TO = 'relaystack@proton.me';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Add timestamp
    data.timestamp = new Date().toISOString();
    
    // Determine status based on budget and website
    let status = 'new';
    if (data.budget === '<500') {
      status = 'nurture';
    } else if (!data.website || data.website.trim() === '') {
      status = 'no-website-call';
    } else if (['500-1000', '1000-3000', '3000+'].includes(data.budget)) {
      status = 'qualified';
    }
    
    data.status = status;
    data.hasWebsite = data.website && data.website.trim() !== '' ? 'yes' : 'no';
    data.services = Array.isArray(data.services) ? data.services.join(', ') : data.services;
    
    // Save to sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone || '',
      data.website || '',
      data.industry,
      data.country,
      data.city,
      data.budget,
      data.services,
      data.timeline,
      data.challenge || '',
      data.hasWebsite,
      data.status,
      data.source || 'website'
    ];
    sheet.appendRow(row);
    
    // Send auto-reply email
    sendAutoReply(data);
    
    // Send notification to you
    sendNotification(data);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Lead saved successfully',
      status: status
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAutoReply(data) {
  const subject = 'Danke für Ihre Anfrage - RelayStack';
  
  let body = `Hallo ${data.name},\n\n`;
  body += 'vielen Dank für Ihre Anfrage! Ich habe Ihre Nachricht erhalten und werde mich innerhalb von 24 Stunden bei Ihnen melden.\n\n';
  
  if (data.status === 'no-website-call') {
    body += 'Da Sie noch keine Website haben, empfehle ich einen kurzen Telefoncall, um Ihre Bedürfnisse zu besprechen. Sie können mich direkt erreichen unter +41 76 421 84 25.\n\n';
    body += 'Oder buchen Sie direkt einen Termin: https://calendly.com/relaystack/15min\n\n';
  } else if (data.status === 'qualified') {
    body += 'Ich werde Ihre Website analysieren und Ihnen ein kostenloses SEO-Audit zuschicken.\n\n';
  } else if (data.status === 'nurture') {
    body += 'Für Ihr aktuelles Budget empfehle ich meine kostenlosen Tools und Ressourcen: https://relaystack.vercel.app/#freebies\n\n';
    body += 'Bei Fragen stehe ich Ihnen jederzeit zur Verfügung.\n\n';
  }
  
  body += 'Falls es dringend ist, erreichen Sie mich unter:\n';
  body += '📱 +41 76 421 84 25\n';
  body += '💬 Telegram: https://t.me/relaystack\n\n';
  body += 'Freundliche Grüsse,\n';
  body += 'RelayStack\n';
  body += 'Basel, Schweiz';
  
  GmailApp.sendEmail(data.email, subject, body, {
    name: 'RelayStack',
    replyTo: EMAIL_TO
  });
}

function sendNotification(data) {
  const subject = `Neuer Lead: ${data.name} - ${data.industry} - ${data.budget} CHF`;
  
  let body = `Neuer Lead eingegangen:\n\n`;
  body += `Name: ${data.name}\n`;
  body += `Email: ${data.email}\n`;
  body += `Telefon: ${data.phone || 'Nicht angegeben'}\n`;
  body += `Website: ${data.website || 'Keine Website'}\n`;
  body += `Industrie: ${data.industry}\n`;
  body += `Land: ${data.country}\n`;
  body += `Stadt: ${data.city}\n`;
  body += `Budget: ${data.budget} CHF\n`;
  body += `Services: ${data.services}\n`;
  body += `Timeline: ${data.timeline}\n`;
  body += `Challenge: ${data.challenge || 'Nicht angegeben'}\n`;
  body += `Status: ${data.status}\n`;
  body += `Zeit: ${data.timestamp}\n`;
  
  GmailApp.sendEmail(EMAIL_TO, subject, body, {
    name: 'RelayStack Lead System'
  });
}

// CORS preflight
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon and select **Web app**
3. Set:
   - Description: "RelayStack Lead Form"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL**

## Step 4: Update Website

After deployment, update the form submission URL in `index.astro`.

Replace the placeholder `submitForm()` function with:

```javascript
async function submitForm() {
  const formData = window.leadFormData;
  
  try {
    const response = await fetch('YOUR_WEB_APP_URL_HERE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      showThankYou(result.status);
    } else {
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    }
  } catch (error) {
    console.error('Error:', error);
    // Show thank you anyway (don't lose the lead)
    showThankYou(formData.budget === '<500' ? 'nurture' : (!formData.website ? 'no-website' : 'qualified'));
  }
}
```

## Step 5: Authorize

The first time the script runs, you'll need to authorize it:
1. Go to **Extensions > Apps Script**
2. Click **Run** (select `doPost` or any function)
3. Follow the authorization prompts
4. Click through any warnings (it's your own script)

---

**Your leads will now:**
- Save to Google Sheets automatically
- Trigger an auto-reply email to the lead
- Send you a notification email
- Be tagged with status (qualified, nurture, no-website-call)
