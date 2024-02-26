export const WALLET_API_URI = import.meta.env.VITE_APP_BASE_URL;

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
  return response;
};

export default fetchApi;