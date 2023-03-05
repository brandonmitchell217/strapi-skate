import axios from "axios";

const baseUrl = process.env.STRAPI_URL;
const base = "http://localhost:1337";

async function fetchQuery(path: string, params = null as string | null) {
  let url;

  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }

  const response = await axios.get(url);
  const data = response.data;

  return data;
}

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}

export { baseUrl, base, fetchQuery, formatCurrency };
