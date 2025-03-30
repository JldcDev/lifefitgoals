// src/services/authService.ts

import axios from 'axios';

export async function loginUser(email: string, password: string) {
  // Aquí puedes simular una llamada a backend
  return new Promise<{ token: string }>((resolve, reject) => {
    if (email === 'demo@lifefit.com' && password === '123456') {
      resolve({ token: 'fake-jwt-token' });
    } else {
      reject(new Error('Credenciales inválidas'));
    }
  });
}

const API_URL = 'http://localhost:5000/api/auth'; // ajusta si es necesario

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

// Función para obtener el perfil del usuario autenticado
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No se encontró un token en el almacenamiento local');
  }

  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Retorna el perfil del usuario (debería incluir { email })
  return response.data; // debería retornar { email }
};