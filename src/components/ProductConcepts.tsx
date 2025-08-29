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

interface Concept {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  metrics: string[];
  impact: string;
  category: "ai" | "social" | "creator" | "platform";
  status: "prototype" | "testing" | "concept";
}

const concepts: Concept[] = [
  {
    id: "reboot",
    title: "Meta Reboot",
    subtitle: "reconstruct your social graph from scratch",
    problem: "users stuck in stale feeds, algorithmic echo chambers killing discovery. same boring content, same people, zero growth.",
    solution: "wipe algorithm clean. rebuild graph with AI-enhanced interests. LLM generates intro profiles, connects through shared passions. think speed dating but for your entire social network.",
    metrics: ["30% increase in new connections", "45% more diverse content consumption", "60% reduction in 'show me less' interactions"],
    impact: "differentiate meta in age of stale feeds. self-expression + discovery + identity refresh.",
    category: "social",
    status: "prototype"
  },
  {
    id: "llama-persona",
    title: "Llama Persona Engine", 
    subtitle: "creators train AI versions of themselves",
    problem: "creators drowning in DMs, can't scale personal engagement. fans want connection but creators hit time limits.",
    solution: "train personal AI that talks like you, replies in your tone, recommends content matching your style. fitness coach creates 'CoachBot' for common questions. comedy account trains meme-recommender.",
    metrics: ["4x engagement response rate", "70% reduction in creator burnout", "85% fan satisfaction with AI responses"],
    impact: "deepens AI adoption in social. exclusive to meta's llama platform. promotes creativity, scales influence.",
    category: "creator",
    status: "testing"
  },
  {
    id: "product-lab",
    title: "Meta Product Lab",
    subtitle: "developer sandbox for billion-user features",
    problem: "developers want to build for meta platforms but no direct path from idea to user testing. barriers to innovation too high.",
    solution: "sandbox environment where devs spin up experimental AI features using meta APIs. chance to be featured in beta versions of actual meta apps. from dorm room to billion users.",
    metrics: ["500+ experimental features launched monthly", "30% developer retention increase", "15 features graduated to main apps yearly"],
    impact: "fosters innovation and loyalty from devs. reinforces meta as platform, not just product.",
    category: "platform", 
    status: "concept"
  },
  {
    id: "time-capsule",
    title: "Meta Time Capsule",
    subtitle: "the 2040 project - messages to the future",
    problem: "social media lacks long-term emotional depth. everything ephemeral, no lasting connection across time.",
    solution: "users leave messages, videos, AR memories sealed for future release. AI-version of yourself talks to your kids in 2040. future nostalgia as killer UX hook.",
    metrics: ["90% emotional engagement score", "200% increase in long-form content", "40% boost in platform lifetime value"],
    impact: "emotionally potent + virally powerful. creates unique meta content moat.",
    category: "ai",
    status: "prototype"
  },
  {
    id: "test-dummy",
    title: "Test Dummy",
    subtitle: "preview stories with trusted friends",
    problem: "gen z perfectionism paralysis. users overthink posts, delete drafts, reduced sharing frequency kills engagement.",
    solution: "select 2-3 'story testers' who preview instagram story before going live. they vote ✅ or ❌. auto-post after 30 mins unless edited.",
    metrics: ["35% increase in story posting", "50% reduction in post deletions", "25% higher story completion rates"],
    impact: "reduces posting anxiety. light, humorous feature. shows user-first iteration.",
    category: "social",
    status: "testing"
  }
];

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
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredConcepts = filter === "all" 
    ? concepts 
    : concepts.filter(c => c.category === filter);

  return (
    <section className="py-20 bg-surface">
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
              onClick={() => setSelectedConcept(selectedConcept === concept.id ? null : concept.id)}
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

              {/* Expandable details */}
              {selectedConcept === concept.id && (
                <div className="space-y-4 animate-fade-in">
                  {/* Solution */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      the solution
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {concept.solution}
                    </p>
                  </div>

                  {/* Key metrics */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      projected metrics
                    </h4>
                    <ul className="space-y-1">
                      {concept.metrics.map((metric, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Zap className="w-3 h-3 text-primary" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-surface border border-border-bright rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      why meta wins
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {concept.impact}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductConcepts;