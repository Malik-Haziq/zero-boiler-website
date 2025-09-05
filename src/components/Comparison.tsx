import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { X, FileCode, Folder } from 'lucide-react';

export const Comparison = () => {
  const [showZeroBoiler, setShowZeroBoiler] = useState(false);

  const traditionalFiles = [
    { name: 'logo.svg', type: 'image', size: '2.6 kB' },
    { name: 'App.css', type: 'style', size: '563 B' },
    { name: 'App.test.tsx', type: 'test', size: '246 B' },
    { name: 'index.css', type: 'style', size: '1.2 kB' },
    { name: 'Counter.tsx', type: 'demo', size: '1.8 kB' },
    { name: 'Demo.tsx', type: 'demo', size: '945 B' },
    { name: 'setupTests.ts', type: 'config', size: '241 B' },
  ];

  const zeroBoilerFiles = [
    { name: 'App.tsx', type: 'essential', size: '312 B' },
    { name: 'index.tsx', type: 'essential', size: '198 B' },
    { name: 'index.css', type: 'essential', size: '89 B' },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'demo':
        return <X className="h-4 w-4 text-destructive" />;
      case 'essential':
        return <FileCode className="h-4 w-4 text-primary" />;
      default:
        return <FileCode className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (type) {
      case 'demo':
        return 'destructive';
      case 'essential':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Why Zero-Boiler?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop wasting time deleting demo code. Start with what you actually need.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={!showZeroBoiler ? 'text-foreground' : 'text-muted-foreground'}>
              Traditional Scaffold
            </span>
            <Switch 
              checked={showZeroBoiler} 
              onCheckedChange={setShowZeroBoiler}
              className="data-[state=checked]:bg-primary"
            />
            <span className={showZeroBoiler ? 'text-foreground' : 'text-muted-foreground'}>
              Zero-Boiler
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className={`transition-all duration-500 ${showZeroBoiler ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="card p-6 border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <Folder className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">create-react-app</h3>
                <Badge variant="destructive">Demo Heavy</Badge>
              </div>
              <div className="space-y-2">
                {traditionalFiles.map((file, index) => (
                  <div 
                    key={file.name}
                    className="flex items-center gap-3 p-2 rounded border border-border/50 hover:border-border transition-colors"
                  >
                    {getFileIcon(file.type)}
                    <span className="flex-1 font-mono text-sm">{file.name}</span>
                    <Badge variant={getBadgeVariant(file.type)} className="text-xs">
                      {file.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{file.size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-destructive/10 rounded border border-destructive/20">
                <p className="text-sm text-destructive">
                  <X className="inline h-4 w-4 mr-1" />
                  7 files to delete before coding
                </p>
              </div>
            </div>
          </div>

          {/* Zero-Boiler */}
          <div className={`transition-all duration-500 ${!showZeroBoiler ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="card p-6 border-primary/20 glow-primary">
              <div className="flex items-center gap-2 mb-4">
                <Folder className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">zero-boiler</h3>
                <Badge variant="default">Clean Start</Badge>
              </div>
              <div className="space-y-2">
                {zeroBoilerFiles.map((file, index) => (
                  <div 
                    key={file.name}
                    className="flex items-center gap-3 p-2 rounded border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {getFileIcon(file.type)}
                    <span className="flex-1 font-mono text-sm">{file.name}</span>
                    <Badge variant={getBadgeVariant(file.type)} className="text-xs">
                      {file.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{file.size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                <p className="text-sm text-primary">
                  <FileCode className="inline h-4 w-4 mr-1" />
                  Ready to code immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};