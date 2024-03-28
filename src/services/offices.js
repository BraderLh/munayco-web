import Error from "next/error";

const API_BRANCH_OFFICES_URL = 'http://localhost:8080/balh/munayco/api/v1/branchOffice';

export async function createBranch(form) {
  const token =  localStorage.getItem('auth-token')
  try {
    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form)
    }
    const response = await fetch(API_BRANCH_OFFICES_URL, options);
  
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
    
  } catch (error) {
    console.error('ERROR: ' + error);
    throw new Error(error);
  }
}

export async function deleteBranch(branchId) {
  const token =  localStorage.getItem('auth-token')
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(API_BRANCH_OFFICES_URL + `/${branchId}`, options);
  
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
    
  } catch (error) {
    console.error('ERROR: ' + error);
    throw new Error(error);
  }
}

export async function getBranches() {
  const token =  localStorage.getItem('auth-token')
  try {
    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      next: {revalidate: 3600}
    }
    const response = await fetch(API_BRANCH_OFFICES_URL, options);
  
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
    
  } catch (error) {
    console.error('ERROR: ' + error);
    throw new Error(error);
  }
}

export async function updateBranch(branchId, form) {
  const token =  localStorage.getItem('auth-token')
  try {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form),
      next: {revalidate: 3600}
    }
    const response = await fetch(API_BRANCH_OFFICES_URL + `/${branchId}`, options);
  
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
    
  } catch (error) {
    console.error('ERROR: ' + error);
    throw new Error(error);
  }
}