const API_URL = "http://localhost:8080/balh/munayco/api/v1/itemType";

export async function fetchItems() {
  try {
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    };

    const response = await fetch(API_URL, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();

  } catch (error) {
    console.error("ERROR: " + error);
  }
}
