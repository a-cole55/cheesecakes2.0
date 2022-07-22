import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "../pages/Specials.css";
import { motion } from "framer-motion";

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
                <LocalOfferIcon className="shop discount" fontSize="large"/>
            </div>
            <motion.div 
            className="coupon"
            initial={{ y: "-50%"}}
            animate={{ y: 20, transition: {delay: 0.4, duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}}}
            exit={{ opacity: 0}}
            transition={transition}>
                <h2>Cheesecake Lovers Special</h2>
                <span>10% off Any Purchase</span>
                <h3>PROMOCODE: </h3>
                <h4>CHEESECAKE2022</h4>
            </motion.div>

        </motion.div>

        
    )
}