echo "Cloning LICENSE to babel packages"
cat LICENSE
ls -db ./packages/*/ | egrep -v '.*packages\/(babel-parser|babel-plugin-transform-object-assign)\/?$' | xargs -n 1 cp LICENSE
ls -db ./eslint/*/ | egrep -v '.*eslint\/(babel-eslint-plugin)\/?$' | xargs -n 1 cp LICENSE
