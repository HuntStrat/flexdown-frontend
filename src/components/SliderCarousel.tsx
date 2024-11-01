'use client';
import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import Card from './Card';
import { data } from '../lib/data';
import { useMeasure } from '@uidotdev/usehooks';

function SliderCarousel() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = width / 2 - 8;
    controls = animate(xTranslation, finalPosition, {
      ease: 'linear',
      duration: 15,
      repeat: Infinity,
      repeatType: 'loop',
      delay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div className="py-8">
      <motion.div
        className="absolute left-0 flex gap-6 px-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...data, ...data].map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SliderCarousel;
