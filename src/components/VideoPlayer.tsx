
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  light?: boolean;
  className?: string;
  thumbnail?: string;
}

export function VideoPlayer({ url, light = false, className, thumbnail }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    setHasStarted(true);
  };

  const customPlayIcon = (
    <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 flex items-center justify-center hover:bg-white/50 transition-all">
      <Play size={48} className="text-black" />
    </div>
  );

  return (
    <div className={cn("relative rounded-lg overflow-hidden w-full aspect-video", className)}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        controls={hasStarted}
        light={light ? thumbnail || true : false}
        playIcon={customPlayIcon}
        onPlay={handlePlay}
        onPause={() => setPlaying(false)}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
            },
          },
        }}
      />
    </div>
  );
}
