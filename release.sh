set -ex

WORKSPACE=`pwd`

cd $WORKSPACE/packages/app
pnpm run build && pnpm run release

cd $WORKSPACE/packages/app-a
pnpm run build && pnpm run release

cd $WORKSPACE/packages/app-b
pnpm run build && pnpm run release

cd $WORKSPACE/packages/app-c
pnpm run build && pnpm run release
