import axios from 'axios';

// Ce fichier crée une instance Axios.
// Axios est une librairie qui permet de faire des requêtes HTTP depuis le front.
// On centralise ici la configuration commune à toutes les requêtes.

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

// Intercepteur de requêtes :
// avant chaque appel HTTP, on peut modifier la configuration.
// Ici, on ajoute le token si l'utilisateur est connecté.
api.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;