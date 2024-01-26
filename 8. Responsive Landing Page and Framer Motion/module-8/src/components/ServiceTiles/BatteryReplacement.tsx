import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BatteryReplacement = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ['0 1', '1.2 1'],
  }); // 0 - 1

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <motion.div
      style={{
        scale: scaleValues,
        opacity: opacityValues,
        x: xValues,
      }}
      ref={componentRef}
      className="h-[415px] col-span-12 bg-red-500 rounded-lg"
    ></motion.div>
  );
};

export default BatteryReplacement;
