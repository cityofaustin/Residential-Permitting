#!/usr/bin/env bash

set -o errexit

export JEKYLL_VERSION=3.8.1
TAG="jekyll/jekyll:$JEKYLL_VERSION"

echo "Starting jekyll v$JEKYLL_VERSION..."
docker run \
  --rm \
  --volume="$PWD:/srv/jekyll" \
  --interactive --tty \
  --publish 4000:4000 \
  $TAG \
  jekyll serve --watch --incremental
