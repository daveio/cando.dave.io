BUILDDATE=$(date +%Y%M%d.%H%m)
BUILDTAG=$(dd if=/dev/urandom bs=1024 count=1 2> /dev/null | shasum -a 256 | cut -b 1-6)
yarn && yarn run build && git add -A . && git commit -am "snapshot ${BUILDDATE}.${BUILDTAG}" && git push && cd ../cando.dave.io.pages && git add -A . && git commit -am "deploy ${BUILDDATE}.${BUILDTAG}" && git push
