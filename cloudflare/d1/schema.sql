CREATE TABLE IF NOT EXISTS demo_requests (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  industry TEXT NOT NULL,
  scale TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'zh',
  source TEXT NOT NULL DEFAULT '/',
  user_agent TEXT,
  ip TEXT,
  country TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at
  ON demo_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_demo_requests_industry
  ON demo_requests (industry);
