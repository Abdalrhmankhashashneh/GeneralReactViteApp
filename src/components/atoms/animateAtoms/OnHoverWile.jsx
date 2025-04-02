import { motion } from 'framer-motion';
const OnHoverWile = ({children}) => {
    return (
        <motion.div
        whileHover={{ scale: 1.1, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        >
        {children}
        </motion.div>
    );
    }

export default OnHoverWile;