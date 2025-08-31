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
import ErrorPage from "./ErrorPage";
import { useState } from "react";

const breakfastIdeas = [
  {
    id: "ai-conversation-starters",
    title: "AI conversation starters",
    subtitle: "break the ice with personalized openers",
    problem: "awkward silence in DMs. users don't know how to start meaningful conversations.",
    concept: "AI analyzes mutual interests, recent posts, shared connections. generates 3 conversation starters that feel natural, not robotic. 'saw you're into rock climbing too - ever tried bouldering at [local gym]?'",
    impact: "4 of my friends said hell yeah when i texted the gc",
    status: "breakfast idea"
  },
  {
    id: "threads-quote-story",
    title: "Threads \"Quote Story\"",
    subtitle: "cross-platform content sharing",
    problem: "Threads feels disconnected from Instagram. users want to share Threads content but it's stuck in a separate app.",
    concept: "you can take someone's post + drop it straight into your IG story with a reaction (like TikTok stitches but inside Meta). collapses the wall between IG + Threads, finally making Threads relevant because it leaks into where people actually are.",
    impact: "unlocks Threads' potential by leveraging Instagram's 2B+ user base and existing content creation habits",
    status: "breakfast idea"
  },
  {
    id: "timezone-sync",
    title: "Time-Zone Sync Layer",
    subtitle: "global team coordination",
    problem: "global teams struggle with timezone coordination. someone always forgets the calendar math.",
    concept: "Workplace automatically translates posts, standups, and deadlines into each participant's local time. no more 9pm standups because someone forgot the calendar math.",
    impact: "eliminates 90% of timezone confusion in my experience",
    status: "breakfast idea"
  },
  {
    id: "oculus-overlay",
    title: "Oculus Productivity Overlay",
    subtitle: "augmented reality workspace",
    problem: "VR headsets replace your world completely. people want productivity tools that enhance reality, not replace it.",
    concept: "instead of replacing your world, Quest projects your Slack/Notion/Figma as floating layers in your actual room. basically turns any couch/kitchen table into a multi-monitor setup.",
    impact: "could save me $500 on a second monitor (if we hypothetically assume i just get gifted the very expensive technology in question)",
    status: "breakfast idea"
  }
];

const BreakfastIdeas = () => {
  const [showError, setShowError] = useState(false);

  if (showError) {
    return <ErrorPage onBack={() => setShowError(false)} />;
  }

  return (
    <section id="breakfast" className="py-20 bg-gradient-surface">
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
            stray ideas brewed over my double shot americano with oat milk
            <br />
            <span className="text-lg">(light ice please)</span>
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowError(true)}
                >
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
              napkin sketches appreciated too ;)
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open("mailto:ragrawal@ucsd.edu", "_blank")}
            >
              <Zap className="w-4 h-4" />
              send me ideas
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakfastIdeas;