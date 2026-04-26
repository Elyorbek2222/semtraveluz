/**
 * Formatting Utilities (Client-Safe)
 * Pure functions for formatting numbers, currency, and durations
 */

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);
}

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

export function getScoreColor(score: number): string {
  if (score >= 85) return 'bg-green-100 text-green-800';
  if (score >= 65) return 'bg-yellow-100 text-yellow-800';
  if (score >= 50) return 'bg-orange-100 text-orange-800';
  return 'bg-red-100 text-red-800';
}
