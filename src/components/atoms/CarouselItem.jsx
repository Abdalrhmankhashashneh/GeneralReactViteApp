import { motion } from "framer-motion";
const CarouselItem = ({ image, alt }) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >

      <div className="keen-slider__slide flex justify-center items-center">
        <img src={image} alt={alt} className="rounded-lg w-full max-h-96 object-cover" />
      </div>
      </motion.div>
    );
  };
  
  export default CarouselItem;
  