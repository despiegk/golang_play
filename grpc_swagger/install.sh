# pip3 install ipython
# pip3 install pyteal gevent
brew install bufbuild/buf/buf
brew install protoc-gen-go 
# protoc-gen-go-grpc
# go get github.com/grpc-ecosystem/grpc-gateway/v2
# go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
#https://grpc.io/docs/languages/go/quickstart/


#if nodejs express server needed

npm i -g protobuf2swagger

go mod tidy

pushd generated
npm i express
popd
