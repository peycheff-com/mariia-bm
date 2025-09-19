import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Bug } from 'lucide-react';

interface AnalyticsEvent {
  timestamp: number;
  event: string;
  parameters: Record<string, any>;
  source: 'GA4' | 'Meta Pixel';
}

export const DebugPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    // Listen for custom debug events
    const handleDebugEvent = (event: CustomEvent) => {
      setEvents(prev => [event.detail, ...prev].slice(0, 20));
    };

    window.addEventListener('analytics-debug', handleDebugEvent as EventListener);
    
    return () => {
      window.removeEventListener('analytics-debug', handleDebugEvent as EventListener);
    };
  }, []);

  // Show debug panel only in development or with debug param
  const showDebugPanel = import.meta.env.DEV || 
    new URLSearchParams(window.location.search).has('debug');

  if (!showDebugPanel) return null;

  return (
    <>
      {/* Debug Toggle Button */}
      {!isVisible && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-50 bg-background/90 backdrop-blur-sm"
        >
          <Bug className="w-4 h-4 mr-2" />
          Debug
        </Button>
      )}

      {/* Debug Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Bug className="w-5 h-5" />
                Analytics Debug Panel
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {/* Analytics Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">GA4 Status</h3>
                  <p className="text-sm text-muted-foreground">
                    {typeof window !== 'undefined' && 'gtag' in window ? 
                      '✅ Loaded' : '❌ Not loaded'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ID: GA_MEASUREMENT_ID
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Meta Pixel Status</h3>
                  <p className="text-sm text-muted-foreground">
                    {typeof window !== 'undefined' && 'fbq' in window ? 
                      '✅ Loaded' : '❌ Not loaded'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ID: META_PIXEL_ID
                  </p>
                </div>
              </div>

              {/* Recent Events */}
              <div>
                <h3 className="font-medium text-foreground mb-4 flex items-center justify-between">
                  Recent Events ({events.length}/20)
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEvents([])}
                  >
                    Clear
                  </Button>
                </h3>
                
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {events.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      No events recorded yet. Interact with the site to see analytics events.
                    </p>
                  ) : (
                    events.map((event, index) => (
                      <div key={index} className="bg-secondary/20 rounded p-3 text-sm">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-foreground">
                            {event.event}
                          </span>
                          <div className="flex gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              event.source === 'GA4' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {event.source}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(event.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                        <pre className="text-xs text-muted-foreground overflow-x-auto">
                          {JSON.stringify(event.parameters, null, 2)}
                        </pre>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};