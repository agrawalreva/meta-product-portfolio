import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Coffee, 
  Lightbulb, 
  Zap, 
  ArrowRight,
  Clock,
  Users
} from "lucide-react";

const breakfastIdeas = [
  {
    id: "conversation-starters",
    title: "AI conversation starters",
    subtitle: "break the ice with personalized openers",
    problem: "awkward silence in DMs. users don't know how to start meaningful conversations.",
    concept: "AI analyzes mutual interests, recent posts, shared connections. generates 3 conversation starters that feel natural, not robotic. 'saw you're into rock climbing too - ever tried bouldering at [local gym]?'",
    impact: "35% increase in DM response rates, 50% longer conversation threads",
    status: "breakfast idea"
  },
  {
    id: "memory-lanes",
    title: "memory lanes",
    subtitle: "AI-curated nostalgia feeds",
    problem: "users miss meaningful memories buried in endless content. nostalgia drives engagement but discovery is random.",
    concept: "AI creates themed memory lanes - 'summer 2019 vibes', 'college friends era', 'travel throwbacks'. curated from your posts + friends' posts featuring you. emotional content hits different.",
    impact: "2x time spent on platform, 70% increase in story sharing",
    status: "breakfast idea"
  },
  {
    id: "vibe-check",
    title: "vibe check rooms", 
    subtitle: "real-time mood-based group chats",
    problem: "group chats become stale, irrelevant. users want connection based on current mood, not just geography/history.",
    concept: "join temporary rooms based on current vibe - 'need motivation', 'procrastinating', 'can't sleep', 'good news to share'. AI matches users with similar energy. rooms dissolve after 24hrs.",
    impact: "3x daily active engagement, 85% user retention in first week",
    status: "breakfast idea"
  },
  {
    id: "expertise-exchange",
    title: "expertise exchange",
    subtitle: "micro-mentorship marketplace",
    problem: "knowledge sharing happens randomly. experts overwhelmed, learners struggle to find right person.",
    concept: "15-minute expertise exchanges. 'teach me basic photoshop' meets 'i need career advice'. AI matches based on skills + availability. gamified with reputation system.",
    impact: "new revenue stream, 60% user skill development metric increase",
    status: "breakfast idea"
  }
];

const BreakfastIdeas = () => {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-surface border border-border-bright rounded-full px-4 py-2 mb-6">
            <Coffee className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium">breakfast ideas section</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">morning brainstorms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            raw concepts brewed over coffee. not fully baked, but potential is there. sometimes the best ideas start simple.
          </p>

          {/* Disclaimer */}
          <div className="bg-surface border border-warning/30 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div className="text-left">
                <h3 className="font-semibold text-warning mb-1">early stage concepts</h3>
                <p className="text-sm text-muted-foreground">
                  these need validation, user research, technical feasibility checks. but hey, that's what makes them interesting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ideas grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {breakfastIdeas.map((idea, index) => (
            <Card 
              key={idea.id}
              className="p-6 bg-surface border-border hover:border-warning/50 transition-all duration-300 group hover:shadow-custom-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-3 text-warning border-warning/30">
                    {idea.status}
                  </Badge>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-warning transition-colors">
                    {idea.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {idea.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-warning group-hover:translate-x-1 transition-all" />
              </div>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-destructive mb-2">the problem</h4>
                <p className="text-sm text-muted-foreground">
                  {idea.problem}
                </p>
              </div>

              {/* Concept */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent mb-2">the concept</h4>
                <p className="text-sm text-muted-foreground">
                  {idea.concept}
                </p>
              </div>

              {/* Impact */}
              <div className="bg-background/50 border border-border-bright rounded-lg p-3 mb-4">
                <h4 className="text-sm font-semibold text-primary mb-1">potential impact</h4>
                <p className="text-sm text-muted-foreground">
                  {idea.impact}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="concept" size="sm" className="flex-1">
                  <Users className="w-3 h-3" />
                  validate with users
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Clock className="w-3 h-3" />
                  research sprint
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface border border-border-bright rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">got ideas brewing?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              best products start as napkin sketches. these breakfast concepts could be meta's next big bet with proper validation.
            </p>
            <Button variant="hero" size="lg" className="group">
              <Zap className="w-4 h-4" />
              let's prototype something
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakfastIdeas;