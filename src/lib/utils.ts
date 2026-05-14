export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || '',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
  };
}

export function getReferrer(): string {
  if (typeof document === 'undefined') return '';
  return document.referrer || '';
}

export function getLeadScoreLabel(score: number): string {
  if (score >= 120) return 'Hot';
  if (score >= 80) return 'Warm';
  if (score >= 50) return 'Mild';
  return 'Cold';
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    new: 'bg-blue-500',
    contacted: 'bg-yellow-500',
    qualified: 'bg-green-500',
    proposal_sent: 'bg-purple-500',
    closed_won: 'bg-emerald-500',
    closed_lost: 'bg-red-500',
    nurture: 'bg-gray-500',
    unqualified: 'bg-red-700',
  };
  return colors[status] || 'bg-gray-500';
}

export function formatCurrency(amount: number, currency = 'CHF'): string {
  return `${currency} ${amount.toLocaleString('de-CH')}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
