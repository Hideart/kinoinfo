export const fetchMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const fetchApi = async (url, data = {}, options = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const method = options.method || fetchMethods.GET;

  // eslint-disable-next-line no-undef
  const response = await fetch(url, {
    headers,
    method,
    timeout: 45000,
    body: Object.keys(data).length ? JSON.stringify(data) : undefined,
  });

  const result = await response.json();
  const statusFirstDigit = response.status.toString()[0];
  let error;
  if (statusFirstDigit !== '2') {
    error = result.message;
  }

  return {
    result,
    error,
    status: response.status,
  };
};
