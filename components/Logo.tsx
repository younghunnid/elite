
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* White background circle to ensure visibility */}
        <circle cx="100" cy="100" r="98" fill="white" />
        
        {/* Outer Circle Ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#1e3a8a" strokeWidth="4" />
        
        {/* Top Arc Text Path */}
        <path id="logoTopCurve" d="M 30,100 A 70,70 0 1,1 170,100" fill="none" />
        <text style={{ fontSize: '13px', fontWeight: '900', fill: '#1e3a8a', letterSpacing: '0.05em' }}>
          <textPath href="#logoTopCurve" startOffset="50%" textAnchor="middle">
            ELITE COMPUTER SERVICES
          </textPath>
        </text>

        {/* Bottom Arc Text Path */}
        <path id="logoBottomCurve" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
        <text style={{ fontSize: '10px', fontWeight: '800', fill: '#334155' }}>
          <textPath href="#logoBottomCurve" startOffset="50%" textAnchor="middle">
            Professional IT & Repair
          </textPath>
        </text>

        {/* Center Graphic: Technical Symbol */}
        <g transform="translate(60, 60) scale(1.1)">
          <path d="M40 0 L50 20 L70 20 L55 35 L60 55 L40 45 L20 55 L25 35 L10 20 L30 20 Z" fill="#3b82f6" opacity="0.1" />
          <rect x="15" y="25" width="50" height="35" rx="4" fill="#1e293b" />
          <rect x="20" y="30" width="40" height="25" fill="#3b82f6" opacity="0.5" />
          <path d="M10 60 L70 60 L75 65 L5 65 Z" fill="#64748b" />
        </g>
        
        {/* Center Badge */}
        <rect x="75" y="130" width="50" height="18" rx="9" fill="#1e3a8a" />
        <text x="100" y="143" textAnchor="middle" fill="white" style={{ fontSize: '11px', fontWeight: '900' }}>E.C.S</text>

        {/* Motto Inner Arc */}
        <path id="logoMottoCurve" d="M 55,90 A 45,45 0 0,1 145,90" fill="none" />
        <text style={{ fontSize: '7px', fill: '#3b82f6', fontWeight: '900', fontStyle: 'italic' }}>
          <textPath href="#logoMottoCurve" startOffset="50%" textAnchor="middle">
            Trust • Speed • Reliability
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
