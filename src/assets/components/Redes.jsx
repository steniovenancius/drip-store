import facebook from "../imgs/facebook.svg";
import instagram from "../imgs/instagram.svg";
import twitter from "../imgs/twitter.svg";

const Sociais = () => {
    return (
        <view className="flex gap-5">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
        </view>
    );
}

export default Sociais;