import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  TrendingUp,
  Target,
  Zap
} from "lucide-react";
import { concepts, Concept } from "@/data/concepts";
import ProductConceptDetail from "./ProductConceptDetail";

const categoryColors = {
  ai: "bg-gradient-primary text-primary-foreground",
  social: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  creator: "bg-gradient-to-r from-orange-500 to-yellow-500 text-white", 
  platform: "bg-gradient-to-r from-green-500 to-teal-500 text-white"
};

const statusColors = {
  prototype: "bg-primary text-primary-foreground",
  testing: "bg-warning text-warning-foreground", 
  concept: "bg-secondary text-secondary-foreground"
};

const ProductConcepts = () => {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredConcepts = filter === "all" 
    ? concepts 
    : concepts.filter(c => c.category === filter);

  if (selectedConcept) {
    return (
      <ProductConceptDetail 
        concept={selectedConcept} 
        onBack={() => setSelectedConcept(null)} 
      />
    );
  }

  return (
    <section id="concepts" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">product concepts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            bold solutions targeting real user problems. each backed by projected metrics and iteration strategy.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {["all", "ai", "social", "creator", "platform"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className={filter === cat ? "bg-primary" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Concepts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConcepts.map((concept, index) => (
            <Card 
              key={concept.id}
              className={`p-6 bg-surface-bright border-border-bright hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-glow-primary animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedConcept(concept)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    <Badge className={categoryColors[concept.category]}>
                      {concept.category}
                    </Badge>
                    <Badge variant="outline" className={statusColors[concept.status]}>
                      {concept.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all">
                    {concept.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {concept.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              {/* Problem statement */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-warning mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  the problem
                </h4>
                <p className="text-sm text-muted-foreground">
                  {concept.problem}
                </p>
              </div>

              {/* Market size */}
              <div className="mb-4">
                <Badge variant="secondary" className="text-xs">
                  {concept.marketSize}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductConcepts;