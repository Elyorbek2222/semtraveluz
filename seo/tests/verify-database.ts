/**
 * Database Verification Script
 * Tests PostgreSQL connection and table structure
 */

import * as dotenv from 'dotenv';
import path from 'path';
import { Pool } from 'pg';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

interface TestResult {
  name: string;
  passed: boolean;
  details?: string;
}

const results: TestResult[] = [];

// ============================================================================
// Test Suite
// ============================================================================

async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    results.push({
      name: '✅ Database Connection',
      passed: !!result.rows[0],
      details: `Connected at ${result.rows[0].now}`,
    });
  } catch (error) {
    results.push({
      name: '❌ Database Connection',
      passed: false,
      details: String(error),
    });
  }
}

async function testTablesExist() {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    client.release();

    const tables = result.rows.map((r) => r.table_name);
    const required = ['BlogPost', 'GenerationLog', 'Keyword', 'FeatureFlag', 'CronExecution', 'TranslationResult'];
    const missing = required.filter((t) => !tables.includes(t));

    results.push({
      name: missing.length === 0 ? '✅ All Tables Exist' : '⚠️  Missing Tables',
      passed: missing.length === 0,
      details: `Found: ${tables.join(', ')}${missing.length > 0 ? ` | Missing: ${missing.join(', ')}` : ''}`,
    });
  } catch (error) {
    results.push({
      name: '❌ Table Check',
      passed: false,
      details: String(error),
    });
  }
}

async function testBlogPostTable() {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT column_name, data_type FROM information_schema.columns
      WHERE table_name = 'BlogPost'
      ORDER BY ordinal_position
    `);
    client.release();

    const columns = result.rows.map((r) => `${r.column_name}(${r.data_type})`);
    results.push({
      name: '✅ BlogPost Schema',
      passed: columns.length > 0,
      details: `${columns.length} columns: ${columns.slice(0, 5).join(', ')}...`,
    });
  } catch (error) {
    results.push({
      name: '❌ BlogPost Schema',
      passed: false,
      details: String(error),
    });
  }
}

async function testRowCounts() {
  try {
    const client = await pool.connect();
    const tables = ['BlogPost', 'GenerationLog', 'Keyword', 'FeatureFlag', 'CronExecution'];
    const counts: { [key: string]: number } = {};

    for (const table of tables) {
      const result = await client.query(`SELECT COUNT(*) as count FROM "${table}"`);
      counts[table] = parseInt(result.rows[0].count);
    }

    client.release();

    const summary = Object.entries(counts)
      .map(([table, count]) => `${table}: ${count}`)
      .join(' | ');

    results.push({
      name: '✅ Row Counts',
      passed: true,
      details: summary,
    });
  } catch (error) {
    results.push({
      name: '⚠️  Row Counts',
      passed: false,
      details: String(error),
    });
  }
}

async function testIndices() {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT indexname FROM pg_indexes
      WHERE tablename IN ('BlogPost', 'GenerationLog', 'Keyword', 'CronExecution')
      ORDER BY indexname
    `);
    client.release();

    const indices = result.rows.map((r) => r.indexname);
    results.push({
      name: '✅ Indices',
      passed: indices.length > 0,
      details: `${indices.length} indices found`,
    });
  } catch (error) {
    results.push({
      name: '⚠️  Indices',
      passed: false,
      details: String(error),
    });
  }
}

// ============================================================================
// Main Runner
// ============================================================================

async function runVerification() {
  console.log('\n🔍 DATABASE VERIFICATION SCRIPT\n');
  console.log('='.repeat(80) + '\n');

  await testConnection();
  await testTablesExist();
  await testBlogPostTable();
  await testRowCounts();
  await testIndices();

  // Print results
  console.log('📊 RESULTS\n');
  results.forEach((result) => {
    console.log(`${result.name}`);
    if (result.details) console.log(`   ${result.details}\n`);
  });

  // Summary
  const passed = results.filter((r) => r.passed).length;
  const total = results.length;

  console.log('='.repeat(80));
  console.log(`\n✅ ${passed}/${total} checks passed\n`);

  // Close pool
  await pool.end();

  process.exit(passed === total ? 0 : 1);
}

runVerification().catch((error) => {
  console.error('Verification error:', error);
  process.exit(1);
});
