import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Sobre Nosotros</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La combinación perfecta entre experiencia periodística y tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                En Ingemedia revolucionamos la creación y consumo de información mediante la integración 
                de inteligencia artificial avanzada con el conocimiento periodístico experto. 
                Transformamos la manera en que las marcas se comunican con su audiencia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos que la tecnología debe potenciar el talento humano, no reemplazarlo. 
                Por eso, cada pieza de contenido que generamos combina la eficiencia de la IA 
                con la supervisión y el criterio de profesionales de la comunicación.
              </p>
            </div>

            {/* Alliance */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Alianza</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nacemos de la sinergia única entre la reconocida trayectoria de Agencia 1 como 
                agencia de merchandising y la tecnología de vanguardia en inteligencia artificial. 
                Esta combinación nos permite ofrecer un servicio sin precedentes en el mercado.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">¿Qué nos hace únicos?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Experiencia comprobada en soluciones de merchandising personalizadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Tecnología de IA de última generación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Supervisión humana en cada paso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">El Equipo</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pablo Contardo */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Pablo Contardo</span>
                    <Badge variant="outline">Comunicador</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Licenciado en Comunicación Social con especialización en Publicidad. 
                    Con probada experiencia en soluciones de merchandising personalizadas, 
                    creativas y de alta calidad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Comunicación</Badge>
                    <Badge variant="secondary">Publicidad</Badge>
                    <Badge variant="secondary">Merchandising</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Gonzalo Valdés M. */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Gonzalo Valdés M.</span>
                    <Badge variant="outline">Ingeniero</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ingeniero Informático, Magíster en Tecnologías de la Información 
                    de la Universidad Técnica Federico Santa María. Especialista en 
                    inteligencia artificial y desarrollo tecnológico.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ingeniería</Badge>
                    <Badge variant="secondary">IA</Badge>
                    <Badge variant="secondary">Tecnología</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}