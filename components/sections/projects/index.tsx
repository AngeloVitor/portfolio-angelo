'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import LaptopAnimation from './laptop-animation';
import ProjectCard from './project-card';
import useCurSection from '@/hooks/use-cur-section';
import data from '@/data';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useCurSection(ref, 0.5);

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === data.projects.projects.length - 1 ? 0 : prev + 1,
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.projects.projects.length - 1 : prev - 1,
    );
  };

  return (
    <div
      ref={ref}
      id="projects"
      className="w-full p-4 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 container my-32 text-sm md:text-base"
    >
      <div className="text-center w-full md:w-auto">
        {/* grid image behind */}
        <Image
          className="absolute -top-2 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover"
          src="/svgs/grid.svg"
          alt="grid image"
          width={0}
          height={0}
        />
        <h1 className="text-3xl md:text-4xl text-gradient-primary">
          <span>{'//'}</span>
          Recent Projects
        </h1>
        <LaptopAnimation className="w-[200px] md:w-[300px] -scale-x-100 scale-y-100 mx-auto" />
        <p className="w-full max-w-[400px] mx-auto text-muted-foreground">
          {data.projects.description}
        </p>
      </div>

      <div className="relative px-8 md:px-12">
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[500px] mx-auto"
            >
              <ProjectCard project={data.projects.projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {data.projects.projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
