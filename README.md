# Terrabrowser

A 2D sandbox action-adventure game for the browser, built to play and feel like a classic dig-build-fight sandbox. Everything is original: names, items, enemies, bosses and NPCs. All art is drawn in code, and all sound and music are synthesized with Web Audio. There are no libraries, images or audio files.

## Running it

It needs a static web server because it uses ES modules, so opening `index.html` directly won't work.

```bash
npx serve .
# then open the printed URL (usually http://localhost:3000)
```

Any static server works, for example `python3 -m http.server 8000`, then open http://localhost:8000.

Saves go to IndexedDB, with a localStorage fallback. Both are per-browser and per-origin.

## Controls

| Action | Keys |
| --- | --- |
| Move | `A` / `D` (or arrow keys) |
| Jump (hold for higher, double jump with Cloud in a Flask) | `Space` / `W` |
| Drop through platforms, release grappling hook | `S` |
| Use held item (mine, chop, attack, place, drink) | Left mouse |
| Interact (chests, doors, beds, NPCs, Grave Bell) | Right mouse |
| Select hotbar slot | `1`-`0`, mouse wheel |
| Inventory, crafting, equipment | `Esc` |
| World map (wheel to zoom, drag to pan) | `M` |
| Grappling hook (needs one in your inventory) | `E` |
| Quick heal (uses a Healing Tonic) | `H` |
| Pause menu (save, settings, exit) | `P`, or the **Menu** button while the inventory is open |
| Performance overlay | `F3` |

Inventory mouse controls:
- **Click** picks up, places or swaps a stack.
- **Right-click** splits a stack in half, or places one item. Right-clicking armor or an accessory equips it.
- **Shift-click** quick-moves a stack between the hotbar and the inventory, or between the inventory and an open chest. While a shop is open, it sells the stack.
- Clicking in the world while holding an item on the cursor throws it.

## How to progress

1. You start with a **Brassine** broadsword, pickaxe and axe. Chop trees and kill Gelhoppers for gel. Craft torches, a Workbench, doors, tables and chairs.
2. Build a house: enclose a room with blocks and fill it with a background wall. Add a door, a light, a table and a chair. Use the house icon in the inventory to check a room. It highlights the room green or red and gives the reason. **Rowan the Pathfinder** moves in, and other NPCs arrive as you progress:

   | NPC | Arrives when |
   | --- | --- |
   | Barnaby the Peddler | You have 50 silver |
   | Maribel the Medic | You have more than 100 max life |
   | Dex the Gunsmith | You own a gun or ammo |
   | Fern the Druid | You have defeated a boss |

3. Mine deeper through the ore tiers: Brassine, Grelite, Veridium, then Aurelium. Each pickaxe can mine the next tier. Smelt ore at a Furnace and craft gear at a Grelite Anvil. Each tier gives about +30% melee DPS and a clear jump in defense.
4. Find **Life Crystals** (+20 max life each, up to 400) and cavern chests. Collect **Fallen Stars** at night to make Mana Crystals.
5. **Omnivisor**: craft a Gazing Idol from 6 Lenses and 2 Brassine Bars, then use it at night.
6. **Rotmaw Devourer**: smash three glowing Rot Orbs in the Blight's chasms with a hammer. You can also use Rotting Bait in the Blight. Blightstone needs a Grelite pickaxe.
7. **Ossuary Warden**: ring the Grave Bell by the Old Crypt at night. Defeating it unseals the crypt and its loot.
8. Craft a **Rotfang Pickaxe** from Rot Scales and Aurelium Bars, then mine **Cindrite** in the underworld. Smelt it at a Cinder Forge, found in the underworld ruins or crafted.
9. **The Cinder Wall**: craft a Cinder Effigy at the forge and use it in the underworld. Defeat it to conquer the world.

## Difficulty

Choose a difficulty when you create a world. It is saved with the world and can't be changed afterwards. Hard worlds show a red **HARD** tag in the world list.

