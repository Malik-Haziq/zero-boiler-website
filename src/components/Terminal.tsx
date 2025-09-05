import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TerminalProps {
  command: string;
  animate?: boolean;
  showCursor?: boolean;
  className?: string;
}

export const Terminal = ({ command, animate = false, showCursor = true, className = "" }: TerminalProps) => {
  const [displayText, setDisplayText] = useState(animate ? '' : command);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!animate) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= command.length) {
        setDisplayText(command.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [command, animate]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red"></div>
        <div className="terminal-dot terminal-dot-yellow"></div>
        <div className="terminal-dot terminal-dot-green"></div>
        <div className="flex-1"></div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-6 px-2 text-xs hover:bg-muted/20"
        >
          {copied ? (
            <Check className="h-3 w-3 text-primary" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      </div>
      <div className="flex items-center">
        <span className="text-muted-foreground mr-2">$</span>
        <span className="code-command">{displayText}</span>
        {showCursor && (
          <span className="cursor-glow"></span>
        )}
      </div>
    </div>
  );
};