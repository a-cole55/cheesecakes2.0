import { useState } from "react";
import { motion } from "framer-motion";

export default function MenuPreview(props){

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return(
        <motion.div 
                whileHover={{scale:1.1}}
                className="preview"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <img 
                    src={props.src}
                    alt={props.alt} 
                    className={isHovering ? "hide" : ""}/>
                <img 
                    src={props.src2}
                    alt={props.alt2}
                    className={isHovering ? "" : "hide"}/>
                <div className="orderNowContainer">
                    <button className="orderMenuBTN">Order Now</button>
                </div>
                <div className="captionText">
                    <p>{props.caption}</p>
                </div>
            </motion.div>
    )
}