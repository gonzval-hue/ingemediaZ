import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star, 
  Calendar,
  FileText,
  Users,
  TrendingUp,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const features = [
    {
      icon: FileText,
      title: "4 Notas Mensuales",
      description: "Contenido de alta calidad personalizado para tu marca"
    },
    {
      icon: Calendar,
      title: "Publicación Semanal",
      description: "Mantén tu audiencia comprometida con contenido regular"
    },
    {
      icon: Users,
      title: "Supervisión Humana",
      description: "Expertos en comunicación revisan cada contenido"
    },
    {
      icon: TrendingUp,
      title: "Optimización SEO",
      description: "Contenido optimizado para motores de búsqueda"
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Contenido listo en tiempo récord sin sacrificar calidad"
    },
    {
      icon: Star,
      title: "Soporte Prioritario",
      description: "Atención personalizada y ajustes según tus necesidades"
    }
  ];

  return (
    <section id="precios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Planes y Servicios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Planes transparentes y adaptados a tus necesidades de contenido
            </p>
          </div>

          {/* Main pricing card */}
          <div className="relative mb-12">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Plan Más Popular
              </Badge>
            </div>

            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold">Plan Mensual</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Facturación mensual con impuestos no incluidos
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Service description */}
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">¿Qué incluye?</h3>
                  <p className="text-muted-foreground">
                    Generación y publicación de 4 notas mensuales de alta calidad, 
                    optimizadas para tu marca y audiencia, con supervisión humana garantizada.
                  </p>
                </div>

                {/* Features grid */}
                <div>
                  <h3 className="font-semibold mb-4">Características Principales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card border">
                        <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <Link href="#contacto">
                    Comenzar POC y Cotizar
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                {/* Additional info */}
                <div className="text-center space-y-2 text-sm text-muted-foreground">
                  <p>• Sin contratos de largo plazo</p>
                  <p>• Cancela cuando quieras</p>
                  <p>• Soporte prioritario incluido</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  Facturación Mensual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Facturación simple y transparente cada mes. Sin costos ocultos 
                  ni sorpresas. Sabes exactamente qué estás pagando.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Precios sin impuestos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Los precios mostrados no incluyen impuesto retenido. 
                  Te proporcionaremos factura detallada con todos los impuestos aplicables.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para transformar tu contenido?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a las marcas que ya están revolucionando su estrategia de contenido 
              con inteligencia artificial supervisada por expertos.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="#contacto">
                Agendar visita y presentación del servicio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}