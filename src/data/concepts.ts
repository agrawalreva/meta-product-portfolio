export interface Concept {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  marketSize: string;
  metrics: string[];
  impact: string;
  category: "ai" | "social" | "creator" | "platform";
  status: "prototype" | "testing" | "concept";
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
}

export const concepts: Concept[] = [
  {
    id: "reboot",
    title: "Meta Reboot",
    subtitle: "reconstruct your social graph from scratch",
    description: "wipe your algorithm clean and rebuild your social network with AI-enhanced interests. think speed dating but for your entire social network.",
    problem: "users stuck in stale feeds, algorithmic echo chambers killing discovery. same boring content, same people, zero growth.",
    solution: "wipe algorithm clean. rebuild graph with AI-enhanced interests. LLM generates intro profiles, connects through shared passions. think speed dating but for your entire social network.",
    marketSize: "$2.8B social discovery market",
    metrics: ["30% increase in new connections", "45% more diverse content consumption", "60% reduction in 'show me less' interactions"],
    impact: "differentiate meta in age of stale feeds. self-expression + discovery + identity refresh.",
    category: "social",
    status: "prototype",
    customerPersonas: [
      {
        name: "The Stale Scroller",
        description: "25-35 year old who's been on social media for 8+ years, seeing the same content from the same people",
        painPoints: ["Boring feed with repetitive content", "No new connections in years", "Algorithm feels stuck in the past"],
        motivations: ["Want fresh perspectives", "Desire meaningful new connections", "Seek personal growth through social media"]
      },
      {
        name: "The Echo Chamber Victim",
        description: "User whose feed only shows one political/social viewpoint, missing diverse perspectives",
        painPoints: ["Only sees one side of issues", "Feels disconnected from broader world", "Wants to break out of bubble"],
        motivations: ["Seek balanced viewpoints", "Understand different perspectives", "Have more informed discussions"]
      }
    ],
    roadmap: [
      {
        phase: "MVP Launch",
        timeline: "Q1 2025",
        goals: ["Build AI interest matching engine", "Create profile reconstruction flow", "Launch with 10k beta users"],
        metrics: ["User engagement with new connections", "Content diversity scores", "Retention after 30 days"]
      },
      {
        phase: "Scale & Optimize",
        timeline: "Q2 2025",
        goals: ["Improve matching accuracy", "Add group discovery features", "Expand to 100k users"],
        metrics: ["Connection success rate", "Group formation rate", "Platform stickiness"]
      },
      {
        phase: "Full Launch",
        timeline: "Q3 2025",
        goals: ["Public launch across all Meta platforms", "Integration with existing social features", "Monetization through premium features"],
        metrics: ["Total user base", "Revenue per user", "Cross-platform engagement"]
      }
    ],
    techStack: ["React Native", "Python (ML)", "GraphQL", "Redis", "AWS"],
    risks: ["Privacy concerns with AI analysis", "User resistance to change", "Technical complexity of graph reconstruction"],
    opportunities: ["Differentiation from competitors", "Increased user engagement", "New data insights for personalization"]
  },
  {
    id: "llama-persona",
    title: "Llama Persona Engine",
    subtitle: "creators train AI versions of themselves",
    description: "train personal AI that talks like you, replies in your tone, recommends content matching your style. fitness coach creates 'CoachBot' for common questions.",
    problem: "creators drowning in DMs, can't scale personal engagement. fans want connection but creators hit time limits.",
    solution: "train personal AI that talks like you, replies in your tone, recommends content matching your style. fitness coach creates 'CoachBot' for common questions. comedy account trains meme-recommender.",
    marketSize: "$15B creator economy market",
    metrics: ["4x engagement response rate", "70% reduction in creator burnout", "85% fan satisfaction with AI responses"],
    impact: "deepens AI adoption in social. exclusive to meta's llama platform. promotes creativity, scales influence.",
    category: "creator",
    status: "testing",
    customerPersonas: [
      {
        name: "The Overwhelmed Creator",
        description: "Creator with 100k+ followers who can't keep up with DM volume",
        painPoints: ["Too many messages to respond to", "Fans feel ignored", "Burnout from constant engagement"],
        motivations: ["Maintain fan relationships", "Scale personal brand", "Focus on content creation"]
      },
      {
        name: "The Fan Seeking Connection",
        description: "Follower who wants personal interaction with creators",
        painPoints: ["Never get responses from creators", "Feel like just a number", "Want personalized advice"],
        motivations: ["Get personalized responses", "Feel valued by creators", "Receive relevant recommendations"]
      }
    ],
    roadmap: [
      {
        phase: "Creator Training",
        timeline: "Q1 2025",
        goals: ["Build AI training interface", "Launch with 50 creators", "Validate AI personality accuracy"],
        metrics: ["Creator satisfaction scores", "AI response accuracy", "Fan engagement rates"]
      },
      {
        phase: "Fan Experience",
        timeline: "Q2 2025",
        goals: ["Launch fan-facing AI interactions", "Integrate with existing platforms", "Scale to 500 creators"],
        metrics: ["Fan satisfaction scores", "Response time improvements", "Creator time savings"]
      },
      {
        phase: "Monetization",
        timeline: "Q3 2025",
        goals: ["Premium AI features", "Creator marketplace", "Advanced analytics"],
        metrics: ["Revenue per creator", "Platform adoption rate", "User retention"]
      }
    ],
    techStack: ["Llama 2", "React", "Node.js", "MongoDB", "TensorFlow"],
    risks: ["AI safety and content moderation", "Creator privacy concerns", "Fan authenticity concerns"],
    opportunities: ["First-mover advantage in AI creator tools", "Exclusive to Meta's AI platform", "New revenue streams"]
  },
  {
    id: "product-lab",
    title: "Meta Product Lab",
    subtitle: "developer sandbox for billion-user features",
    description: "sandbox environment where devs spin up experimental AI features using meta APIs. chance to be featured in beta versions of actual meta apps.",
    problem: "developers want to build for meta platforms but no direct path from idea to user testing. barriers to innovation too high.",
    solution: "sandbox environment where devs spin up experimental AI features using meta APIs. chance to be featured in beta versions of actual meta apps. from dorm room to billion users.",
    marketSize: "$50B developer tools market",
    metrics: ["500+ experimental features launched monthly", "30% developer retention increase", "15 features graduated to main apps yearly"],
    impact: "fosters innovation and loyalty from devs. reinforces meta as platform, not just product.",
    category: "platform",
    status: "concept",
    customerPersonas: [
      {
        name: "The Student Developer",
        description: "Computer science student with innovative ideas but no platform access",
        painPoints: ["No access to real user data", "Can't test with large audiences", "Ideas never get validated"],
        motivations: ["Build portfolio projects", "Get real-world experience", "Launch successful products"]
      },
      {
        name: "The Startup Founder",
        description: "Early-stage founder with AI product ideas",
        painPoints: ["Expensive to build and test", "Hard to reach target users", "Limited resources for development"],
        motivations: ["Validate product ideas", "Access to Meta's user base", "Partnership opportunities"]
      }
    ],
    roadmap: [
      {
        phase: "Developer Access",
        timeline: "Q1 2025",
        goals: ["Launch developer portal", "Release API documentation", "Onboard 1000 developers"],
        metrics: ["Developer signup rate", "API usage volume", "Feature submission rate"]
      },
      {
        phase: "Beta Testing",
        timeline: "Q2 2025",
        goals: ["Launch beta testing program", "Integrate with Meta apps", "Select first features for graduation"],
        metrics: ["Beta feature engagement", "User feedback scores", "Graduation success rate"]
      },
      {
        phase: "Full Platform",
        timeline: "Q3 2025",
        goals: ["Public launch", "Monetization options", "Advanced developer tools"],
        metrics: ["Platform adoption", "Revenue generation", "Successful feature launches"]
      }
    ],
    techStack: ["React", "Python", "GraphQL", "Docker", "Kubernetes"],
    risks: ["Security vulnerabilities", "Quality control of features", "Platform abuse"],
    opportunities: ["Ecosystem lock-in", "Innovation pipeline", "Developer community growth"]
  },
  {
    id: "time-capsule",
    title: "Meta Time Capsule",
    subtitle: "the 2040 project - messages to the future",
    description: "users leave messages, videos, AR memories sealed for future release. AI-version of yourself talks to your kids in 2040.",
    problem: "social media lacks long-term emotional depth. everything ephemeral, no lasting connection across time.",
    solution: "users leave messages, videos, AR memories sealed for future release. AI-version of yourself talks to your kids in 2040. future nostalgia as killer UX hook.",
    marketSize: "$8B digital legacy market",
    metrics: ["90% emotional engagement score", "200% increase in long-form content", "40% boost in platform lifetime value"],
    impact: "emotionally potent + virally powerful. creates unique meta content moat.",
    category: "ai",
    status: "prototype",
    customerPersonas: [
      {
        name: "The Future Parent",
        description: "Young adult thinking about legacy and family",
        painPoints: ["Worried about leaving nothing behind", "Want to connect with future family", "Current social media feels shallow"],
        motivations: ["Create lasting memories", "Connect with future generations", "Leave meaningful legacy"]
      },
      {
        name: "The Nostalgic Creator",
        description: "Content creator who wants lasting impact",
        painPoints: ["Content disappears quickly", "No long-term value from posts", "Want to create timeless content"],
        motivations: ["Create lasting content", "Build meaningful connections", "Leave digital legacy"]
      }
    ],
    roadmap: [
      {
        phase: "Core Features",
        timeline: "Q1 2025",
        goals: ["Build time capsule creation tools", "Launch with 10k beta users", "Validate emotional engagement"],
        metrics: ["Content creation rate", "User emotional scores", "Retention after 90 days"]
      },
      {
        phase: "AI Integration",
        timeline: "Q2 2025",
        goals: ["Add AI personality features", "Launch AR memory tools", "Scale to 100k users"],
        metrics: ["AI feature adoption", "AR content creation", "User satisfaction"]
      },
      {
        phase: "Future Release",
        timeline: "Q3 2025",
        goals: ["Launch future delivery system", "Add family sharing features", "Monetization options"],
        metrics: ["Future delivery success", "Family engagement", "Revenue generation"]
      }
    ],
    techStack: ["React", "Three.js", "Python (AI)", "Blockchain", "AR Kit"],
    risks: ["Long-term data storage costs", "Privacy and security concerns", "AI safety over long periods"],
    opportunities: ["Unique market position", "Emotional user connection", "Long-term platform lock-in"]
  },
  {
    id: "test-dummy",
    title: "Test Dummy",
    subtitle: "preview stories with trusted friends",
    description: "select 2-3 'story testers' who preview instagram story before going live. they vote ✅ or ❌. auto-post after 30 mins unless edited.",
    problem: "gen z perfectionism paralysis. users overthink posts, delete drafts, reduced sharing frequency kills engagement.",
    solution: "select 2-3 'story testers' who preview instagram story before going live. they vote ✅ or ❌. auto-post after 30 mins unless edited.",
    marketSize: "$3.2B social media tools market",
    metrics: ["35% increase in story posting", "50% reduction in post deletions", "25% higher story completion rates"],
    impact: "reduces posting anxiety. light, humorous feature. shows user-first iteration.",
    category: "social",
    status: "testing",
    customerPersonas: [
      {
        name: "The Perfectionist",
        description: "Gen Z user who overanalyzes every post",
        painPoints: ["Spends hours editing posts", "Deletes posts after posting", "Afraid of negative reactions"],
        motivations: ["Get validation before posting", "Reduce posting anxiety", "Build confidence"]
      },
      {
        name: "The Trusted Friend",
        description: "Friend who gets asked for feedback regularly",
        painPoints: ["Gets asked for feedback constantly", "Wants to help but it's time-consuming", "Worries about hurting feelings"],
        motivations: ["Help friends feel confident", "Give honest feedback", "Strengthen friendships"]
      }
    ],
    roadmap: [
      {
        phase: "Core Testing",
        timeline: "Q1 2025",
        goals: ["Build story preview system", "Launch with 5k beta users", "Validate user behavior changes"],
        metrics: ["Story posting frequency", "Post deletion rate", "User satisfaction scores"]
      },
      {
        phase: "Social Features",
        timeline: "Q2 2025",
        goals: ["Add voting system", "Integrate with Instagram", "Scale to 50k users"],
        metrics: ["Voting participation", "Integration success", "User retention"]
      },
      {
        phase: "Full Launch",
        timeline: "Q3 2025",
        goals: ["Public launch", "Add premium features", "Expand to other platforms"],
        metrics: ["Total user base", "Feature adoption", "Revenue generation"]
      }
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "WebRTC", "Push Notifications"],
    risks: ["Privacy concerns with content sharing", "Potential for bullying/abuse", "Integration complexity"],
    opportunities: ["Address real user pain point", "Increase platform engagement", "New social interaction model"]
  }
];
