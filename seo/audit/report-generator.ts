import type { PageAudit } from "./site-crawler";

export interface SEOIssue {
  url: string;
  type: string;
  severity: "critical" | "warning" | "info";
  message: string;
}

export interface SEOReport {
  timestamp: string;
  totalPages: number;
  successfulPages: number;
  failedPages: number;
  issues: SEOIssue[];
  summary: {
    missingTitle: number;
    missingDescription: number;
    missingCanonical: number;
    missingH1: number;
    multipleH1: number;
    noSchema: number;
    missingHrefLang: number;
    httpErrors: number;
  };
  healthScore: number;
}

export function generateReport(audits: PageAudit[]): SEOReport {
  const issues: SEOIssue[] = [];
  const summary = {
    missingTitle: 0,
    missingDescription: 0,
    missingCanonical: 0,
    missingH1: 0,
    multipleH1: 0,
    noSchema: 0,
    missingHrefLang: 0,
    httpErrors: 0,
  };

  // Analyze each page
  audits.forEach((audit) => {
    if (audit.error) {
      summary.httpErrors++;
      issues.push({
        url: audit.url,
        type: "HTTP_ERROR",
        severity: "critical",
        message: `Failed to crawl: ${audit.error}`,
      });
      return;
    }

    // Check title
    if (!audit.title || audit.title.trim().length === 0) {
      summary.missingTitle++;
      issues.push({
        url: audit.url,
        type: "MISSING_TITLE",
        severity: "critical",
        message: "Missing page title",
      });
    }

    // Check description
    if (!audit.description || audit.description.trim().length === 0) {
      summary.missingDescription++;
      issues.push({
        url: audit.url,
        type: "MISSING_DESCRIPTION",
        severity: "critical",
        message: "Missing meta description",
      });
    }

    // Check canonical
    if (!audit.canonical) {
      summary.missingCanonical++;
      issues.push({
        url: audit.url,
        type: "MISSING_CANONICAL",
        severity: "warning",
        message: "Missing canonical URL",
      });
    }

    // Check H1
    if (audit.h1.length === 0) {
      summary.missingH1++;
      issues.push({
        url: audit.url,
        type: "MISSING_H1",
        severity: "warning",
        message: "Missing H1 heading",
      });
    } else if (audit.h1.length > 1) {
      summary.multipleH1++;
      issues.push({
        url: audit.url,
        type: "MULTIPLE_H1",
        severity: "warning",
        message: `Multiple H1 headings found (${audit.h1.length})`,
      });
    }

    // Check schema
    if (audit.schemaTypes.length === 0) {
      summary.noSchema++;
      issues.push({
        url: audit.url,
        type: "NO_SCHEMA",
        severity: "info",
        message: "No structured data found",
      });
    }

    // Check hreflang for non-root pages
    if (audit.url !== "https://semtravel.uz" && audit.hreflangs.length === 0) {
      summary.missingHrefLang++;
      issues.push({
        url: audit.url,
        type: "MISSING_HREFLANG",
        severity: "info",
        message: "No hreflang tags found",
      });
    }
  });

  const totalPages = audits.length;
  const failedPages = audits.filter((a) => a.error).length;
  const successfulPages = totalPages - failedPages;

  const criticalIssues = issues.filter((i) => i.severity === "critical").length;
  const warningIssues = issues.filter((i) => i.severity === "warning").length;

  const healthScore = Math.max(
    0,
    100 -
      criticalIssues * 20 -
      warningIssues * 5 -
      issues.filter((i) => i.severity === "info").length
  );

  return {
    timestamp: new Date().toISOString(),
    totalPages,
    successfulPages,
    failedPages,
    issues,
    summary,
    healthScore: Math.round(healthScore),
  };
}

export function printReport(report: SEOReport): void {
  console.log("\n" + "=".repeat(80));
  console.log("📊 SEO AUDIT REPORT");
  console.log("=".repeat(80));
  console.log(`\n📅 Generated: ${new Date(report.timestamp).toLocaleString()}`);
  console.log(`\n📈 Overview:`);
  console.log(`   Total Pages: ${report.totalPages}`);
  console.log(`   ✓ Successful: ${report.successfulPages}`);
  console.log(`   ✗ Failed: ${report.failedPages}`);
  console.log(`\n💚 Health Score: ${report.healthScore}/100`);

  console.log(`\n⚠️  Issues Summary:`);
  console.log(`   Missing Titles: ${report.summary.missingTitle}`);
  console.log(`   Missing Descriptions: ${report.summary.missingDescription}`);
  console.log(`   Missing Canonical: ${report.summary.missingCanonical}`);
  console.log(`   Missing H1: ${report.summary.missingH1}`);
  console.log(`   Multiple H1: ${report.summary.multipleH1}`);
  console.log(`   No Schema: ${report.summary.noSchema}`);
  console.log(`   Missing Hreflang: ${report.summary.missingHrefLang}`);
  console.log(`   HTTP Errors: ${report.summary.httpErrors}`);

  if (report.issues.length > 0) {
    console.log(`\n🔴 Detailed Issues (${report.issues.length} total):`);

    const grouped = report.issues.reduce(
      (acc, issue) => {
        if (!acc[issue.severity]) acc[issue.severity] = [];
        acc[issue.severity].push(issue);
        return acc;
      },
      {} as Record<string, SEOIssue[]>
    );

    ["critical", "warning", "info"].forEach((severity) => {
      if (grouped[severity]) {
        const icon =
          severity === "critical" ? "🔴" : severity === "warning" ? "🟡" : "🔵";
        console.log(`\n${icon} ${severity.toUpperCase()}`);
        grouped[severity].forEach((issue) => {
          console.log(`   ${issue.url}`);
          console.log(`   → ${issue.message}`);
        });
      }
    });
  } else {
    console.log("\n✅ No issues found!");
  }

  console.log("\n" + "=".repeat(80) + "\n");
}
