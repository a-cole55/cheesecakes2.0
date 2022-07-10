import "./Menu.css";
import Cheesecake from "../components/Cheesecake"
import BananaPudding from "../assets/banana.jpg";
import BourbonPecan from "../assets/pecan (2).jpg";
import CaramelApple from "../assets/caramelapple.jpg";
import Chocolate from "../assets/choc.jpg";
import Cinnamon from "../assets/cinnamon.jpg";
import Cookies from "../assets/cookies.jpg";
import SweetPotatoe from "../assets/sweetpotatoe (2).jpg";
import Neo from "../assets/neopolitan.jpg";
import Minis from "../assets/minis.jpg"



export default function Menu(cartQuantity){
    // alert(cartQuantity[0], cartQuantity[1])
    return(
        <div>
        <h1>Menu</h1>
        <div className="menu">
            <Cheesecake img={BananaPudding} alt="bourbon banana pudding cheesecake" title="Bourbon Banana Pudding" price="$55" />
            <Cheesecake img={BourbonPecan} alt= "bourbon pecan pie cheesecake" title="Bourbon Pecan" price="$50"/>
            <Cheesecake img={Chocolate} alt="chocolate cheesecake" title="Chocolate" price="$35" />
            <Cheesecake img={Cinnamon} alt="cinnamon roll cheesecake" title="Cinnamon Roll" price="$50" />
            <Cheesecake img={Cookies} alt="cookies and cream cheesecake" title="Cookies N' Creme" price="$45" />
            <Cheesecake img={SweetPotatoe} alt="sweet potatoe cheesecake" title="Sweet Potatoe" price="$30" />
            <Cheesecake img={Neo} alt="neapolitan cheesecake" title="Neapolitan" price="$55" />
            <Cheesecake img={CaramelApple} alt="caramel apple cheesecake" title="Caramel Apple" price="$35" />
            <Cheesecake img={Minis} alt="3 mini cheesecakes of assorted flavors" title="3x Assorted Minis" price="$35" />
        </div>
        </div>

    )
}