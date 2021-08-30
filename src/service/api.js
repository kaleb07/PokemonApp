import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_URL,
  timeout: 6000,
});

api.interceptors.request.use(request => {
  console.log('\nREQUEST INTERCEPTOR. {data}: ', request.data);
  console.log(`URL RESPONSE: ${request.baseURL}/${request.url}`);
  console.log('NOTE: REQUEST Param services.');
  return request;
});

api.interceptors.response.use(response => {
  console.log('\n\nRESPONSE INTERCEPTOR: ', response.data);
  console.log('URL RESPONSE: ', response.request._url);
  console.log('NOTE: RESPONSE Param custom services.\n\n');
  return response;
});

export const URI = {
  CHAR: 'api/v2/pokemon',
  ITEM: 'api/v2/item',
};

export default api;
