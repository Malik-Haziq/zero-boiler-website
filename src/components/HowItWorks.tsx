import { Terminal as TerminalIcon, Settings, Zap } from "lucide-react";
import { Terminal } from "./Terminal";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <TerminalIcon className="h-8 w-8 text-primary" />,
      title: "Run the Command",
      description: "Single command to bootstrap your project",
      command: "npx zero-boiler react my-app",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Choose Your Stack",
      description:
        "Interactive prompts for TypeScript/JavaScript and Tailwind/Plain CSS",
      command:
        "? TypeScript or JavaScript? › TypeScript\n? Styling? › Tailwind CSS",
    },
    {
      icon: <Zap className="h-8 w-8 text-terminal-green" />,
      title: "Start Coding",
      description: "Jump straight into development with zero cleanup",
      command: "cd my-app && npm run dev",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to zero-boilerplate bliss
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-card border border-border hover:border-primary/30 transition-colors animate-float">
                  {step.icon}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="text-sm font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              <Terminal
                command={step.command}
                animate={false}
                showCursor={false}
                className="text-left text-xs"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            <span>From command to coding in under 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};
