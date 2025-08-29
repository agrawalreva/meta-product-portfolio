import { Button } from "@/components/ui/button";
import { ArrowLeft, Coffee } from "lucide-react";

const ErrorPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Coffee className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">oops</h1>
          <p className="text-muted-foreground">
            seems like i am still gathering my thoughts on this one
          </p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onBack}
          className="group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          back to ideas
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
