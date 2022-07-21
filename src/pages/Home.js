import HomeLogo from "../assets/default-min.png";
import "./Home.css";
import { motion } from "framer-motion";

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
            initial={{ y: "-50%"}}
            animate={{ y: 0, transition: {delay: 0.4, ...transition}}}
            exit={{ opacity: 0}}
            transition={transition}>Welcome Cheesecake Lover! I look forward to providing you with the best quality cheesecakes you have ever experienced.</motion.p>
        </motion.div>
    )
}