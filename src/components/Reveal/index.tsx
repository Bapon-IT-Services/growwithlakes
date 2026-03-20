import { motion } from 'framer-motion';
import { fadeUp } from '../../motion/variants';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
