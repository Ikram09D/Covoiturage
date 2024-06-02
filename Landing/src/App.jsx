import LandingPage from "./components/LandingPage/LandingPage";
import Signup from "./components/SignUp/SingUp";
import CoordonneesForm from "./components/SignUp/CoordonneesForm/CoordonneesForm";
import './App.css';
import MDPOUBLIER from "./components/connecter/mdpOublier/mdpoublier";
import Cordon from "./components/SignUpPassager/Cordonnées/Cordo";
import VehiculeForm from "./components/SignUp/VehiculeForm/VehiculeForm";
import InformationForm from "./components/SignUp/InformationForm/InformationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypeC from "./components/LandingPage/TypeC/TypeC"; 
import InfoP from "./components/SignUpPassager/InformationsPe/Info";
import Cm from "./components/SignUp/Conifrmationmail/cm";
import Errore from "./ERRORNOTFOUND";
import MesTrajets from "./components/Accueill/2/MesTrajet";
import Cmp from "./components/SignUpPassager/CMP/cmp";
import Accueil from "./components/Accueill/1/entrer";
import Reclamation from "./components/Accueill/7/Reclamation";
import FAQ from "./components/LandingPage/FAQ/faq";
import Messagerie from "./components/Accueill/5/Messagerie";
import Payement from "./components/Accueill/4/Payement";
import Favories from "./components/Accueill/3/Favoris";
import Communaute from "./components/Accueill/6/Communaute";
import ResultatPage from "./components/resultat";
import Connecter from "./components/connecter/connecter";
const App=() =>{
  
  return (
  <body>

   <BrowserRouter>
   <Routes>
    <Route index element={<LandingPage />}/>
    <Route path="/home" element={<LandingPage/>}/>
    <Route path="/resultats" element={<ResultatPage/>}/>
    <Route path="/Messagerie" element={<Messagerie/>}/>
    <Route path="/ERROR" element={<Errore/>}/>
    <Route path="/réinitialisation_mot_de_passe" element={<MDPOUBLIER/>}/>
    <Route path="/Connecter" element={<Connecter/>}/>
    <Route path="/Type" element={<TypeC/>}/>
    <Route path="/Reclamations" element={<Reclamation/>}/>
    <Route path="/FAQ" element={<FAQ/>}/>
    <Route path="/Payement" element={<Payement/>}/>
    <Route path="/Favoris" element={<Favories/>}/>
    <Route path="/Communauté" element={<Communaute/>}/>
    <Route path="/Accuiel_Publier_Un_Trajet" element={<Accueil />}/>
    <Route path="/MesTrajets" element={<MesTrajets />}/>
    <Route path="/Confirmation" element={<Cm />}/>
    <Route path="/inscriptionConducteur" element={<Signup />} />
    <Route path="/Info" element={<InfoP />} />
    <Route path="/Cordon" element={<Cordon />} />
    <Route path="/info" element={<InfoP />} />
    <Route path="/ConfirmationP" element={<Cmp/>}></Route>
    <Route path="/Conducteur" element={<InformationForm />} />
    <Route path="/Coordonnees" element={<CoordonneesForm></CoordonneesForm>}></Route>
    <Route path="/VehiculeF" element={<VehiculeForm />}></Route>

    </Routes>
    </BrowserRouter>  

    </body>);
}

export default App;