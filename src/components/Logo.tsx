import React from 'react';
import { Cloud, Cog } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <Cloud className="text-blue-500 w-10 h-10" />
      <Cog className="absolute text-blue-700 w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
    </div>
  );
};

export default Logo;