import React from 'react';
// import { Cloud, Cog } from 'lucide-react';
import logo from '../img/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="relative w-24 h-10 flex items-center justify-center">
      {/* <Cloud className="text-blue-500 w-10 h-10" />
      <Cog className="absolute text-blue-700 w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} /> */}

      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;