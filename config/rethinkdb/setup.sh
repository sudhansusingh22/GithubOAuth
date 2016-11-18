#!/usr/bin/env bash
hz schema apply -n githubOauth -c localhost:28015 ./config/rethinkdb/schema.toml
