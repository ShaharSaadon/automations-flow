'use client';

import { useState, useEffect } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'case-studies' },
    { label: 'Process', id: 'process' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-md shadow-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Material Design: 16dp spacing */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Image
                src="/assets/logo.png"
                alt="Automations Flow Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </motion.div>
            <Image
              src="/assets/text-logo.png"
              alt="Automations Flow"
              width={150}
              height={24}
              className="h-6 w-auto hidden sm:block"
            />
          </div>

          {/* Desktop Navigation - Material Design: 32dp spacing between items */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-violet-700 transition-all duration-200 rounded-lg overflow-hidden group"
              >
                {/* Material Design Ripple Effect Background */}
                <span className="absolute inset-0 bg-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="relative z-10">{link.label}</span>
                {/* Material Design Active Indicator */}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '70%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            {/* Material Design Elevated Button (FAB-inspired) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="ml-4 bg-gradient-to-r from-[#685bff] to-[#acb0ff] hover:from-[#5a4ceb] hover:to-[#9ca0f5] text-white border-0 font-medium text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Material Design: 48dp touch target */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-12 h-12 flex items-center justify-center text-neutral-700 hover:text-violet-700 transition-colors rounded-full hover:bg-violet-50 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 bg-violet-100 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
            <span className="relative z-10">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </span>
          </motion.button>
        </div>
      </Container>

      {/* Mobile Menu - Material Design: Surface with elevation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-white shadow-lg border-t border-neutral-100"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-neutral-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-all duration-200 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-violet-100 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                  className="pt-4 px-4"
                >
                  <Button
                    onClick={() => scrollToSection('contact')}
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#685bff] to-[#acb0ff] hover:from-[#5a4ceb] hover:to-[#9ca0f5] text-white border-0 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Contact
                  </Button>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
