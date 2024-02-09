import { WALLET_API_URI } from '../..';

const fetchApi = async (route, method, data) => {
  // @ts-ignore
  const resp = await fetch(`${WALLET_API_URI}${route}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  });

  const response = await resp.json();
  // console.log("response,", response);
  return response;
};

export default fetchApi;