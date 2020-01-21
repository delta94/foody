#!/bin/sh
set -e

FORCED_USER_ID=${LOCAL_USER_ID:-9001}
FORCED_GROUP_ID=${LOCAL_GROUP_ID:-9001}

echo "Starting with UID: $FORCED_USER_ID"
echo "Starting with GID: $FORCED_GROUP_ID"

if [ $(getent group $FORCED_GROUP_ID) ]; then
  echo "group exists"
else
  echo "group does not exist"
  groupadd -g $FORCED_GROUP_ID foody
fi

useradd --shell /bin/bash --no-create-home --home $HOME -u $FORCED_USER_ID -g $FORCED_GROUP_ID -o -c "" foody || true

chown -R $FORCED_USER_ID:$FORCED_GROUP_ID $HOME

exec gosu foody "$@"
