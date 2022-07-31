set -x

#see https://openapi-generator.tech/
#https://openapi-generator.tech/docs/templating#variables
rm -rf generated_go
rm -rf generated_rust
rm -rf generated_html2
openapi-generator-cli generate -i openapi.json -g go -o generated_go
openapi-generator-cli generate -i openapi.json -g rust -o generated_rust
openapi-generator-cli generate -i openapi.json -g html2 -o generated_html2
openapi-generator-cli generate -i openapi.json -g typescript-fetch -o generated_ts

