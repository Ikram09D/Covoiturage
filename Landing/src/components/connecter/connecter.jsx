import './connecter.css';
import React, { useState } from 'react';
import axios from 'axios';

function Connecter() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                if (res.data.status === 'success') {
                    window.location.href = '/Accuiel_Publier_Un_Trajet';
                } else {
                    setErrorMessage(res.data.message);
                }
            })
            .catch(err => {
                setErrorMessage('An error occurred. Please try again later.');
                console.log(err);
            });
    }

    return (
        <section id='conecter'>
            <div className='formulaire-de-connexion'>
                <h1>Se connecter à votre compte</h1>
                <h1 id='nameAPP'>EddU</h1>
                <p>Veuillez vous connecter pour accéder à votre compte.</p>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"><h4>Email</h4></label>
                    <input className='inputdistance' type="email" name="email" placeholder="Entrer votre email" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password"><h4>Mot de passe</h4></label>
                    <input className='inputdistance' type="password" name="password" placeholder="Entrer votre mot de passe" onChange={e => setPassword(e.target.value)} />
                    <br />
                    <a id="mdpoublier" href="/réinitialisation_mot_de_passe">mot de passe oublié?</a>
                    <br />
                    <div id='souvenir'>
                        <input type="checkbox" id />
                        <p>Se souvenir de moi</p>
                    </div>
                    <input className='inputdistance' type="submit" id='boutonconnexion' value='Se connecter' />
                </form>
            </div>
            <p>Vous n'avez pas de compte? <a id='lien' href="/Type">Créez-en un !</a></p>
        </section>
    );
}

export default Connecter;
