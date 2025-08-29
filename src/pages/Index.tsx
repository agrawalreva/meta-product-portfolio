import Hero from "../components/Hero";
import ProductConcepts from "../components/ProductConcepts";
import ProcessSection from "../components/ProcessSection";
import BreakfastIdeas from "../components/BreakfastIdeas";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProductConcepts />
      <ProcessSection />
      <BreakfastIdeas />
    </div>
  );
};

export default Index;
