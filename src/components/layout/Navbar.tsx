import { motion } from 'framer-motion';
import { Brain, Menu, X, Bell, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isPublicRoute = location.pathname === '/' || 
                        location.pathname === '/login' || 
                        location.pathname === '/register';

  const navItems = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const privateNavItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Discover', href: '/matching' },
    { name: 'Messages', href: '/messages' },
    { name: 'Goals', href: '/goals' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="p-2 rounded-xl bg-gradient-primary"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">MentorAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isPublicRoute ? (
              <>
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors relative"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </>
            ) : (
              <>
                {privateNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-foreground hover:text-primary transition-colors relative ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary"
                        layoutId="activeNav"
                      />
                    )}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isPublicRoute ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="btn-ghost">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-hero">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="relative">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></span>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <User className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-4 py-6 space-y-4 bg-background/95 backdrop-blur-lg border-t border-glass-border">
          {isPublicRoute ? (
            <>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/login" className="block">
                  <Button variant="ghost" className="w-full btn-ghost">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button className="w-full btn-hero">
                    Get Started
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            privateNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};