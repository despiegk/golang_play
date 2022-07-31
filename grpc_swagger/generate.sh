set -ex
#https://www.npmjs.com/package/protobuf2swagger

protobuf2swagger

#uses: buf.gen.yaml
# buf generate

#https://openapi-generator.tech/docs/templating#variables
rm -rf generated_go
openapi-generator-cli generate -i generated/swagger.json -g go -o generated_go

mkdir -p generated_go2

#https://github.com/deepmap/oapi-codegen
~/go/bin/oapi-codegen --generate types --old-config-style -package mypackage generated_go/api/openapi.yaml >  generated_go2/types.go
~/go/bin/oapi-codegen --generate chi-server --old-config-style -package mypackage generated_go/api/openapi.yaml >  generated_go2/server.go

pushd generated

echo go to: http://localhost:3000/
node server.js

popd