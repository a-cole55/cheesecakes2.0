import HomeLogo from "../assets/default.png";
import "./Home.css"

export default function Home(){
    return(
        <div id="landing">
            <img id="homeLogo" src={HomeLogo} alt="large logo"></img>
            <p>Welcome Cheesecake Lover! I'm so glad you're here. I look forward to providing you with the best quality cheesecakes you have ever experienced!</p>
        </div>

    )
}