import Error from "next/error";

const AUTHENTICATION_AUTH_URL = 'http://localhost:8080/balh/munayco/auth';

export async function singUp(form) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
    const response = await fetch(AUTHENTICATION_AUTH_URL + '/singUp', options);
  
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
    
  } catch (error) {
    console.error('ERROR: ' + error);
    throw new Error(error);
  }
}

export async function login(form) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
      const response = await fetch(AUTHENTICATION_AUTH_URL + '/login', options);
    
      if (!response.ok) {
        throw new Error(response.status);
      }
      
      return response.json();
      
    } catch (error) {
      console.error('ERROR: ' + error);
      throw new Error(error);
    }
  }