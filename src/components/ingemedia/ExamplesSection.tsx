"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Eye, ExternalLink } from "lucide-react";

interface Example {
  id: number;
  title: string;
  description: string;
  industry: string;
  tone: string;
  category: string;
}

const examples: Example[] = [
  {
    id: 1,
    title: "Análisis de la Cosecha 2025: Un Año Prometedor para el Carménère Chileno",
    description: "Un artículo detallado con datos de mercado, opiniones de enólogos y proyecciones, dirigido a inversionistas y conocedores del sector.",
    industry: "Vinos",
    tone: "Formal/Corporativo",
    category: "Análisis"
  },
  {
    id: 2,
    title: "IA para Principiantes: 5 Apps que Usas a Diario y No Sabías que Tenían Inteligencia Artificial",
    description: "Contenido dinámico y accesible, con lenguaje cercano y ejemplos prácticos, diseñado para viralizarse en redes sociales y atraer a un público joven.",
    industry: "Tecnología",
    tone: "Cool/Creativo",
    category: "Educativo"
  },
  {
    id: 3,
    title: "Estrategias de Diversificación de Portafolio en Tiempos de Incertidumbre Económica",
    description: "Nota sobria y profesional que ofrece consejos prácticos y análisis de expertos para clientes de una consultora financiera.",
    industry: "Finanzas",
    tone: "Formal/Corporativo",
    category: "Consejos"
  },
  {
    id: 4,
    title: "¡Alerta de Tendencias! Los Colores que Dominarán tu Clóset esta Temporada",
    description: "Un artículo vibrante y visual, enfocado en el consumidor final, perfecto para un blog de moda o una marca de ropa que busca conectar con su audiencia.",
    industry: "Retail",
    tone: "Cool/Creativo",
    category: "Tendencias"
  }
];

const industries = ["Todos", "Vinos", "Tecnología", "Finanzas", "Retail"];
const tones = ["Todos", "Formal/Corporativo", "Cool/Creativo", "Técnico/Informativo"];

export default function ExamplesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState("Todos");
  const [selectedTone, setSelectedTone] = useState("Todos");

  const filteredExamples = examples.filter(example => {
    const industryMatch = selectedIndustry === "Todos" || example.industry === selectedIndustry;
    const toneMatch = selectedTone === "Todos" || example.tone === selectedTone;
    return industryMatch && toneMatch;
  });

  return (
    <section id="ejemplos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Nuestro Trabajo</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Trabajo en Acción</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora cómo adaptamos nuestro contenido a diferentes industrias y tonos de comunicación
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Filtrar por:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Filter */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Industria</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Button
                      key={industry}
                      variant={selectedIndustry === industry ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedIndustry(industry)}
                      className="text-sm"
                    >
                      {industry}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Tone Filter */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Tono</h4>
                <div className="flex flex-wrap gap-2">
                  {tones.map((tone) => (
                    <Button
                      key={tone}
                      variant={selectedTone === tone ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTone(tone)}
                      className="text-sm"
                    >
                      {tone}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Mostrando {filteredExamples.length} de {examples.length} ejemplos
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExamples.map((example) => (
              <Card key={example.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{example.industry}</Badge>
                      <Badge variant="outline">{example.tone}</Badge>
                    </div>
                    <Eye className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {example.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {example.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Ver ejemplo completo
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredExamples.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No se encontraron ejemplos</h3>
              <p className="text-muted-foreground">
                Intenta ajustar los filtros para ver más resultados
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Solicitar Contenido Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}