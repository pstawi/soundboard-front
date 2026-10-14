import { useState } from "react";
import { connexion } from "../services/authAPI";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Page de connexion.
// Elle permet à l'utilisateur d'entrer son login et son mot de passe et de les envoyer au backend.
function LoginPage() {

    // États locaux pour stocker les valeurs des champs input.
    // useState() permet de garder en mémoire les données saisies par l'utilisateur.
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // Fonction appelée lors de la soumission du formulaire.
    // async permet d'attendre la réponse du backend avant de continuer.
    const handleSubmit = async (e) => {
      // Empêche le rechargement complet de la page par le navigateur.
      e.preventDefault();

      try {
        // Debug pendant le développement : on affiche les valeurs saisies.
        console.log(login);
        console.log(password);

        // Appel de la fonction de connexion définie dans authAPI.js.
        await connexion({login, password});
        console.log("connexion reussi");
      } catch (error) {
        // Si la requête échoue, on affiche l'erreur dans la console.
        console.log(error);
      }
      
    }

  return (
    <>
      <div>
        <h1>LoginPage</h1>
        {/* Form est un composant de React Bootstrap.
            onSubmit appelle handleSubmit lorsqu'on valide le formulaire. */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {/* value={login} relie le champ à l'état local.
                onChange met à jour le state à chaque frappe de clavier. */}
            <Form.Control type="email" placeholder="Enter email" value={login} onChange={(e) => setLogin(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* Le mot de passe est également stocké dans un state local. */}
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* Bouton de soumission du formulaire.
              type="submit" déclenche handleSubmit. */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;
