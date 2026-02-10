"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type Team = "A" | "B";

type Player = {
  id: string;
  team: Team;
  number: number;
  x: number;
  y: number;
};

const FIELD_W = 100;
const FIELD_H = 64;
const PLAYER_MARGIN_X = 4;
const PLAYER_MARGIN_Y = 4;
const STORAGE_KEY = "motus:tactical-board:players";

const initialPlayers: Player[] = [
  { id: "A-1", team: "A", number: 1, x: 10, y: 32 },
  { id: "A-2", team: "A", number: 2, x: 22, y: 11 },
  { id: "A-3", team: "A", number: 3, x: 22, y: 24 },
  { id: "A-4", team: "A", number: 4, x: 22, y: 40 },
  { id: "A-5", team: "A", number: 5, x: 22, y: 53 },
  { id: "A-6", team: "A", number: 6, x: 35, y: 16 },
  { id: "A-7", team: "A", number: 7, x: 35, y: 32 },
  { id: "A-8", team: "A", number: 8, x: 35, y: 48 },
  { id: "A-9", team: "A", number: 9, x: 47, y: 13 },
  { id: "A-10", team: "A", number: 10, x: 47, y: 32 },
  { id: "A-11", team: "A", number: 11, x: 47, y: 51 },
  { id: "B-1", team: "B", number: 1, x: 90, y: 32 },
  { id: "B-2", team: "B", number: 2, x: 78, y: 11 },
  { id: "B-3", team: "B", number: 3, x: 78, y: 24 },
  { id: "B-4", team: "B", number: 4, x: 78, y: 40 },
  { id: "B-5", team: "B", number: 5, x: 78, y: 53 },
  { id: "B-6", team: "B", number: 6, x: 66, y: 10 },
  { id: "B-7", team: "B", number: 7, x: 66, y: 25 },
  { id: "B-8", team: "B", number: 8, x: 66, y: 39 },
  { id: "B-9", team: "B", number: 9, x: 66, y: 54 },
  { id: "B-10", team: "B", number: 10, x: 55, y: 23 },
  { id: "B-11", team: "B", number: 11, x: 55, y: 41 },
];

const teamColor: Record<Team, string> = {
  A: "#19d3c5",
  B: "#2f6bff",
};

const teamStroke: Record<Team, string> = {
  A: "rgba(134,245,233,0.94)",
  B: "rgba(167,197,255,0.94)",
};

const cloneInitialPlayers = () => initialPlayers.map((player) => ({ ...player }));

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function sanitizePlayers(payload: unknown): Player[] | null {
  if (!Array.isArray(payload)) return null;

  const idx = new Map(initialPlayers.map((player, index) => [player.id, index]));
  const restored: Array<Player | null> = Array.from({ length: initialPlayers.length }, () => null);

  for (const entry of payload) {
    if (!entry || typeof entry !== "object") continue;
    const candidate = entry as Partial<Player>;
    if (typeof candidate.id !== "string" || !idx.has(candidate.id)) continue;

    const fallback = initialPlayers[idx.get(candidate.id) as number];
    restored[idx.get(candidate.id) as number] = {
      id: fallback.id,
      team: fallback.team,
      number: fallback.number,
      x: typeof candidate.x === "number" ? clamp(candidate.x, PLAYER_MARGIN_X, FIELD_W - PLAYER_MARGIN_X) : fallback.x,
      y: typeof candidate.y === "number" ? clamp(candidate.y, PLAYER_MARGIN_Y, FIELD_H - PLAYER_MARGIN_Y) : fallback.y,
    };
  }

  return restored.some((player) => player === null) ? null : (restored as Player[]);
}

