#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run format
CI=true npm test
