import HomeLogo from "../assets/default.png";
import "./Home.css";
import HomeImg from "../assets/bourbonpecan.jpg";
import Home2 from "../assets/strawberrys.jpg"

export default function Home(){
    return(
        <div id="landing">
            <img id="homeLogo" src={HomeLogo} alt="logo"></img>
            <p>Welcome Cheesecake Lover! I'm so glad you're here. I look forward to providing you with the best quality cheesecakes you have ever experienced.</p>
            <img id="smallImg" src={Home2} alt="cheesecake img"></img>
            <img id="bgImg" src={HomeImg} alt="cheesecake img"></img>
        </div>
    )
}