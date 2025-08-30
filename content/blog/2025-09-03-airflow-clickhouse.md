---
title: "Airflow + ClickHouse in production: what worked for me"
summary: "Materialized views, partitioning, and Airflow patterns that cut query time by ~50%."
publishedAt: "2025-09-03"
tags: ["airflow", "clickhouse", "mlflow"]
---
Notes from building end-to-end ML pipelines across 2000+ sites:
- MLflow for runs, models, artifacts.
- Partitioning strategies and MV patterns that made ClickHouse fly.
- Alerting and daily digests via Slack to keep operators sane.
