import Owner from "../assets/owner-min.jpg";
import { motion } from "framer-motion";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function About(){
    return(
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
            <h1>Meet the Baker💫</h1>
            <h2>Chelsea Jones</h2>
            <img src={Owner} alt="owner"></img>
            <p><strong>Welcome to Cheesecakes by Chelsea!</strong><br></br>My name is Chelsea Jones. Originally from Kansas and now an Austin resident. I love being creative in the kitchen and experimenting with new cheesecake flavors. 
            I am so happy that you have chosen to place an order with me! I look forward to providing you with the best quality cheesecake you have ever experienced!</p>

        </motion.div>
    )
}