export function TacticalBoardPanel() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [players, setPlayers] = useState<Player[]>(() => cloneInitialPlayers());
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [dragging, setDragging] = useState<{ pointerId: number; playerId: string } | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const pointFromEvent = (event: ReactPointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };

    const rect = svg.getBoundingClientRect();
    return {
      x: clamp(((event.clientX - rect.left) / rect.width) * FIELD_W, 0, FIELD_W),
      y: clamp(((event.clientY - rect.top) / rect.height) * FIELD_H, 0, FIELD_H),
    };
  };

  const onPlayerPointerDown = (event: ReactPointerEvent<SVGGElement>, playerId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedPlayerId(playerId);
    svgRef.current?.setPointerCapture(event.pointerId);
    setDragging({ pointerId: event.pointerId, playerId });
  };

  const onFieldPointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (!dragging || dragging.pointerId !== event.pointerId) return;
    event.preventDefault();

    const point = pointFromEvent(event);
    const x = clamp(point.x, PLAYER_MARGIN_X, FIELD_W - PLAYER_MARGIN_X);
    const y = clamp(point.y, PLAYER_MARGIN_Y, FIELD_H - PLAYER_MARGIN_Y);

    setPlayers((prev) => prev.map((player) => (player.id === dragging.playerId ? { ...player, x, y } : player)));
  };

  const onFieldPointerUp = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (dragging?.pointerId === event.pointerId) {
      setDragging(null);
    }
  };

  const onFieldPointerCancel = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (dragging?.pointerId === event.pointerId) {
      setDragging(null);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as unknown;
      const restored = sanitizePlayers(parsed);
      if (restored) setPlayers(restored);
    } catch {
      // Keep defaults when storage is invalid.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
  }, [players, hydrated]);

  return (
    <div className="panel-surface panel-surface-strong relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_24px_64px_rgba(3,8,18,0.52)] backdrop-blur-xl sm:p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(25,211,197,0.18),transparent_42%),radial-gradient(circle_at_90%_12%,rgba(47,107,255,0.14),transparent_38%)]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#071325] p-2 sm:p-3">
        <div className="aspect-[16/10] w-full">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${FIELD_W} ${FIELD_H}`}
            className="h-full w-full touch-none select-none"
            role="img"
            aria-label="Prancheta tática interativa com jogadores móveis"
            onPointerDown={() => setSelectedPlayerId(null)}
            onPointerMove={onFieldPointerMove}
            onPointerUp={onFieldPointerUp}
            onPointerCancel={onFieldPointerCancel}
            onPointerLeave={onFieldPointerCancel}
          >
            <defs>
              <linearGradient id="pitch-base-ui" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0c2f2f" />
                <stop offset="55%" stopColor="#0a2236" />
                <stop offset="100%" stopColor="#0d1a31" />
              </linearGradient>
              <pattern id="pitch-stripes-ui" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="4" fill="rgba(255,255,255,0.03)" />
                <rect y="4" width="8" height="4" fill="rgba(0,0,0,0.03)" />
              </pattern>
            </defs>

            <rect x="2" y="2" width="96" height="60" rx="2.6" fill="url(#pitch-base-ui)" />
            <rect x="2" y="2" width="96" height="60" rx="2.6" fill="url(#pitch-stripes-ui)" />

            <g stroke="rgba(255,255,255,0.32)" strokeWidth="0.34" fill="none">
              <rect x="6" y="6" width="88" height="52" rx="0.8" />
              <line x1="50" y1="6" x2="50" y2="58" />
              <circle cx="50" cy="32" r="7.5" />
              <circle cx="50" cy="32" r="0.52" fill="rgba(255,255,255,0.4)" />
              <rect x="6" y="18" width="12" height="28" />
              <rect x="6" y="24" width="5" height="16" />
              <circle cx="17" cy="32" r="0.45" fill="rgba(255,255,255,0.36)" />
              <path d="M18 25 Q22 32 18 39" />
              <rect x="82" y="18" width="12" height="28" />
              <rect x="89" y="24" width="5" height="16" />
              <circle cx="83" cy="32" r="0.45" fill="rgba(255,255,255,0.36)" />
              <path d="M82 25 Q78 32 82 39" />
            </g>

            {players.map((player) => {
              const isSelected = player.id === selectedPlayerId;
              const color = teamColor[player.team];
              const stroke = teamStroke[player.team];
              const isDragging = dragging?.playerId === player.id;

              return (
                <g
                  key={player.id}
                  onPointerDown={(event) => onPlayerPointerDown(event, player.id)}
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
                >
                  <circle cx={player.x} cy={player.y} r={3.05} fill={color} opacity={isSelected ? 0.58 : 0.25} />
                  <circle
                    cx={player.x}
                    cy={player.y}
                    r={1.72}
                    fill={color}
                    stroke={isSelected ? "rgba(255,255,255,0.96)" : stroke}
                    strokeWidth={isSelected ? 0.48 : 0.34}
                  />
                  <text
                    x={player.x}
                    y={player.y + 0.38}
                    textAnchor="middle"
                    fontSize="1.02"
                    fontWeight={700}
                    fill="#f8fbff"
                    style={{ letterSpacing: "-0.01em", pointerEvents: "none" }}
                  >
                    {player.number}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
