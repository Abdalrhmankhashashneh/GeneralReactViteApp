import { motion } from "framer-motion";

export const OnHoverWile = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const OnHoverWiggle = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
      transition={{ duration: 0.4 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const OnHoverPop = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const FadeInOnMount = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const BounceOnEnter = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const SlideInLeft = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const Pulse = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const OnHoverPulse = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      whileHover={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const OnHoverSlideInLeft = ({ children, as: Component = "div", ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
    initial={{ x: -100, opacity: 0 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
