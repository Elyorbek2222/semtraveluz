'use client';

/**
 * Analytics Dashboard
 * Displays blog generation metrics and KPIs
 */

import { useEffect, useState } from 'react';
import { getDashboardAnalytics, formatCurrency, formatDuration, getScoreColor } from '@/seo/utils/analytics';

interface Analytics {
  period: any;
  blog: any;
  cron: any;
  lastUpdated: string;
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(30);

  useEffect(() => {
    fetchAnalytics();
  }, [days]);

  async function fetchAnalytics() {
    try {
      setLoading(true);
      const data = await getDashboardAnalytics(days);
      setAnalytics(data);
      setError(null);
    } catch (err) {
      setError(String(err));
      console.error('Failed to fetch analytics:', err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="p-8">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-600">Xato: {error}</div>;
  }

  if (!analytics) {
    return <div className="p-8">Ma'lumot topilmadi</div>;
  }

  const { blog, cron, period } = analytics;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">
          {period.startDate.toISOString().split('T')[0]} — {period.endDate.toISOString().split('T')[0]}
        </p>
      </div>

      {/* Period Selector */}
      <div className="mb-8 flex gap-2">
        {[7, 30, 90].map((d) => (
          <button
            key={d}
            onClick={() => setDays(d)}
            className={`px-4 py-2 rounded ${days === d ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
          >
            {d} kun
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Jami Yaratilgan"
          value={blog.totalGenerated}
          color="bg-blue-50 border-blue-300"
        />
        <KPICard
          title="Nashr Qilingan"
          value={blog.totalPublished}
          color="bg-green-50 border-green-300"
        />
        <KPICard
          title="O'rtacha SEO Ball"
          value={`${blog.avgSeoScore}/100`}
          color="bg-purple-50 border-purple-300"
        />
        <KPICard
          title="Cron Muaffaqiyat"
          value={`${cron.successRate}%`}
          color="bg-orange-50 border-orange-300"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Blog Metrics */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Blog Metrikalar</h2>

          <div className="space-y-3">
            <MetricRow label="Jami So'zlar" value={blog.totalWords.toLocaleString()} />
            <MetricRow label="O'rtacha So'zlar" value={blog.avgWordCount} />
            <MetricRow label="Min SEO Ball" value={blog.minSeoScore} />
            <MetricRow label="Max SEO Ball" value={blog.maxSeoScore} />
            <MetricRow
              label="Tarjima Muaffaqiyat"
              value={`${(blog.translationSuccessRate * 100).toFixed(1)}%`}
            />
            <MetricRow
              label="Taxmin Token Xarajati"
              value={formatCurrency(blog.estimatedTokenCost)}
            />
          </div>

          {/* Score Distribution */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-3">SEO Ball Taqsimi</h3>
            <div className="space-y-2">
              <ScoreBar
                label="Ajoyib (85-100)"
                value={blog.scoreDistribution.excellent}
                total={blog.totalGenerated}
                color="bg-green-500"
              />
              <ScoreBar
                label="Yaxshi (65-84)"
                value={blog.scoreDistribution.good}
                total={blog.totalGenerated}
                color="bg-yellow-500"
              />
              <ScoreBar
                label="Ishchi (50-64)"
                value={blog.scoreDistribution.needsWork}
                total={blog.totalGenerated}
                color="bg-orange-500"
              />
              <ScoreBar
                label="Qo'pollik (<50)"
                value={blog.scoreDistribution.poor}
                total={blog.totalGenerated}
                color="bg-red-500"
              />
            </div>
          </div>
        </div>

        {/* Cron & Status */}
        <div className="space-y-8">
          {/* Cron Metrics */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Cron Ishlarni</h2>

            <div className="space-y-3">
              <MetricRow label="Jami Ishlari" value={cron.totalRuns} />
              <MetricRow label="Muaffaqiyatli" value={cron.successfulRuns} />
              <MetricRow label="Muvaffaqsiz" value={cron.failedRuns} />
              <MetricRow label="O'rtacha Vaqt" value={formatDuration(cron.avgDuration)} />
              <MetricRow label="Jami Token'lar" value={cron.totalTokensUsed.toLocaleString()} />
            </div>

            {cron.lastRun && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-2">Oxirgi Ishlar</h3>
                <p className="text-sm text-gray-600">
                  {new Date(cron.lastRun.date).toLocaleString()}
                </p>
                <p className={`text-sm font-semibold mt-1 ${cron.lastRun.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {cron.lastRun.status === 'success' ? '✅ Muaffaqiyat' : '❌ Muvaffaqsiz'}
                </p>
                {cron.lastRun.postId && (
                  <p className="text-sm text-gray-600 mt-1">
                    Post: {cron.lastRun.postId} (SEO: {cron.lastRun.seoScore}/100)
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Status Counts */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Status Bo'yicha</h2>

            <div className="grid grid-cols-2 gap-3">
              <StatusBadge label="Kutilmoqda" count={blog.byStatus.pending_review} color="bg-yellow-100 text-yellow-800" />
              <StatusBadge label="Tasdiqlandi" count={blog.byStatus.approved} color="bg-green-100 text-green-800" />
              <StatusBadge label="Nashr Qilingan" count={blog.byStatus.published} color="bg-blue-100 text-blue-800" />
              <StatusBadge label="Rad Etilgan" count={blog.byStatus.rejected} color="bg-red-100 text-red-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-8 bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Kategoriyalar Bo'yicha</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(blog.byCategory).map(([category, count]: [string, any]) => (
            <div key={category} className="p-4 bg-gray-50 rounded border border-gray-200">
              <p className="text-gray-600 text-sm capitalize">{category}</p>
              <p className="text-2xl font-bold">{count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        Oxirgi yangilash: {new Date(analytics.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}

// ============================================================================
// Components
// ============================================================================

function KPICard({ title, value, color }: any) {
  return (
    <div className={`p-6 rounded-lg border ${color}`}>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

function MetricRow({ label, value }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function ScoreBar({ label, value, total, color }: any) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-semibold">{value} ({percentage.toFixed(0)}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function StatusBadge({ label, count, color }: any) {
  return (
    <div className={`p-3 rounded ${color} text-center`}>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-xl font-bold mt-1">{count}</p>
    </div>
  );
}
