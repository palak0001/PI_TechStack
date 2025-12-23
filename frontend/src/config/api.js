// API Configuration
// This file manages all API endpoints for the frontend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  CONTACT_SUBMIT: `${API_BASE_URL}/contact`,
  CONTACTS_GET: `${API_BASE_URL}/contacts`,
  HEALTH_CHECK: `${API_BASE_URL}/health`
};

export const apiClient = {
  submit: (endpoint, data) => {
    // For development with vite proxy
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
