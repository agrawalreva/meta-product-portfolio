import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Target, TrendingUp, Calendar, Zap, Brain, DollarSign } from "lucide-react";

interface ProductConceptDetailProps {
  concept: {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    marketSize: string;
    customerPersonas: Array<{
      name: string;
      description: string;
      painPoints: string[];
      motivations: string[];
    }>;
    roadmap: Array<{
      phase: string;
      timeline: string;
      goals: string[];
      metrics: string[];
    }>;
    techStack: string[];
    risks: string[];
    opportunities: string[];
  };
  onBack: () => void;
}

const ProductConceptDetail = ({ concept, onBack }: ProductConceptDetailProps) => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            back to concepts
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                {concept.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {concept.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                {concept.marketSize}
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">overview</TabsTrigger>
            <TabsTrigger value="personas">personas</TabsTrigger>
            <TabsTrigger value="roadmap">roadmap</TabsTrigger>
            <TabsTrigger value="tech">tech & risks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    the problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{concept.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    the solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{concept.solution}</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-warning" />
                    opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {concept.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    tech stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {concept.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="personas" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concept.customerPersonas.map((persona, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {persona.name}
                    </CardTitle>
                    <CardDescription>{persona.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">pain points</h4>
                      <ul className="space-y-1">
                        {persona.painPoints.map((point, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-1.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">motivations</h4>
                      <ul className="space-y-1">
                        {persona.motivations.map((motivation, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            {motivation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="space-y-8">
              {concept.roadmap.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-accent" />
                        {phase.phase}
                      </CardTitle>
                      <Badge variant="outline">{phase.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">goals</h4>
                      <ul className="space-y-1">
                        {phase.goals.map((goal, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">success metrics</h4>
                      <ul className="space-y-1">
                        {phase.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-warning rounded-full mt-1.5 flex-shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    technical risks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {concept.risks.map((risk, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-warning" />
                    market opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold gradient-text">{concept.marketSize}</p>
                      <p className="text-sm text-muted-foreground">total addressable market</p>
                    </div>
                    <div className="space-y-2">
                      {concept.opportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductConceptDetail;
