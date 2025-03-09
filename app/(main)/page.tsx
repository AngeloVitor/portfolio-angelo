'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('@/components/loading-screen'), {
  ssr: false,
});
const HomeSection = dynamic(() => import('@/components/sections/home'), {
  ssr: false,
});
const AboutSection = dynamic(() => import('@/components/sections/about'), {
  ssr: false,
});
const ProjectsSection = dynamic(
  () => import('@/components/sections/projects'),
  {
    ssr: false,
  },
);
const Technologies = dynamic(
  () => import('@/components/sections/technologies'),
  {
    ssr: false,
  },
);
const ContactSection = dynamic(() => import('@/components/sections/contact'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <LoadingScreen />
      </Suspense>
      <Suspense fallback={null}>
        <HomeSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={null}>
        <Technologies />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}
