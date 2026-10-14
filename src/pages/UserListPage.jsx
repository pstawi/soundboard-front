import { useEffect, useState } from 'react';
import { list } from '../services/userService';

// 1. Définition du composant
function UserListPage() {

    // 2. State pour stocker les utilisateurs
    const [users, setUsers] = useState([]);

    // 3. Fonction qui va chercher les utilisateurs dans l'API
    const fetchUsers = async () => {
        try {
            const response = await list();
            setUsers(response);
        } catch (error) {
            console.error('Erreur pendant le chargement des utilisateurs', error);
        }
    };

    // 4. On lance fetchUsers quand le composant se charge
    useEffect(() => {
        fetchUsers();
    }, []);

    // 5. Affichage des résultats
    return (
        <div>
            <h1>Liste des utilisateurs</h1>

            {users.length > 0 ? (
                users.map((user) => (
                    <p key={user.id}>{user.username}</p>
                ))
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
}

export default UserListPage;