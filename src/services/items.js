const API_URL = 'http://localhost:8080/balh/munayco/api/v1/itemType'

export async function fetchItems() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
    next: {revalidate: 3600}
  });
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to fecth data')
  }

  const data = await response.json();
  console.log(data);

  return data.data;
}