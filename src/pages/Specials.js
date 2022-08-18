import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "../pages/Specials.css";
import { motion } from "framer-motion";
import HomeImg from "../assets/bourbonpecan-min.jpg";
import Home2 from "../assets/strawberrys-min.jpg"

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Specials(){
    return(
        <motion.div 
        className="specials"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            <div className="specialsHeading">
                <h1>Specials</h1>
                <LocalOfferIcon className="shop discount hide shoppingTag" fontSize="large"/>
            </div>
            <motion.div 
            className="coupon"
            initial={{ y: "-50%"}}
            animate={{ y: 5, transition: {delay: 0.4, duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}}}
            exit={{ opacity: 0}}
            transition={transition}>
                <h2>Cheesecake Lovers Special</h2>
                <span>10% off Any Purchase</span>
                <h3>PROMOCODE: </h3>
                <h4>CHEESECAKE2022</h4>
            </motion.div>
            <img id="smallImg" className="hide" src={Home2} alt="cheesecake img"></img>
        <img id="bgImg" className="hide" src={HomeImg} alt="cheesecake img"></img>

        </motion.div>

        
    )
}