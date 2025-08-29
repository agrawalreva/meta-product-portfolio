import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Lightbulb, 
  Target, 
  TrendingUp,
  RotateCcw,
  Clock
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "problem identification",
    description: "deep user research, pain point analysis, market gap identification. no assumptions, just data.",
    methods: ["user interviews", "behavioral analytics", "competitor teardowns", "social listening"],
    timeframe: "1-2 weeks"
  },
  {
    icon: Lightbulb,
    title: "rapid prototyping", 
    description: "bold solution design, MVP scoping, feature prioritization. move fast, test assumptions.",
    methods: ["design sprints", "figma mockups", "technical feasibility", "resource estimation"],
    timeframe: "3-5 days"
  },
  {
    icon: Target,
    title: "metrics framework",
    description: "success criteria definition, KPI tracking setup, experiment design. measure what matters.",
    methods: ["HEART framework", "conversion funnels", "engagement metrics", "retention cohorts"],
    timeframe: "2-3 days"
  },
  {
    icon: TrendingUp,
    title: "data validation",
    description: "user testing, A/B experiments, feedback collection. let users guide product decisions.",
    methods: ["user testing", "beta launches", "feedback loops", "quantitative analysis"],
    timeframe: "1-2 weeks"
  },
  {
    icon: RotateCcw,
    title: "fast iteration",
    description: "based on insights, iterate quickly. pivot when needed, double down on what works.",
    methods: ["feature flags", "rapid deployment", "user feedback integration", "performance optimization"],
    timeframe: "ongoing"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">the process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            structured approach to product innovation. identify, prototype, validate, iterate. rinse and repeat.
          </p>
        </div>

        {/* Process timeline */}
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0 group">
              {/* Timeline line and icon */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 bg-border flex-1 min-h-16" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <Card className="p-6 bg-surface border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-custom-md">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3" />
                      {step.timeframe}
                    </Badge>
                  </div>

                  {/* Methods */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">methods & tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.methods.map((method, methodIndex) => (
                        <Badge 
                          key={methodIndex} 
                          variant="secondary"
                          className="text-xs bg-surface-bright"
                        >
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Process stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <Card className="p-6 text-center bg-surface border-border">
            <div className="text-3xl font-bold text-primary mb-2">2-4 weeks</div>
            <div className="text-sm text-muted-foreground">concept to prototype</div>
          </Card>
          <Card className="p-6 text-center bg-surface border-border">
            <div className="text-3xl font-bold text-accent mb-2">5+ metrics</div>
            <div className="text-sm text-muted-foreground">tracked per concept</div>
          </Card>
          <Card className="p-6 text-center bg-surface border-border">
            <div className="text-3xl font-bold text-warning mb-2">48hr</div>
            <div className="text-sm text-muted-foreground">iteration cycles</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;