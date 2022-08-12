# POC React Native + Opentelemetry api + Zipkin

POC para estudo sobre a viabilidade de envio de traces do de uma aplicação React Native usando o Opentelemtry e o Zipkin.

[@opentelemetry/api](https://www.npmjs.com/package/@opentelemetry/api)

[@opentelemetry/sdk-trace-base](https://www.npmjs.com/package/@opentelemetry/sdk-trace-base)

[@opentelemetry/exporter-zipkin](https://www.npmjs.com/package/@opentelemetry/exporter-zipkin)

Para executar o app, instale as dependências e inicie na plataforma que desejar (ios ou android)

> Para ter o Zipkin rodando localmente usando docker execute o comando abaixo

```bash
$ docker run -d -p 9411:9411 openzipkin/zipkin
```

> Para rodar a aplicação React Native

```bash
$ cd poc-opentelemetry-react-native
$ yarn install
$ yarn android ou yarn ios
```
