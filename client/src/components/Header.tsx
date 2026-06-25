import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { VariableFontHoverByLetter } from './fancy/variable-font-hover-by-letter';
import { ScrambleHover } from './fancy/scramble-hover';
import { AnimatedUnderline } from './fancy/underline-animation';
import { easeEditorial } from '@/lib/motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-foreground/10 to-surface-elevated from-surface shadow-sm transition-colors duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-background'
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Wordmark */}
        <Link to="/" className="shrink-0">
          <VariableFontHoverByLetter
            label="Allyson Keightley"
            className="font-mono text-sm uppercase tracking-[0.18em]"
            fromWeight={500}
            toWeight={800}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'group flex items-baseline gap-1.5 text-sm font-medium transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span className="font-mono text-[0.65rem] text-accent">
                  0{i + 1}
                </span>
                <AnimatedUnderline group active={active}>
                  <VariableFontHoverByLetter label={link.label} />
                </AnimatedUnderline>
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      </header>

      {/* Mobile menu — rendered outside the header so the header's
          backdrop-filter doesn't become the fixed containing block. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-background md:hidden"
          >
            <nav className="container flex flex-col gap-2 py-8">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: easeEditorial }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-baseline gap-3 border-b border-foreground/10 py-4 text-4xl font-semibold tracking-tight',
                        active ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      <span className="font-mono text-sm text-accent">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
