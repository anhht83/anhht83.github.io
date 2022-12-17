function checkStatus(res) {
  if (res.ok) {
    return res;
  }
  const contentType = res.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') > -1) {
    return res.json().then((json) => window.Promise.reject(json));
  }
  throw new Error(res.statusText);
}

const request = async (path, options = {}) => {
  const { headers = {} } = options;
  let { body } = options;
  // build header
  //headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  // build body
  if (
    headers['Content-Type'] === 'application/json' &&
    !(typeof body === 'string' || body instanceof String)
  ) {
    body = JSON.stringify(body);
  }
  // fetch
  const response = await fetch(path, {
    ...options,
    body,
    headers
  })
    .then(checkStatus)
    .then((res) => res.json());
  return response;
};

export default request;
