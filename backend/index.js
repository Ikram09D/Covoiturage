import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roo',
    database: 'covoiturage'
});

// Vérification de l'email
app.post('/check-email', (req, res) => {
    const { email } = req.body;
    const sql = "SELECT * FROM utilisateur WHERE email = ?";

    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error('Une erreur s\'est produite:', err);
            return res.status(500).json({ status: 'error', message: 'Une erreur s\'est produite lors de la vérification de l\'email.' });
        }
        if (result.length > 0) {
            return res.json({ status: 'success', message: 'Email found' });
        } else {
            return res.json({ status: 'error', message: 'Email not found' });
        }
    });
});

// Autres endpoints...
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe_ = ?";
   
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ status: 'error', message: 'Login failed' });
        if (data.length > 0) {
            return res.json({ status: 'success', message: 'Login successful' });
        } else {
            return res.json({ status: 'error', message: 'Informations erronées, essayez un autre mot de passe' });
        }
    });
});

app.post('/signup', (req, res) => {
    const { Id_User, username, nom, prénom, date_de_naissance, Adresse, wilaya, commune, statut, genre, email, Télephone, mot_de_passe_, carta_nationale, type } = req.body;
    const sql = "INSERT INTO utilisateur (Id_User, username, nom, prénom, date_de_naissance, Adresse, wilaya, commune, statut, genre, email, Télephone, mot_de_passe_, carta_nationale, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
   
    db.query(sql, [Id_User, username, nom, prénom, date_de_naissance, Adresse, wilaya, commune, statut, genre, email, Télephone, mot_de_passe_, carta_nationale, type], (err, result) => {
        if (err) return res.json({ status: 'error', message: 'Sign-up failed' });
        return res.json({ status: 'success', message: 'Sign-up successful' });
    });
});

app.post('/search', (req, res) => {
    const { origin, destination, numberOfSeats } = req.body;

    db.query('SELECT * FROM trajet WHERE origine = ? AND destination = ? AND places_disponibles >= ?', [origin, destination, numberOfSeats], (err, result) => {
        if (err) {
            console.error('Une erreur s\'est produite:', err);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de la recherche.' });
        } else {
            res.json(result);
        }
    });
});

app.post('/reset-password', (req, res) => {
    const { email, newPassword } = req.body;
    const sql = "UPDATE utilisateur SET mot_de_passe_ = ? WHERE email = ?";

    db.query(sql, [newPassword, email], (err, result) => {
        if (err) {
            console.error('Une erreur s\'est produite:', err);
            return res.status(500).json({ status: 'error', message: 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.' });
        }
        if (result.affectedRows > 0) {
            return res.json({ status: 'success', message: 'Mot de passe mis à jour avec succès.' });
        } else {
            return res.json({ status: 'error', message: 'Email non trouvé.' });
        }
    });
});


app.listen(8081, () => {
    console.log('listening on port 8081...');
});
