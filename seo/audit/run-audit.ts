import { crawlSite } from "./site-crawler";
import { generateReport, printReport } from "./report-generator";
import fs from "fs";
import path from "path";

async function runAudit() {
  console.log("🚀 Starting SEO audit...\n");

  try {
    // Step 1: Crawl site
    console.log("🕷️  Crawling site...");
    const audits = await crawlSite();
    console.log(`\n✓ Crawled ${audits.length} pages\n`);

    // Step 2: Generate report
    console.log("📊 Generating report...");
    const report = generateReport(audits);

    // Step 3: Print report
    printReport(report);

    // Step 4: Save report to file
    const reportsDir = path.join(process.cwd(), "seo/audit/reports");
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, -5);
    const reportPath = path.join(reportsDir, `${timestamp}.json`);

    fs.writeFileSync(
      reportPath,
      JSON.stringify(
        {
          ...report,
          audits,
        },
        null,
        2
      )
    );

    console.log(`📁 Report saved to: ${reportPath}\n`);
  } catch (error) {
    console.error("❌ Error running audit:", error);
    process.exit(1);
  }
}

runAudit();
