import HomeLogo from "../assets/default-min.png";
import "./Home.css";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeImg from "../assets/bourbonpecan-min.jpg";
import Home2 from "../assets/strawberrys-min.jpg";
// import Carousel from "../components/Carousel"
import heart from "../assets/heart.png";
import box from "../assets/packages-icon-13.png";
import cheesecakeIcon from "../assets/cheesecake-icon.png";
import MenuPreview from "../components/MenuPreview";
import pb from "../assets/pb.png";
import pb2 from "../assets/pb2.png"
import summer from "../assets/summer.png";
import summer2 from "../assets/summer2.png";
// import keyLime from "../assets/key-lime2.png";



const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Home(props){
    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseOut = () => {
    //     setIsHovering(false);
    // }

    return(
        <motion.div 
        id="landing"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            <img id="homeLogo" src={HomeLogo} alt="logo"></img>
            <motion.p
            initial={{ y: "-70%"}}
            animate={{ y: "-45%", transition: {delay: 0.4, duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}}}
            exit={{ opacity: 0}}
            transition={transition}>Welcome Cheesecake Lover! I look forward to providing you with the best quality cheesecakes you've ever experienced.</motion.p>
        <img id="smallImg" src={Home2} alt="cheesecake img"></img>
        <img id="bgImg" src={HomeImg} alt="cheesecake img"></img>
        
        <div className="orderNow">
            <div className="orderNowBTN">
            <Link to="/menu"><button className="order-BTN">Order Now</button></Link>
            </div>
        </div>
        <div className="menuPreview">
            <MenuPreview src={pb} 
                alt="reeses cheesecake" 
                caption="Combining all the creamy, salty, buttery, fruity, unforgettably tasty flavors..."
                src2={pb2}/>
            <MenuPreview 
                src={summer2} 
                alt="strawberry lemonade cheesecake" 
                caption="Summer calls for cheesecake. And lil’ pocket-size cheesecakes too. Savor every slice of summer with..."
                src2={summer}/>
            <MenuPreview 
                src={pb} 
                alt="reeses cheesecake" 
                caption="Sink your teeth into the mini life."
                src2={pb2}/>
        </div>

        <div className="infoSection">
            <h2>Why Choose Cheesecakes By Chelsea?</h2>
            <div className="iconSection">
                <div className="infoItems">
                    <img src={cheesecakeIcon} alt="cheesecake icon" id="first-section" />
                    <h3>Custom Cheesecakes</h3>
                </div>
                <div className="infoItems">
                    <img src={heart} alt="heart icon" id="heartIcon"></img>
                    <h3>Made With <br></br>Love</h3>
                </div>
                <div className="infoItems">
                    <img src={box} alt="package icon"></img>
                    <h3>Thoughtfully Packaged</h3>
                </div>
            </div>
        </div>
    
        </motion.div>
    )
}