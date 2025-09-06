import { useState, useEffect } from "react";
import { Download, Star, Users, Zap } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  animate?: boolean;
}

const StatItem = ({
  icon,
  value,
  label,
  suffix = "",
  animate = true,
}: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, animate]);

  const formatValue = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <div className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary group">
      <div className="flex justify-center mb-3 group-hover:animate-float">
        {icon}
      </div>
      <div className="text-2xl font-bold gradient-text mb-1">
        {formatValue(displayValue)}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      value: 150,
      label: "Weekly Downloads",
      suffix: "",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      value: 3,
      label: "GitHub Stars",
      suffix: "",
    },
    {
      icon: <Users className="h-8 w-8 text-terminal-green" />,
      value: 50,
      label: "Happy Developers",
      suffix: "",
    },
    {
      icon: <Zap className="h-8 w-8 text-terminal-yellow" />,
      value: 98,
      label: "Time Saved",
      suffix: "%",
    },
  ];

  return (
    <section id="stats-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Loved by Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who've said goodbye to boilerplate cleanup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatItem {...stat} animate={isVisible} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            "Finally, a scaffold that doesn't waste my time with demo cleanup."
            <span className="text-primary"> - Every Developer Ever</span>
          </p>
        </div>
      </div>
    </section>
  );
};
