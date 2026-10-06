import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const W = 1280;
const H = 720;

// Deterministic star field
const STARS = new Array(70).fill(0).map((_, i) => ({
  x: random(`x${i}`) * W,
  y: random(`y${i}`) * H * 0.55,
  r: 0.6 + random(`r${i}`) * 1.6,
  phase: random(`p${i}`) * Math.PI * 2,
}));

const Cloud: React.FC<{ x: number; y: number; scale: number; opacity: number }> = ({
  x,
  y,
  scale,
  opacity,
}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
    <ellipse cx={0} cy={0} rx={70} ry={22} fill="#ffd9c7" />
    <ellipse cx={-35} cy={-12} rx={38} ry={24} fill="#ffe3d4" />
    <ellipse cx={25} cy={-18} rx={44} ry={28} fill="#ffe8dc" />
  </g>
);

export const GunBatimi: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / (durationInFrames - 1);

  // Sky turns from warm sunset to dusk
  const skyTop = interpolateColors(t, [0, 1], ["#ff7e5f", "#1b1f4b"]);
  const skyMid = interpolateColors(t, [0, 1], ["#feb47b", "#6a3c7a"]);
  const skyBottom = interpolateColors(t, [0, 1], ["#ffe29f", "#f08a5d"]);

  // Sun sinks behind the mountains
  const sunY = interpolate(t, [0, 1], [300, 560]);
  const sunGlow = interpolate(t, [0, 1], [1, 0.4]);

  const starOpacity = interpolate(t, [0.45, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const mountainShade = (base: string, dusk: string) =>
    interpolateColors(t, [0, 1], [base, dusk]);

  return (
    <AbsoluteFill>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={skyTop} />
            <stop offset="55%" stopColor={skyMid} />
            <stop offset="100%" stopColor={skyBottom} />
          </linearGradient>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#fff6c8" stopOpacity={0.9 * sunGlow} />
            <stop offset="100%" stopColor="#ffb347" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={skyBottom} stopOpacity={0.8} />
            <stop offset="100%" stopColor={skyTop} />
          </linearGradient>
        </defs>

        <rect width={W} height={H} fill="url(#sky)" />

        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#ffffff"
            opacity={starOpacity * (0.6 + 0.4 * Math.sin(frame / 8 + s.phase))}
          />
        ))}

        <circle cx={W / 2} cy={sunY} r={220} fill="url(#glow)" />
        <circle cx={W / 2} cy={sunY} r={80} fill="#fff1a8" />

        <Cloud x={((frame * 1.2) % (W + 300)) - 150} y={140} scale={1.2} opacity={1 - t * 0.5} />
        <Cloud x={((frame * 0.7 + 600) % (W + 300)) - 150} y={210} scale={0.8} opacity={1 - t * 0.5} />
        <Cloud x={((frame * 0.9 + 1000) % (W + 300)) - 150} y={90} scale={0.6} opacity={1 - t * 0.5} />

        {/* Far mountains */}
        <path
          d="M0 470 L140 360 L260 430 L400 320 L560 440 L700 340 L860 450 L1000 330 L1140 420 L1280 360 L1280 560 L0 560 Z"
          fill={mountainShade("#c06c84", "#3b2a5a")}
        />
        {/* Near mountains */}
        <path
          d="M0 540 L180 420 L320 500 L480 400 L640 520 L820 410 L980 510 L1140 430 L1280 500 L1280 560 L0 560 Z"
          fill={mountainShade("#6c5b7b", "#1e1838")}
        />
        {/* Snow caps */}
        <path d="M480 400 L455 420 L470 418 L480 428 L492 417 L505 420 Z" fill="#fdf2e9" opacity={0.85} />
        <path d="M820 410 L796 428 L810 427 L820 436 L832 426 L845 429 Z" fill="#fdf2e9" opacity={0.85} />

        {/* Lake with sun reflection */}
        <rect y={560} width={W} height={H - 560} fill="url(#lake)" />
        {new Array(8).fill(0).map((_, i) => {
          const w = interpolate(i, [0, 7], [150, 30]) * sunGlow;
          const shimmer = Math.sin(frame / 6 + i) * 10;
          return (
            <rect
              key={i}
              x={W / 2 - w / 2 + shimmer}
              y={575 + i * 17}
              width={w}
              height={4}
              rx={2}
              fill="#fff1a8"
              opacity={0.7 - i * 0.07}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
