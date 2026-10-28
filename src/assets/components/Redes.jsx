import facebook from "../imgs/facebook.svg";
import instagram from "../imgs/instagram.svg";
import twitter from "../imgs/twitter.svg";

const Sociais = () => {
    return (
        <div className="flex gap-5" style={{marginTop:"30px"}}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
        </div>
    );
}

export default Sociais;