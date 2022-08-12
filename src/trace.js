const {trace} = require('@opentelemetry/api');
const {
  BasicTracerProvider,
  SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-base');

const {ZipkinExporter} = require('@opentelemetry/exporter-zipkin');

// Create and register an SDK
const provider = new BasicTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ZipkinExporter()));

trace.setGlobalTracerProvider(provider);

// Acquire a tracer from the global tracer provider which will be used to trace the application
const name = 'my-application-name';
const version = '0.1.0';

export const tracer = trace.getTracer(name, version);
