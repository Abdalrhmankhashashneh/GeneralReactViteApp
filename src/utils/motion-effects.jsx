import { motion } from 'framer-motion';

export const StaggerContainer = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const SlideInRight = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} {...rest}>
      {children}
    </MotionTag>
  );
};

export const SlideInUp = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} {...rest}>
      {children}
    </MotionTag>
  );
};

export const RotateOnHover = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: 'easeInOut' }} {...rest}>
      {children}
    </MotionTag>
  );
};

export const FlipOnHover = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }} transition={{ duration: 0.6 }} {...rest}>
      {children}
    </MotionTag>
  );
};

// This effect will grow the element when it comes into view 
export const GrowOnView = ({ children, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
