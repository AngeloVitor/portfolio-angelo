'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useCurSection from '@/hooks/use-cur-section';
import data from '@/data';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Technologies() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  useCurSection(ref);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <div
      ref={ref}
      id="technologies"
      className="flex gap-4 items-center flex-col justify-center bg-muted w-full py-12 my-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-2xl font-bold mb-12">
        <span className="text-gradient-secondary">My Technologies</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 w-full max-w-6xl perspective-1000">
        {data.technologies.skills.map((skill, index) => (
          <TechCard
            key={skill.name}
            skill={skill}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>
    </div>
  );
}

interface TechCardProps {
  skill: {
    name: string;
    src: string;
    link: string;
  };
  index: number;
  mouseX: any;
  mouseY: any;
}

function TechCard({ skill, index, mouseX, mouseY }: TechCardProps) {
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const scale = useSpring(1, {
    stiffness: 150,
    damping: 20,
  });

  const handleHoverStart = () => {
    setHovered(true);
    scale.set(1.1);
  };

  const handleHoverEnd = () => {
    setHovered(false);
    scale.set(1);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ z: 30 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link
        href={skill.link}
        target="_blank"
        className={`
          relative block aspect-square bg-background border rounded-xl overflow-hidden p-6
          transition-colors duration-300
          ${hovered ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : ''}
          hover:border-primary/50
          transform-style-preserve-3d
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity" />
        <Image
          className="h-full w-auto object-contain relative transform-style-preserve-3d translate-z-20"
          src={skill.src}
          alt={skill.name}
          width={50}
          height={50}
        />
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground"
          >
            {skill.name}
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
}
