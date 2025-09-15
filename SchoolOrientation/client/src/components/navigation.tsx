import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      label: "Indirizzi", 
      submenu: [
        { href: "/sia", label: "SIA - Sistemi Informativi Aziendali", special: true },
        { href: "/afm", label: "AFM - Amministrazione Finanza Marketing" },
        { href: "/rim", label: "RIM - Relazioni Internazionali Marketing" },
        { href: "/cat", label: "CAT - Costruzioni Ambiente Territorio" },
        { href: "/turismo", label: "Turismo" }
      ]
    },
    { href: "/#testimonianze", label: "Testimonianze" },
    { 
      label: "Orientamento", 
      submenu: [
        { href: "/#eventi", label: "Open Day e Mini-Stage" },
        { href: "/#contatti", label: "Richiedi Informazioni" },
        { href: "/#faq", label: "Domande Frequenti" }
      ]
    },
    { href: "/#contatti", label: "Contatti" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary">ITET Girardi</div>
            <div className="hidden md:block text-sm text-muted-foreground">Cittadella</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.href || index}>
                {link.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" data-testid={`nav-${link.label.toLowerCase()}`}>
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {link.submenu.map((sublink) => (
                        <DropdownMenuItem key={sublink.href} asChild>
                          {sublink.href.startsWith("/#") ? (
                            <button
                              onClick={() => handleLinkClick(sublink.href)}
                              className={`w-full text-left ${
                                sublink.special ? "text-accent hover:text-accent/80" : ""
                              }`}
                              data-testid={`nav-${sublink.label.toLowerCase().replace(/\s/g, '-')}`}
                            >
                              {sublink.label}
                            </button>
                          ) : (
                            <Link
                              href={sublink.href}
                              className={`w-full ${
                                location === sublink.href ? "text-primary" : ""
                              } ${sublink.special ? "text-accent hover:text-accent/80" : ""}`}
                              data-testid={`nav-${sublink.label.toLowerCase().replace(/\s/g, '-')}`}
                            >
                              {sublink.label}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : link.href ? (
                  link.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`text-sm font-medium hover:text-primary transition-colors ${
                        link.special ? "text-accent hover:text-accent/80" : ""
                      }`}
                      data-testid={`nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium hover:text-primary transition-colors ${
                        location === link.href ? "text-primary" : ""
                      } ${link.special ? "text-accent hover:text-accent/80" : ""}`}
                      data-testid={`nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  )
                ) : null}
              </div>
            ))}
            
            <Button
              onClick={() => handleLinkClick("/#eventi")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-open-day"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Prenota Evento
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link, index) => (
                  <div key={link.href || index}>
                    {link.submenu ? (
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-foreground">{link.label}</div>
                        <div className="pl-4 space-y-2">
                          {link.submenu.map((sublink) => (
                            <div key={sublink.href}>
                              {sublink.href.startsWith("/#") ? (
                                <button
                                  onClick={() => handleLinkClick(sublink.href)}
                                  className={`text-md font-medium hover:text-primary transition-colors text-left block ${
                                    sublink.special ? "text-accent hover:text-accent/80" : ""
                                  }`}
                                  data-testid={`mobile-nav-${sublink.label.toLowerCase().replace(/\s/g, '-')}`}
                                >
                                  {sublink.label}
                                </button>
                              ) : (
                                <Link
                                  href={sublink.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`text-md font-medium hover:text-primary transition-colors block ${
                                    location === sublink.href ? "text-primary" : ""
                                  } ${sublink.special ? "text-accent hover:text-accent/80" : ""}`}
                                  data-testid={`mobile-nav-${sublink.label.toLowerCase().replace(/\s/g, '-')}`}
                                >
                                  {sublink.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : link.href ? (
                      link.href.startsWith("/#") ? (
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className={`text-lg font-medium hover:text-primary transition-colors text-left ${
                            link.special ? "text-accent hover:text-accent/80" : ""
                          }`}
                          data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium hover:text-primary transition-colors ${
                            location === link.href ? "text-primary" : ""
                          } ${link.special ? "text-accent hover:text-accent/80" : ""}`}
                          data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </Link>
                      )
                    ) : null}
                  </div>
                ))}
                
                <Button
                  onClick={() => handleLinkClick("/#eventi")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full justify-start"
                  data-testid="mobile-button-open-day"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Prenota Evento
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
