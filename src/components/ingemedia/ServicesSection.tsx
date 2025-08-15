import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Star,
  PlayCircle,
  MessageSquare,
  Share2,
  Clock,
  BarChart,
  Users2
} from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const benefits = [
    {
      icon: Users,
      title: "Incremento del público objetivo",
      description: "Atraemos y fidelizamos a tu audiencia con contenido relevante y de calidad"
    },
    {
      icon: Target,
      title: "Potenciamiento de marca",
      description: "Aumentamos el valor y reconocimiento de tu marca en el mercado"
    },
    {
      icon: TrendingUp,
      title: "Presencia constante en redes sociales",
      description: "Mantenemos una estrategia de contenido regular que construye comunidad y genera engagement continuo"
    }
  ];

  const operationalSteps = [
    {
      icon: PlayCircle,
      title: "Inicio del Servicio",
      description: "Comenzamos con un análisis detallado de tu marca, industria y audiencia objetivo para definir la estrategia de contenido.",
      details: [
        "Reunión de kickoff para entender tus objetivos",
        "Análisis de tu competencia y audiencia",
        "Definición de tono y estilo de comunicación",
        "Creación de calendario editorial personalizado"
      ]
    },
    {
      icon: MessageSquare,
      title: "Creación de Contenido",
      description: "Nuestro sistema de IA genera borradores iniciales que son refinados por nuestro equipo de expertos en comunicación.",
      details: [
        "Generación de ideas basadas en tendencias",
        "Creación de borradores con tecnología de IA",
        "Revisión y edición por especialistas humanos",
        "Optimización SEO y para redes sociales"
      ]
    },
    {
      icon: Share2,
      title: "Publicación y Difusión",
      description: "Publicamos el contenido en tus canales y lo optimizamos para máxima visibilidad y engagement.",
      details: [
        "Publicación semanal programada",
        "Diseño de imágenes y gráficos atractivos",
        "Optimización para cada red social",
        "Monitoreo de rendimiento en tiempo real"
      ]
    },
    {
      icon: BarChart,
      title: "Análisis y Mejora",
      description: "Medimos los resultados y ajustamos continuamente la estrategia para optimizar el rendimiento.",
      details: [
        "Reportes mensuales de métricas clave",
        "Análisis de engagement y alcance",
        "Recomendaciones de mejora",
        "Ajuste de estrategia basado en resultados"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Nuestros Servicios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ayudamos a los clientes a publicar contenido relevante para fidelizar a su audiencia, 
              potenciar su marca y aumentar el tráfico web
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Service Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Descripción del Servicio</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                En Ingemedia creamos contenido de noticias de alta calidad utilizando inteligencia 
                artificial avanzada, supervisado por nuestro equipo de expertos en comunicación. 
                Cada pieza está diseñada específicamente para tu marca y tu audiencia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro enfoque único combina la eficiencia de la tecnología con el criterio 
                humano, garantizando contenido que no solo informa, sino que también genera 
                engagement y construye relaciones duraderas con tu público.
              </p>
            </div>

            {/* Operational Model */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Modelo Operativo</h3>
              </div>
              
              <div className="space-y-6">
                {/* Service overview */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Publicación Continua
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-lg">Una nota semanal de alta calidad</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-lg">Cuatro notas mensuales personalizadas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-lg">Contenido optimizado para tu industria</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-lg">Supervisión humana garantizada</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed operational steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {operationalSteps.map((step, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Content Flow from Image */}
                <div className="mt-8">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-purple-800" />
                        </div>
                        <h3 className="text-2xl font-bold text-purple-900">Flujo de Creación de Contenido</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-lg">1</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Generación Estratégica</h4>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            Contenido generado basado en noticias y conocimiento personalizado, según objetivos definidos por protocolo
                          </p>
                          <div className="flex items-center gap-2 text-xs text-blue-600">
                            <Target className="w-3 h-3" />
                            <span>Objetivos definidos</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-bold text-lg">2</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Creación con IA</h4>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            Utilizando herramientas de IA definidas para crear contenido base de manera eficiente, alcanzando los objetivos del cliente
                          </p>
                          <div className="flex items-center gap-2 text-xs text-green-600">
                            <Zap className="w-3 h-3" />
                            <span>Herramientas de IA</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-bold text-lg">3</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Revisión Humana</h4>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            El contenido generado por IA es revisado y editado por el equipo de periodistas antes de su publicación, garantizando calidad y confiabilidad
                          </p>
                          <div className="flex items-center gap-2 text-xs text-purple-600">
                            <CheckCircle className="w-3 h-3" />
                            <span>Calidad garantizada</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                          <Clock className="w-4 h-4" />
                          <span>Proceso continuo y optimizado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Beneficios Clave</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional importance section */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">¿Por qué es importante la presencia constante en redes sociales?</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-semibold text-blue-900 mb-3">Reconocimiento de Marca</h4>
                      <p className="text-blue-800 text-sm mb-3">Una presencia constante aumenta el reconocimiento de tu marca en un 71%</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Target className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-xs text-blue-600 font-medium">+71% visibilidad</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-semibold text-blue-900 mb-3">Confianza y Credibilidad</h4>
                      <p className="text-blue-800 text-sm mb-3">La interacción regular genera confianza y construye relaciones duraderas con tu audiencia</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-xs text-blue-600 font-medium">Construye confianza</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="font-semibold text-blue-900 mb-3">Mejora SEO y Alcance</h4>
                      <p className="text-blue-800 text-sm mb-3">El contenido compartido mejora el posicionamiento SEO y facilita la viralización</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-xs text-blue-600 font-medium">Mayor alcance</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-blue-700 text-sm">
                      <strong>Beneficios clave:</strong> Interacción directa con clientes • Posicionamiento mejorado • Contenido viralizable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proof of Concept */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Oferta Especial</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Prueba de Concepto (POC)</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Evalúa nuestro servicio en un entorno real. Descubre cómo la inteligencia 
                artificial puede transformar tu estrategia de contenido sin compromiso.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="#contacto">
                  Solicitar Prueba de Concepto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}