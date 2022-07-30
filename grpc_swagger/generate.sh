set -ex
#https://www.npmjs.com/package/protobuf2swagger

protobuf2swagger

pushd generated

echo 
node server.js

popd