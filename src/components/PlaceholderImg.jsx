import { useState } from 'react';

/* SVG placeholders keyed by type */
const svgs = {

  doctor: (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="520" fill="#142844"/>
      {/* subtle grid */}
      <line x1="0" y1="130" x2="400" y2="130" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="0" y1="260" x2="400" y2="260" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="0" y1="390" x2="400" y2="390" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="100" y1="0" x2="100" y2="520" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="200" y1="0" x2="200" y2="520" stroke="#1e3a5f" strokeWidth="1"/>
      <line x1="300" y1="0" x2="300" y2="520" stroke="#1e3a5f" strokeWidth="1"/>
      {/* head */}
      <circle cx="200" cy="155" r="72" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="2"/>
      {/* shoulders / body */}
      <path d="M60 520 Q60 360 200 340 Q340 360 340 520Z" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="2"/>
      {/* lab coat line */}
      <path d="M200 340 L200 460" stroke="#4da6d6" strokeWidth="2" strokeDasharray="6 4"/>
      {/* stethoscope */}
      <circle cx="200" cy="300" r="18" fill="none" stroke="#4da6d6" strokeWidth="2.5"/>
      <path d="M182 300 Q170 320 178 336" stroke="#4da6d6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="178" cy="339" r="5" fill="#c4e538"/>
      {/* medical cross badge */}
      <rect x="158" y="88" width="24" height="8" rx="4" fill="#c4e538"/>
      <rect x="168" y="78" width="8" height="24" rx="4" fill="#c4e538"/>
      {/* face features */}
      <ellipse cx="182" cy="148" rx="7" ry="9" fill="#4da6d6" opacity="0.6"/>
      <ellipse cx="218" cy="148" rx="7" ry="9" fill="#4da6d6" opacity="0.6"/>
      <path d="M185 175 Q200 188 215 175" stroke="#4da6d6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* label */}
      <rect x="100" y="460" width="200" height="32" rx="8" fill="#4da6d6" opacity="0.12"/>
      <text x="200" y="481" textAnchor="middle" fill="#4da6d6" fontSize="12" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">DOCTOR PHOTO</text>
    </svg>
  ),

  'doctor-bg': (
    <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="1200" height="600" fill="#0b1827"/>
      {/* radial glow */}
      <radialGradient id="glow1" cx="70%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4da6d6" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#0b1827" stopOpacity="0"/>
      </radialGradient>
      <rect width="1200" height="600" fill="url(#glow1)"/>
      {/* large silhouette right side */}
      <circle cx="880" cy="220" r="140" fill="#1e3a5f" opacity="0.6"/>
      <path d="M640 600 Q640 380 880 340 Q1120 380 1120 600Z" fill="#1e3a5f" opacity="0.6"/>
      {/* stethoscope */}
      <circle cx="880" cy="440" r="38" fill="none" stroke="#4da6d6" strokeWidth="3" opacity="0.5"/>
      <path d="M842 440 Q820 480 832 510" stroke="#4da6d6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
      <circle cx="832" cy="516" r="9" fill="#c4e538" opacity="0.5"/>
      {/* DNA helix hint */}
      <path d="M100 100 Q140 150 100 200 Q60 250 100 300 Q140 350 100 400" stroke="#4da6d6" strokeWidth="1.5" fill="none" opacity="0.2"/>
      <path d="M130 100 Q90 150 130 200 Q170 250 130 300 Q90 350 130 400" stroke="#4da6d6" strokeWidth="1.5" fill="none" opacity="0.2"/>
      {/* cross marks */}
      <text x="200" y="320" fill="#4da6d6" fontSize="60" opacity="0.06" fontFamily="sans-serif">✚</text>
      <text x="400" y="180" fill="#4da6d6" fontSize="40" opacity="0.06" fontFamily="sans-serif">✚</text>
    </svg>
  ),

  treatment: (
    <svg viewBox="0 0 500 520" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="500" height="520" fill="#142844"/>
      <radialGradient id="tGlow" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#4da6d6" stopOpacity="0.18"/>
        <stop offset="100%" stopColor="#142844" stopOpacity="0"/>
      </radialGradient>
      <rect width="500" height="520" fill="url(#tGlow)"/>
      {/* medical cross */}
      <rect x="208" y="140" width="84" height="28" rx="14" fill="#4da6d6" opacity="0.9"/>
      <rect x="236" y="112" width="28" height="84" rx="14" fill="#4da6d6" opacity="0.9"/>
      {/* hair strands */}
      <path d="M140 320 Q150 280 160 320 Q170 360 180 320" stroke="#c4e538" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M180 320 Q190 270 200 320 Q210 370 220 320" stroke="#c4e538" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M220 320 Q230 280 240 320 Q250 360 260 320" stroke="#c4e538" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M260 320 Q270 270 280 320 Q290 370 300 320" stroke="#c4e538" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M300 320 Q310 280 320 320 Q330 360 340 320" stroke="#c4e538" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* scalp line */}
      <path d="M130 325 Q250 310 370 325" stroke="#4da6d6" strokeWidth="2.5" fill="none"/>
      {/* person outline */}
      <circle cx="250" cy="420" r="38" fill="none" stroke="#1e3a5f" strokeWidth="2"/>
      <path d="M175 520 Q175 460 250 445 Q325 460 325 520" fill="none" stroke="#1e3a5f" strokeWidth="2"/>
      <text x="250" y="500" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1" opacity="0.7">TREATMENT PHOTO</text>
    </svg>
  ),

  before: (
    <svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="90" fill="#1a2a3a"/>
      {/* receding hairline silhouette */}
      <ellipse cx="100" cy="38" rx="42" ry="48" fill="#142844"/>
      <path d="M58 38 Q60 10 100 8 Q140 10 142 38" fill="#2a4d7f"/>
      {/* receding pattern */}
      <path d="M68 22 Q80 12 100 10 Q120 12 132 22" fill="none" stroke="#4da6d6" strokeWidth="1.5" opacity="0.5"/>
      <path d="M72 30 Q85 22 100 21 Q115 22 128 30" fill="none" stroke="#4da6d6" strokeWidth="1" opacity="0.3"/>
      {/* label */}
      <rect x="4" y="70" width="52" height="16" rx="4" fill="#1e3a5f"/>
      <text x="30" y="81" textAnchor="middle" fill="#8a9ab0" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">BEFORE</text>
    </svg>
  ),

  after: (
    <svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="90" fill="#1a2a3a"/>
      {/* full hair silhouette */}
      <ellipse cx="100" cy="38" rx="42" ry="48" fill="#142844"/>
      <path d="M58 38 Q56 4 100 2 Q144 4 142 38" fill="#2a4d7f"/>
      {/* dense hair strands */}
      <path d="M72 26 Q76 10 80 26" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M82 22 Q86 6 90 22" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M92 20 Q96 4 100 20" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M102 20 Q106 4 110 20" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M112 22 Q116 6 120 22" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M122 26 Q126 10 130 26" stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* label */}
      <rect x="4" y="70" width="44" height="16" rx="4" fill="#c4e538" opacity="0.2"/>
      <text x="26" y="81" textAnchor="middle" fill="#c4e538" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">AFTER</text>
    </svg>
  ),

  fue: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* follicle group */}
      {[80, 130, 180, 230, 280, 330].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy="130" rx="10" ry="14" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="1.5"/>
          <line x1={x} y1="116" x2={x} y2="60" stroke="#c4e538" strokeWidth="2" strokeLinecap="round"/>
          <path d={`M${x} 60 Q${x - 10} 40 ${x} 20`} stroke="#c4e538" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
      ))}
      {/* scalp baseline */}
      <path d="M50 145 Q200 135 350 145" stroke="#4da6d6" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* label */}
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">FUE HAIR TRANSPLANT</text>
    </svg>
  ),

  prp: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* syringe body */}
      <rect x="140" y="72" width="120" height="36" rx="18" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="2"/>
      {/* plunger */}
      <rect x="255" y="78" width="30" height="24" rx="4" fill="#2a4d7f" stroke="#4da6d6" strokeWidth="1.5"/>
      <line x1="285" y1="85" x2="310" y2="85" stroke="#4da6d6" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="285" y1="95" x2="310" y2="95" stroke="#4da6d6" strokeWidth="2.5" strokeLinecap="round"/>
      {/* needle */}
      <line x1="140" y1="90" x2="90" y2="90" stroke="#4da6d6" strokeWidth="2" strokeLinecap="round"/>
      {/* liquid fill */}
      <rect x="142" y="74" width="60" height="32" rx="16" fill="#4da6d6" opacity="0.35"/>
      {/* droplets */}
      <ellipse cx="72" cy="105" rx="6" ry="9" fill="#c4e538" opacity="0.8"/>
      <ellipse cx="58" cy="118" rx="5" ry="7" fill="#c4e538" opacity="0.6"/>
      <ellipse cx="82" cy="122" rx="4" ry="6" fill="#c4e538" opacity="0.5"/>
      {/* sparkles */}
      <text x="88" y="68" fill="#c4e538" fontSize="14" opacity="0.6">✦</text>
      <text x="106" y="52" fill="#4da6d6" fontSize="10" opacity="0.5">✦</text>
      <text x="68" y="56" fill="#c4e538" fontSize="8" opacity="0.4">✦</text>
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">PRP HAIR TREATMENT</text>
    </svg>
  ),

  cosmetic: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* face outline */}
      <ellipse cx="200" cy="88" rx="58" ry="68" fill="none" stroke="#4da6d6" strokeWidth="2"/>
      {/* eyes */}
      <ellipse cx="178" cy="76" rx="9" ry="7" fill="none" stroke="#4da6d6" strokeWidth="1.8"/>
      <ellipse cx="222" cy="76" rx="9" ry="7" fill="none" stroke="#4da6d6" strokeWidth="1.8"/>
      <circle cx="178" cy="76" r="3" fill="#4da6d6"/>
      <circle cx="222" cy="76" r="3" fill="#4da6d6"/>
      {/* nose */}
      <path d="M196 84 Q200 100 204 84" stroke="#4da6d6" strokeWidth="1.5" fill="none"/>
      {/* smile */}
      <path d="M182 108 Q200 122 218 108" stroke="#c4e538" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* sparkles */}
      <text x="140" y="52" fill="#c4e538" fontSize="18" opacity="0.7">✦</text>
      <text x="250" y="48" fill="#c4e538" fontSize="14" opacity="0.6">✦</text>
      <text x="268" y="108" fill="#4da6d6" fontSize="12" opacity="0.5">✦</text>
      <text x="124" y="110" fill="#4da6d6" fontSize="10" opacity="0.5">✦</text>
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">COSMETIC SURGERY</text>
    </svg>
  ),

  scalp: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* scalp arc */}
      <path d="M100 130 Q200 60 300 130" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="2"/>
      {/* pigmentation dots grid */}
      {[120,140,160,180,200,220,240,260,280].map((x, col) =>
        [95,108,120].map((y, row) => {
          const onScalp = y > (col < 2 || col > 6 ? 140 : col < 3 || col > 5 ? 120 : 95);
          return !onScalp ? (
            <circle key={`${col}-${row}`} cx={x} cy={y} r="3.5"
              fill={row === 0 ? '#c4e538' : '#4da6d6'}
              opacity={0.7 - row * 0.15}
            />
          ) : null;
        })
      )}
      {/* needle tool */}
      <line x1="310" y1="60" x2="248" y2="100" stroke="#4da6d6" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="248,100 255,94 250,108" fill="#4da6d6"/>
      <rect x="312" y="44" width="28" height="18" rx="6" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="1.5"/>
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">SCALP MICROPIGMENTATION</text>
    </svg>
  ),

  eyebrow: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* left brow area */}
      <path d="M80 100 Q120 68 170 82" stroke="#2a4d7f" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M80 100 Q120 68 170 82" stroke="#c4e538" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9"/>
      {/* right brow area */}
      <path d="M230 82 Q280 68 320 100" stroke="#2a4d7f" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M230 82 Q280 68 320 100" stroke="#c4e538" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9"/>
      {/* micro strands left brow */}
      {[88,100,112,124,136,148,160].map((x, i) => (
        <line key={i} x1={x} y1={92 - i * 1.2} x2={x + 3} y2={84 - i * 1.2}
          stroke="#c4e538" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      ))}
      {/* micro strands right brow */}
      {[238,250,262,274,286,298,310].map((x, i) => (
        <line key={i} x1={x} y1={84 + i * 1.2} x2={x + 3} y2={76 + i * 1.2}
          stroke="#c4e538" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      ))}
      {/* eyes */}
      <path d="M90 120 Q125 108 160 120 Q125 138 90 120Z" fill="none" stroke="#4da6d6" strokeWidth="1.5"/>
      <circle cx="125" cy="122" r="8" fill="none" stroke="#4da6d6" strokeWidth="1.5"/>
      <circle cx="125" cy="122" r="4" fill="#4da6d6" opacity="0.5"/>
      <path d="M240 120 Q275 108 310 120 Q275 138 240 120Z" fill="none" stroke="#4da6d6" strokeWidth="1.5"/>
      <circle cx="275" cy="122" r="8" fill="none" stroke="#4da6d6" strokeWidth="1.5"/>
      <circle cx="275" cy="122" r="4" fill="#4da6d6" opacity="0.5"/>
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">EYEBROW RESTORATION</text>
    </svg>
  ),

  care: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="200" fill="#0f1f33"/>
      {/* heart */}
      <path d="M200 148 L120 88 Q100 52 140 44 Q170 40 200 72 Q230 40 260 44 Q300 52 280 88 Z"
        fill="none" stroke="#4da6d6" strokeWidth="2.5"/>
      {/* cross inside heart */}
      <rect x="188" y="78" width="24" height="8" rx="4" fill="#c4e538"/>
      <rect x="196" y="70" width="8" height="24" rx="4" fill="#c4e538"/>
      {/* pulse line */}
      <polyline points="50,105 90,105 110,68 130,140 150,95 170,105 230,105 250,105 270,68 290,140 310,95 330,105 360,105"
        fill="none" stroke="#c4e538" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
      <text x="200" y="185" textAnchor="middle" fill="#4da6d6" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="2" opacity="0.7">POST-TREATMENT CARE</text>
    </svg>
  ),

  'hero-doctor': (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="300" height="170" fill="#0b1827"/>
      <radialGradient id="hdGlow" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#4da6d6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#0b1827" stopOpacity="0"/>
      </radialGradient>
      <rect width="300" height="170" fill="url(#hdGlow)"/>
      {/* person */}
      <circle cx="150" cy="62" r="36" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="1.5"/>
      <path d="M80 170 Q80 118 150 106 Q220 118 220 170Z" fill="#1e3a5f" stroke="#4da6d6" strokeWidth="1.5"/>
      {/* stethoscope */}
      <circle cx="150" cy="118" r="12" fill="none" stroke="#4da6d6" strokeWidth="2"/>
      <path d="M138 118 Q130 132 135 142" stroke="#4da6d6" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="135" cy="145" r="4" fill="#c4e538"/>
      {/* cross */}
      <rect x="141" y="30" width="12" height="4" rx="2" fill="#c4e538"/>
      <rect x="145" y="26" width="4" height="12" rx="2" fill="#c4e538"/>
    </svg>
  ),
};

export default function PlaceholderImg({ src, alt, className, style, type = 'doctor', ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        style={{ display: 'block', overflow: 'hidden', ...style }}
        aria-label={alt}
        role="img"
      >
        {svgs[type] || svgs.doctor}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
