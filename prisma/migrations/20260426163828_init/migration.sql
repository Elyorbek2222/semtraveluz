-- CreateTable
CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" JSONB NOT NULL,
    "content" JSONB NOT NULL,
    "metaTitle" JSONB NOT NULL,
    "metaDescription" JSONB NOT NULL,
    "keyword" TEXT NOT NULL,
    "primaryKeyword" TEXT,
    "secondaryKeywords" TEXT,
    "lsiKeywords" TEXT,
    "seoScore" INTEGER NOT NULL DEFAULT 0,
    "seoBreakdown" JSONB,
    "status" TEXT NOT NULL DEFAULT 'pending_generation',
    "publishedAt" DATETIME,
    "reviewedAt" DATETIME,
    "reviewedBy" TEXT,
    "wordCount" INTEGER NOT NULL DEFAULT 0,
    "languages" TEXT NOT NULL DEFAULT 'uz,ru,en',
    "category" TEXT,
    "tags" TEXT,
    "imageUrl" TEXT,
    "featureImage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "GenerationLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blogPostId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tokensUsed" INTEGER NOT NULL DEFAULT 0,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "errorDetails" TEXT,
    "details" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GenerationLog_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "BlogPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Keyword" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "keyword" TEXT NOT NULL,
    "niche" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'uz',
    "searchVolume" INTEGER NOT NULL DEFAULT 0,
    "difficulty" TEXT NOT NULL DEFAULT 'medium',
    "intent" TEXT NOT NULL DEFAULT 'informational',
    "keywordType" TEXT,
    "relatedKeywords" TEXT,
    "usedInPosts" TEXT,
    "postCount" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FeatureFlag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "value" TEXT,
    "updatedBy" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "CronExecution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topic" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "postId" TEXT,
    "seoScore" INTEGER,
    "tokensUsed" INTEGER,
    "duration" INTEGER,
    "error" TEXT,
    "details" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TranslationResult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blogPostId" TEXT NOT NULL,
    "sourceLanguage" TEXT NOT NULL,
    "targetLanguage" TEXT NOT NULL,
    "originalText" TEXT NOT NULL,
    "translatedText" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "error" TEXT,
    "retries" INTEGER NOT NULL DEFAULT 0,
    "tokensUsed" INTEGER NOT NULL DEFAULT 0,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");

-- CreateIndex
CREATE INDEX "GenerationLog_blogPostId_idx" ON "GenerationLog"("blogPostId");

-- CreateIndex
CREATE INDEX "GenerationLog_action_idx" ON "GenerationLog"("action");

-- CreateIndex
CREATE INDEX "GenerationLog_status_idx" ON "GenerationLog"("status");

-- CreateIndex
CREATE INDEX "Keyword_niche_idx" ON "Keyword"("niche");

-- CreateIndex
CREATE INDEX "Keyword_intent_idx" ON "Keyword"("intent");

-- CreateIndex
CREATE INDEX "Keyword_difficulty_idx" ON "Keyword"("difficulty");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_keyword_language_key" ON "Keyword"("keyword", "language");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureFlag_name_key" ON "FeatureFlag"("name");

-- CreateIndex
CREATE INDEX "CronExecution_status_idx" ON "CronExecution"("status");

-- CreateIndex
CREATE INDEX "CronExecution_createdAt_idx" ON "CronExecution"("createdAt");

-- CreateIndex
CREATE INDEX "TranslationResult_blogPostId_idx" ON "TranslationResult"("blogPostId");

-- CreateIndex
CREATE INDEX "TranslationResult_targetLanguage_idx" ON "TranslationResult"("targetLanguage");
