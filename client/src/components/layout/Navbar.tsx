import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  const links = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/services", label: t('nav.services') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-primary">Webna</a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={cn(
            "hidden md:flex items-center space-x-8",
            isRTL && "space-x-reverse"
          )}>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-gray-600 hover:text-primary transition-colors",
                    location === link.href && "text-primary font-medium"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">{t('nav.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md",
                      location === link.href && "text-primary font-medium"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact">{t('nav.getStarted')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;