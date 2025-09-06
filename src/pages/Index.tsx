import { useState, useEffect } from "react";
import { Github, Download, ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "@/components/Terminal";
import { Comparison } from "@/components/Comparison";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frameworks = [
    { name: "React ⚛️", desc: "Vite" },
    { name: "Next.js ▲", desc: "App Router" },
  ];

  const options = ["TypeScript / JavaScript", "Tailwind CSS / Plain CSS"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-12 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Zero boilerplate, maximum productivity</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tired of deleting <br />
              <span className="gradient-text">demo code?</span> <br />
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              No more logo.svg, demo counters, or boilerplate cleanup.
              Zero-Boiler creates clean React and Next.js projects without the
              clutter.
            </p>

            {/* Terminal Command */}
            <div className="mb-12 max-w-2xl mx-auto">
              <Terminal
                command="npx zero-boiler react my-app"
                animate={true}
                className="text-lg"
              />
            </div>

            {/* Framework badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Supported:
                </span>
                {frameworks.map((framework, index) => (
                  <span key={index} className="badge-framework">
                    {framework.name}
                    <span className="text-muted-foreground">
                      ({framework.desc})
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Options badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {options.map((option, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-border/50 hover:border-primary/30 transition-colors"
                >
                  {option}
                </Badge>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-primary" />
                <span className="font-medium">100+</span>
                <span className="text-muted-foreground">downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent" />
                <span className="font-medium">3</span>
                <span className="text-muted-foreground">GitHub stars</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quick-start">
                <Button size="lg" className="glow-primary group">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/30 hover:bg-primary/5"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>View on GitHub</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </section>
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-6 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div> */}

      {/* Comparison Section */}
      <Comparison />

      {/* How It Works */}
      <HowItWorks />

      {/* Examples Section */}
      <section id="quick-start" className="py-20 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Quick Examples</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See the simplicity in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* React Example */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-2xl">⚛️</span>
                React Project
              </h3>
              <Terminal
                command="npx zero-boiler react my-react-app"
                animate={false}
                showCursor={false}
              />
              <div className="text-sm text-muted-foreground">
                <div className="font-mono bg-muted/20 p-3 rounded border">
                  <div className="text-primary">✓ TypeScript setup</div>
                  <div className="text-primary">✓ Vite configuration</div>
                  <div className="text-primary">✓ Clean project structure</div>
                  <div className="text-accent">→ npm run dev</div>
                </div>
              </div>
            </div>

            {/* Next.js Example */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-2xl">▲</span>
                Next.js Project
              </h3>
              <Terminal
                command="npx zero-boiler nextjs my-nextjs-app"
                animate={false}
                showCursor={false}
              />
              <div className="text-sm text-muted-foreground">
                <div className="font-mono bg-muted/20 p-3 rounded border">
                  <div className="text-primary">✓ App Router ready</div>
                  <div className="text-primary">✓ TypeScript configured</div>
                  <div className="text-primary">✓ Tailwind CSS setup</div>
                  <div className="text-accent">→ npm run dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Go Zero Today</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Stop wasting time on boilerplate cleanup. Start building what
            matters.
          </p>

          <div className="mb-8">
            <Terminal
              command="npx zero-boiler react my-app"
              animate={false}
              className="text-lg max-w-md mx-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-primary animate-pulse-glow group">
              <span>Start Building Now</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/30 hover:bg-primary/5"
            >
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Repository</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-accent/30 hover:bg-accent/5"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>npm Package</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold">Zero-Boiler</span>
              <Badge variant="outline" className="text-xs">
                Open Source
              </Badge>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                npm
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Issues
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>Built with ❤️ for developers who hate boilerplate</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
