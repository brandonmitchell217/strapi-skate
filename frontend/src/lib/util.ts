const baseUrl = process.env.STRAPI_URL;
const base = "http://localhost:1337";

async function fetchQuery(path: string, params = null as string | null) {
  let url;

  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
}

export { baseUrl, base, fetchQuery };
