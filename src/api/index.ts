import axios, { type AxiosResponse } from "axios";
import type { IMatchResult } from '../models/IMatchResult';

const API_token = 'd5fcdeb3c9944082b3105447ebca48b7';
const API_URL = 'http://api.football-data.org/v2';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[ 'X-Auth-Token' ] = API_token;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
}

const Matches = {
  list: (): Promise<IMatchResult> => requests.get("/matches"),
  details: (id: string) => requests.get(`/matches/${id}`),
}

export default {
  Matches
}