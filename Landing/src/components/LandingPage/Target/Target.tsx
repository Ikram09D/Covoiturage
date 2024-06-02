import "./Target.css";
import I1 from "../../../assets/1.svg";
import I2 from "../../../assets/2.svg";
import I3 from "../../../assets/3.svg";
import I4 from "../../../assets/4.svg";
import I5 from "../../../assets/5.svg";
import TARG from "../../../assets/target.svg";
function Target() {
  return (
    <section id="Target">
      <h3>Notre cible</h3>
      <div id="ecriture">
        <div>
          <img src={I1}alt="" />
          <p>Employés et entreprises</p>
        </div>
        <div>
          <img src={I2} alt="" />
          <p>Étudiants universitaires</p>
        </div>
        
        <div>
          <img src={I3} alt="" />
          <p>Groupes d'amis ou de familles</p>
        </div>
        <div>
          <img src={I4} alt="" />
          <p>Voyageurs réguliers </p>
        </div>
        <div>
          <img src={I5} alt="" />
          <p>Événements spécifiques</p>
        </div>
      </div>
      <div id="imge">
        <img src={TARG} alt="image"></img>
      </div>
    </section>
  );
}
export default Target;
