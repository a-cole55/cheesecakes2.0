import HomeLogo from "../assets/default-min.png";
import "./Home.css";
import { motion } from "framer-motion";
import HomeImg from "../assets/bourbonpecan-min.jpg";
import Home2 from "../assets/strawberrys-min.jpg"

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Home(){
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
        <img id="smallImg" className="hide" src={Home2} alt="cheesecake img"></img>
        <img id="bgImg" className="hide" src={HomeImg} alt="cheesecake img"></img>
        </motion.div>
    )
}