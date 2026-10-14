import api from './api';

// Ce fichier contient les appels API pour l'authentification.
// Il est séparé de l'interface utilisateur pour garder le code plus propre,
// plus lisible et plus facile à maintenir.

// Fonction de connexion : envoie le login et le mot de passe au backend.
// Le paramètre passé est un objet destructuré : { login, password }.
export async function connexion({login, password}) {
    // Console.log est utile pendant le développement pour vérifier les valeurs envoyées.
    // À retirer en production si on ne veut pas afficher les données sensibles.
    console.log(login);
    console.log(password);

    // Appel HTTP de type POST vers l'endpoint de connexion.
    // Le second argument est le corps de la requête JSON : { login, password }.
    const response = await api.post('/auth/login', {login, password});

    // On retourne uniquement les données de la réponse reçue du serveur.
    // Exemples : token, message, user, etc.
    return response.data;
}

// Fonction d'inscription : envoie les informations nécessaires pour créer un compte.
// Le paramètre est un objet destructuré : { username, mail, password }.
export async function register({username, mail, password}) {
    // On envoie les infos au backend via une requête POST.
    const response = await api.post('/auth/register', {username, mail, password});

    // Le backend peut renvoyer un message de succès, un user, ou un token.
    return response.data;
}