- **Normal** is the classic experience. With gear from the matching tier, each boss fight takes about 1-2 minutes, and you'll probably die once or twice while you learn it. A fresh character can survive the first night by fighting.
- **Hard** is diabolical. Changes compared with Normal:
  - Enemies have 1.8× health and deal 1.7× damage.
  - Bosses have 1.8× health and deal 1.4× damage.
  - Bosses reach their second phase at 70% health instead of 50%.
  - Everything moves 10% faster and attacks about 40% more often.
  - Twice as many enemies spawn.
  - Natural life regeneration is halved, and potion sickness lasts 1.5× longer.
  - Knockback is stronger.
  - In return, coin drops are 2.5× larger and every boss drops an extra roll of loot.

Every balance number is in `src/config.js`: enemy and boss stats in `CFG.enemies`, boss behavior (speeds, attack timers) in `CFG.bosses`, and the difficulty multipliers in `CFG.difficulty`.

## Features

- **World.** A seeded 1600×600 world. The loading screen shows each generation pass. It has:
  - rolling surface terrain, with dirt blending into stone
  - noise caverns and tunnels
  - an ocean at each edge
  - a forest spawn area in the middle
  - desert with cacti, snow with ice and boreal trees, and jungle with mud and vines
  - the spreading Blight, with chasms and glowing Rot Orbs
  - the brick Old Crypt, on the opposite side from the Blight
  - two floating islands, each with a house and a chest
  - underground cabins, pots, and Life Crystals
  - an underworld with ash, lava lakes, Cindrite and emberbrick ruins
- **Engine.**
  - A fixed 60 updates per second, with interpolated rendering.
  - The world is drawn in 32×32-tile chunk canvases, and only changed chunks are redrawn.
  - Autotiled edges and grass that drapes over the edges of dirt blocks.
  - RGB flood-fill lighting with true darkness and colored emitters.
  - Water and lava are cellular automata, and water plus lava makes Scoria.
  - Per-biome parallax backgrounds that crossfade as you move between biomes.
- **Player.**
  - Movement has acceleration, friction, variable-height jumps and automatic stepping up 1-tile ledges.
  - Fall damage, swimming with a breath meter, and a grappling hook.
  - Buffs and debuffs, 5 armor sets with set bonuses, and 3 accessory slots.
  - When you die you drop half your coins, then respawn at your bed or the world spawn.
- **Combat.** Broadswords with swing arcs, a boomerang, bows and arrows, a gun, and magic staves. Damage numbers, critical hits, knockback, invincibility frames and screen shake.
- **Enemies and bosses.** 14 regular enemies, each with its own AI, plus 4 multi-phase bosses. Spawns depend on biome, depth, time of day, light and nearby housing. Each boss has unique loot.
- **Time and weather.** A 15-minute day/night cycle with sun, moon phases and stars. Rain, blood moons with boosted spawns, and collectible falling stars.
- **UI.** Laid out like the genre: a hotbar with the selected item's name above it, hearts with a "Life" label, mana stars, and a minimap with zoom buttons. Also buff icons, a chat log, and tooltips with rarity colors. A fullscreen map with fog of war.
- **Saving.** Autosave every 5 minutes, plus manual save from the pause menu. World data is RLE-compressed.

## Project layout

```
index.html, style.css
src/main.js       boot, game states, fixed-step loop, save/load actions (module interfaces documented at top)
src/config.js     constants and all balance numbers
src/rng.js        seeded RNG, hashing, simplex noise
src/input.js      keyboard/mouse
src/audio.js      Web Audio SFX + procedural music (day/night/underground/boss)
src/save.js       IndexedDB/localStorage persistence, RLE
src/tiles.js      tile + wall definitions
src/world.js      typed-array world storage and tile helpers
src/worldgen.js   world generation passes
src/liquids.js    water/lava simulation
src/lighting.js   RGB light propagation
src/sprites.js    all procedural pixel art
src/renderer.js   chunk cache, parallax, camera, lighting composite, particles
src/physics.js    tile collision
src/player.js     player movement, items, mining/building, interaction
src/enemies.js    enemies, bosses, projectiles, combat
src/npcs.js       NPCs, housing, shops, dialogue
src/items.js      items, recipes, loot tables, inventory helpers
src/ui.js         HUD, inventory, crafting, map, menus
src/events.js     day/night, weather, blood moon, falling stars, world ticks, autosave
```
