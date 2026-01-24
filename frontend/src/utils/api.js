export const BASE_URL = import.meta.env.VITE_API_URL || ''; 
export const API_BASE_URL = `${BASE_URL}/api`;
const AI_SERVICE_URL = import.meta.env.VITE_AI_SERVICE_URL || 'http://158.158.112.55:8001';

export default API_BASE_URL;
export { AI_SERVICE_URL };