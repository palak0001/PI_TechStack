// api.js
// Central API configuration for frontend (works locally and in production)

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

console.log("API Base URL:", API_BASE_URL); // Optional: can remove later

export const API_ENDPOINTS = {
  CONTACT_SUBMIT: `${API_BASE_URL}/api/contact`,
  CONTACTS_GET: `${API_BASE_URL}/api/contacts`,
  HEALTH_CHECK: `${API_BASE_URL}/api/health`
};

export const apiClient = {
  submit: (endpoint, data) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  },

  get: (endpoint) => {
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }
};
