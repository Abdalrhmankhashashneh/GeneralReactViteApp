import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LanguageTransitionWrapper({ children }) {
  const dispatch = useDispatch();
  const { currentLang, pendingLang } = useSelector((state) => state.lang);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (pendingLang && pendingLang !== currentLang) {
      setIsVisible(false); // trigger fade out
    }
  }, [pendingLang]);

  const handleExitComplete = () => {
    if (pendingLang) {
      dispatch(setLanguage(pendingLang)); // actual change
      setIsVisible(true); // trigger fade in
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key={currentLang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
