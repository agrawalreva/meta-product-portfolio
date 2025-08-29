import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Lightbulb, 
  Target, 
  TrendingUp,
  RotateCcw,
  Clock,
  ExternalLink,
  Award,
  BookOpen,
  Play,
  FileText
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
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">my (very much a work-in-progress) process</span>
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

        {/* Certificates & Resources */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black mb-4">
              <span className="gradient-text">certificates & resources</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              holy grail tier paid courses out there, but my stingy goblin brain refuses to let me part with coin...so here's the free loot i scavenged instead
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  certifications
                </CardTitle>
                <CardDescription>
                  seeee i maybe.. sort.... of know what i am talking about.. like a little bit.. atleast
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface-bright rounded-lg">
                  <div>
                    <h4 className="font-semibold">AI for Product Management</h4>
                    <p className="text-sm text-muted-foreground">Pendo</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open("https://www.credly.com/badges/9392b22b-9276-48c3-88d4-8c831102b162/public_url", "_blank")}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-bright rounded-lg">
                  <div>
                    <h4 className="font-semibold">Product-Led Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">Product-Led Growth</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open("https://drive.google.com/file/d/1o9uP_2slCwTRBi1VTLQvydXBwiszeWQw/view?usp=sharing", "_blank")}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-bright rounded-lg">
                  <div>
                    <h4 className="font-semibold">Product Roadmapping Micro-Certification (PRC)™️</h4>
                    <p className="text-sm text-muted-foreground">Product School</p>
                  </div>
                  <Badge variant="outline" className="text-xs mr-2">
                    in progress
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  resources that actually help
                </CardTitle>
                <CardDescription>
                  books, videos, and articles that shaped my thinking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-3 h-auto"
                  onClick={() => window.open("https://www.youtube.com/watch?v=1hHMwLxN6EM", "_blank")}
                >
                  <Play className="w-4 h-4 mr-3 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">How to Build a Product</div>
                    <div className="text-sm text-muted-foreground">Lenny Rachitsky</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-3 h-auto"
                  onClick={() => window.open("https://xmind.ai/share/PnDamsJH", "_blank")}
                >
                  <FileText className="w-4 h-4 mr-3 text-accent" />
                  <div className="text-left">
                    <div className="font-semibold">Product Management Competencies</div>
                    <div className="text-sm text-muted-foreground">Paweł Huryn</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-3 h-auto"
                  onClick={() => window.open("https://hellopm.co/top-pm-resources/", "_blank")}
                >
                  <Play className="w-4 h-4 mr-3 text-warning" />
                  <div className="text-left">
                    <div className="font-semibold">Top PM Resources</div>
                    <div className="text-sm text-muted-foreground">HelloPM</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-3 h-auto"
                  onClick={() => window.open("https://www.amazon.com/Inspired-Create-Tech-Products-Customers/dp/1119387507", "_blank")}
                >
                  <BookOpen className="w-4 h-4 mr-3 text-secondary" />
                  <div className="text-left">
                    <div className="font-semibold">Inspired</div>
                    <div className="text-sm text-muted-foreground">Marty Cagan</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;