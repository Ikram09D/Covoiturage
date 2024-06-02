import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";
import { MdFavoriteBorder, MdOutlinePayment, MdOutlineReport, MdOutlinePeopleOutline } from "react-icons/md";
import { BsChatRightDots } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import './sideBar.css'; 
function Sidebar(i) {
    const nameApp='EddU'; 
    
let Accueilm="itemOn";
let MesTrajets='itemOff';
let Favories='itemOff';
let Payement='itemOff';
let Messagerie='itemOff';
let Communauté='itemOff';
let Reclamation='itemOff';
    
if (i==1 ){
    Accueilm="itemOff";
    MesTrajets='itemOn';
    Favories='itemOff';
    Payement='itemOff';
    Messagerie='itemOff';
    Communauté='itemOff';
    Reclamation='itemOff';
 }
 if (i==2 ){
   Accueilm="itemOff";
    MesTrajets='itemOff';
    Favories='itemOn';
    Payement='itemOff';
    Messagerie='itemOff';
    Communauté='itemOff';
    Reclamation='itemOff';
 }
 if (i==3 ){
   Accueilm="itemOff";
    MesTrajets='itemOff';
    Favories='itemOff';
    Payement='itemOn';
    Messagerie='itemOff';
    Communauté='itemOff';
    Reclamation='itemOff';
 }
 if (i==4 ){
   Accueilm="itemOff";
    MesTrajets='itemOff';
    Favories='itemOff';
    Payement='itemOff';
    Messagerie='itemOn';
    Communauté='itemOff';
    Reclamation='itemOff';
 }
 if (i==5 ){
   Accueilm="itemOff";
    MesTrajets='itemOff';
    Favories='itemOff';
    Payement='itemOff';
    Messagerie='itemOff';
    Communauté='itemOn';
    Reclamation='itemOff';
 }
 if (i==6){
   Accueilm="itemOff";
    MesTrajets='itemOff';
    Favories='itemOff';
    Payement='itemOff';
    Messagerie='itemOff';
    Communauté='itemOff';
    Reclamation='itemOn';
 
 }   
  return (
        <div className='menu'>
            <div className='logo-container'>
                <div className='logo'>
                  <h1>{nameApp}</h1>
                </div>
                <div className='nom-app'>
                   <h2>{nameApp}</h2>
                </div>
            </div>

            <div className='menu-list' >
                <a href="/Accuiel_Publier_Un_Trajet" className={Accueilm}>
                    <IoHomeOutline className='icon' />
                    Accueil
                </a>
                <a href="/MesTrajets" className={MesTrajets} >
                    <TbRoute className='icon' />
                    Mes trajets
                </a>
                <a href="/Favoris" className={Favories} >
                    <MdFavoriteBorder className='icon' />
                    Favoris
                </a>
                <a href="/Payement" className={Payement} >
                    <MdOutlinePayment className='icon' />
                    Payment
                </a>
                <a href="/Messagerie" className={Messagerie} >
                    <BsChatRightDots className='icon' />
                    Messagerie
                </a>
                <a href="/Communauté" className={Communauté} >
                    <MdOutlinePeopleOutline className='icon' />
                    Communauté
                </a>
                <a href="/Reclamations" className={Reclamation} >
                    <MdOutlineReport className='icon' />
                    Réclamation
                </a>
            </div>

            <div className='logout'>
                <a href="#" className='itemOff'>
                    <TbLogout className='icon' />
                    Déconnexion
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
