import axios from 'axios';
import {tracer} from './trace';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

let span;

api.interceptors.request.use(
  request => {
    span = tracer.startSpan(request.url, {startTime: Date.now()});
    span.setAttribute('method', request.method);
    span.setAttribute('baseUrl', request.baseURL);
    span.setAttribute('path', request.url);

    return request;
  },
  error => {
    span.setAttribute('request error', error.message);
    span.end(Date.now());
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    span.setAttribute('pokemon', response.data.name);
    span.end(Date.now());

    return response;
  },
  error => {
    span.setAttribute('response error', error.message);
    span.end(Date.now());
    Promise.reject(error);
  },
);

export const getPokemon = async pokemon => {
  const poke = await api.get(`/pokemon/${pokemon}`);
  return poke.data;
};
