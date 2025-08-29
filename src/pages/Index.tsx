import Hero from "../components/Hero";
import ProductConcepts from "../components/ProductConcepts";
import ProcessSection from "../components/ProcessSection";
import BreakfastIdeas from "../components/BreakfastIdeas";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ProductConcepts />
      <ProcessSection />
      <BreakfastIdeas />
    </div>
  );
};

export default Index;
