import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg gradient-text">reva's meta portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              home
            </button>
            <button
              onClick={() => scrollToSection("concepts")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              concepts
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              process
            </button>
            <button
              onClick={() => scrollToSection("breakfast")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              breakfast ideas
            </button>
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={() => window.open("https://docs.google.com/document/d/1jzZVpmBjqll2V3Gj4JfeMpHM0ll1KYQr/edit?usp=sharing&ouid=102894175038996618722&rtpof=true&sd=true", "_blank")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("https://github.com/agrawalreva", "_blank")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/revaagrawal/", "_blank")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-sm font-medium hover:text-primary transition-colors"
              >
                home
              </button>
              <button
                onClick={() => scrollToSection("concepts")}
                className="text-left text-sm font-medium hover:text-primary transition-colors"
              >
                concepts
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-sm font-medium hover:text-primary transition-colors"
              >
                process
              </button>
              <button
                onClick={() => scrollToSection("breakfast")}
                className="text-left text-sm font-medium hover:text-primary transition-colors"
              >
                breakfast ideas
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
