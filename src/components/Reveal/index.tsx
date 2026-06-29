import { motion } from 'framer-motion';
import { revealFade } from '../../motion/variants';
import { useSectionReveal } from '../../hooks/useSectionReveal';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** When set, content is shown immediately if the URL hash matches this section */
  sectionId?: string;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  sectionId,
}: RevealProps) {
  const { ref, animate } = useSectionReveal(sectionId);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={revealFade}
      initial="hidden"
      animate={animate}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
