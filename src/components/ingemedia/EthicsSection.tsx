import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Eye, 
  CheckCircle, 
  Heart,
  Scale
} from "lucide-react";

export default function EthicsSection() {
  const pillars = [
    {
      icon: Users,
      title: "Supervisión Humana",
      description: "La IA es una herramienta que complementa la capacidad humana, nunca un reemplazo. Garantizamos una supervisión adecuada en cada paso del proceso.",
      points: [
        "Revisión por expertos en comunicación",
        "Validación de contenido antes de publicación",
        "Ajuste basado en feedback del cliente"
      ]
    },
    {
      icon: Shield,
      title: "Contenido Verídico",
      description: "Compromiso para evitar sesgos, manipulación y desinformación. Cada pieza de contenido se basa en fuentes confiables y datos verificables.",
      points: [
        "Verificación de fuentes y datos",
        "Evitación de sesgos y prejuicios",
        "Compromiso con la verdad y precisión"
      ]
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Mencionamos la importancia de la explicabilidad en el uso de la IA. Nuestros clientes saben cómo y por qué se genera el contenido.",
      points: [
        "Explicación clara del proceso",
        "Comunicación abierta con clientes",
        "Responsabilidad en el uso de tecnología"
      ]
    }
  ];

  return (
    <section id="etica" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Nuestros Valores</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consideraciones Éticas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro compromiso con el uso correcto y responsable de la inteligencia artificial
            </p>
          </div>

          {/* Main commitment */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Nuestro Compromiso</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Ingemedia, creemos que la inteligencia artificial debe ser utilizada de manera 
                ética y responsable. Nos comprometemos a mantener los más altos estándares de 
                integridad, transparencia y responsabilidad en cada proyecto que emprendemos.
              </p>
            </div>
          </div>

          {/* Ethical pillars */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Nuestros Pilares Éticos</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="space-y-3">
                      {pillar.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional ethics info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Protección de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Respetamos la privacidad y confidencialidad de la información de nuestros clientes. 
                  Implementamos medidas de seguridad robustas para proteger todos los datos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Impacto Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Buscamos generar un impacto positivo en la sociedad a través de contenido 
                  de calidad que informe, eduque y entretenga de manera responsable.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Commitment statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Compromiso Verificado</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada día trabajamos para mantener y fortalecer nuestros principios éticos, 
              asegurando que la tecnología sirva como una herramienta para el bien común.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}