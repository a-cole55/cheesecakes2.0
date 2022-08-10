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
                <motion.img 
                    // whileHover={{scale:1.1}}
                    src={props.src}
                    alt={props.alt} 
                    className={isHovering ? "hide" : ""}/>
                <div className="captionText">
                    <p>{props.caption}</p>
                </div>
            </motion.div>
    )

}