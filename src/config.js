// All constants and balance numbers live here.
export const CFG = {
  TS: 16,                 // tile size in world pixels
  WORLD_W: 1600,
  WORLD_H: 600,
  CHUNK: 32,              // tiles per chunk side
  ZOOM: 2,
  STEP: 1000 / 60,

  phys: {
    grav: 0.4, maxFall: 10,
    accel: 0.08, airAccel: 0.05, maxRun: 3,
    friction: 0.2, airFriction: 0.03,
    jumpSpeed: 5.1, jumpHold: 15,
    waterGrav: 0.15, waterMaxFall: 3, waterMul: 0.5,
  },

  player: {
    w: 20, h: 42,
    hp: 100, hpCap: 400, crystalHp: 20,
    mana: 20, manaCap: 200, crystalMana: 20,
    iframes: 40, reachX: 5, reachY: 4,
    fallSafe: 25, fallDmgPerTile: 10,
    breath: 200, respawn: 360, grab: 84,
    potionSick: 3600,
  },

  // one full cycle = 15 minutes of real time
  day: { dayTicks: 32400, nightTicks: 21600, start: 2400 },

  spawn: {
    day: { rate: 380, cap: 4 },
    night: { rate: 170, cap: 7 },
    under: { rate: 220, cap: 6 },
    hell: { rate: 150, cap: 6 },
    crypt: { rate: 110, cap: 8 },
    bloodRate: 3, bloodCap: 2, townCap: 0.34,
    despawn: 90, minDist: 34, maxDist: 56,
  },

  autosaveTicks: 18000,
  lightMargin: 18,
  liquidRX: 70, liquidRY: 45,

  // Balance per ore tier. Each step is ~+30% melee DPS and a clear defense jump.
  tiers: [
    { id: 'brassine', name: 'Brassine', pal: 'brassine', sword: { dmg: 9, ut: 22, kb: 5, len: 32 }, pick: { pow: 35, dmg: 5, ut: 19 }, axe: { pow: 9, dmg: 4, ut: 24 }, bow: null, armor: [1, 2, 1], setDef: 2, rar: 0, val: 150 },
    { id: 'grelite', name: 'Grelite', pal: 'grelite', sword: { dmg: 12, ut: 21, kb: 5.5, len: 36 }, pick: { pow: 45, dmg: 6, ut: 18 }, axe: { pow: 11, dmg: 6, ut: 23 }, bow: { dmg: 8, ut: 27, vel: 8 }, armor: [2, 3, 2], setDef: 3, rar: 0, val: 300 },
    { id: 'veridium', name: 'Veridium', pal: 'veridium', sword: { dmg: 15, ut: 20, kb: 6, len: 38 }, pick: { pow: 55, dmg: 8, ut: 17 }, axe: { pow: 13, dmg: 8, ut: 22 }, bow: null, armor: [3, 5, 3], setDef: 4, rar: 1, val: 600 },
    { id: 'aurelium', name: 'Aurelium', pal: 'aurelium', sword: { dmg: 19, ut: 19, kb: 6.5, len: 40 }, pick: { pow: 65, dmg: 10, ut: 16 }, axe: { pow: 15, dmg: 10, ut: 21 }, bow: { dmg: 13, ut: 25, vel: 9 }, armor: [5, 6, 5], setDef: 5, rar: 1, val: 1200 },
  ],
  cindrite: { armor: [7, 9, 7], dmgBonus: 0.12 },

  // mining: each hit deals tool power; tile breaks when accumulated >= tile hp
  tileDecay: 300,
  rarity: ['#ffffff', '#9696ff', '#96ff96', '#ffc896', '#ff9696', '#ff96ff', '#d2a0ff'],
  bossColor: '#af4bff',
};
