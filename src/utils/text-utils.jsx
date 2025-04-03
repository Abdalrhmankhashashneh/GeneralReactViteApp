import { motion } from 'framer-motion';

export const FadeInText = ({ children, as: Component = 'span', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} {...rest}>
      {children}
    </MotionTag>
  );
};

export const SlideUpText = ({ children, as: Component = 'span', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} {...rest}>
      {children}
    </MotionTag>
  );
};

export const BounceText = ({ children, as: Component = 'span', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ y: -10 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
      style={{ display: 'inline-block' }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const TypingText = ({ text, delay = 0.05, as: Component = 'div', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
      style={{ display: 'inline-flex' }}
      {...rest}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export const RevealTextOnView = ({ children, as: Component = 'span', ...rest }) => {
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const ShimmerText = ({ children, as: Component = 'span', ...rest }) => {
  return (
    <Component className="relative inline-block shimmer-text" {...rest}>
      {children}
    </Component>
  );
};
