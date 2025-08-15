"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Instagram,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Ingemedia</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolucionamos tu contenido con Inteligencia Artificial. Creamos contenido de noticias 
                de alta calidad, personalizado y atractivo para potenciar tu marca.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">contacto@ingemedia.cl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+56 2 2345 6789</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Santiago, Chile</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#quienes-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#ejemplos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Ejemplos
                  </Link>
                </li>
                <li>
                  <Link href="#precios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#etica" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Consideraciones Éticas
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social links and CTA */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Síguenos:</span>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>

              {/* Back to top */}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop}
                className="flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                Volver arriba
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Ingemedia. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Diseñado con ❤️ para revolucionar el contenido
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}