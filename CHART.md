# Charte Graphique — viktor.dev

Référence complète pour reproduire l'identité visuelle du portfolio sur d'autres plateformes (GitHub profile README, Notion, présentations, etc.)

---

## Couleurs

### Palette principale

| Rôle | Nom | Hex (600) | Hex (500) | Hex (400) | Usage |
|---|---|---|---|---|---|
| **Primary** | Violet | `#7c3aed` | `#8b5cf6` | `#a78bfa` | Accents, liens, badges, titres hover |
| **Secondary** | Blue | `#2563eb` | `#3b82f6` | `#60a5fa` | Dégradés, timeline, accents secondaires |
| **Neutral** | Zinc | `#52525b` | `#71717a` | `#a1a1aa` | Texte muted, bordures, backgrounds |

### Dégradé signature

Utilisé pour les textes gradient, les bordures de cards au hover, et les lignes décoratives :

```
135deg — Violet #7c3aed (0%) → Blue #3b82f6 (100%)
```

En CSS :
```css
background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
```

### Backgrounds

| Mode | Background principal | Background alterné (sections) |
|---|---|---|
| **Light** | `#ffffff` / `zinc-50` | `zinc-100/40` |
| **Dark** | `zinc-950` | `zinc-900/40` |

---

## Typographie

### Familles

| Rôle | Police | Weights | Source |
|---|---|---|---|
| **Display / Titres** | **Syne** | 700, 800 | Google Fonts |
| **Corps / UI** | **DM Sans** | 400, 500, 600 | Google Fonts |
| **Mono / Labels** | Système (`font-mono`) | 400 | — |

### Hiérarchie

| Élément | Police | Taille | Weight | Style |
|---|---|---|---|---|
| Hero H1 | Syne | `clamp(4rem, 12vw, 9rem)` | 800 | `tracking-[-0.04em]`, `line-height: 0.92` |
| Section H2 | Syne | `3rem` (5xl) | 700 | `tracking-tight` |
| Card H3 | Syne | `1.05rem` | 700 | `line-height: 1.4` |
| Corps | DM Sans | `0.875rem` (sm) | 400 | `leading-relaxed` |
| Labels / eyebrow | Mono | `0.75rem` (xs) | 400 | `tracking-[0.2em]`, `uppercase` |
| Badges / tags | Mono | `0.75rem` (xs) | 500 | — |

### Effets texte

**Gradient text** (titres accent) :
```css
background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Text outline** (titres décoratifs vides) :
```css
-webkit-text-stroke: 1.5px #d4d4d8; /* zinc-300 */
-webkit-text-fill-color: transparent;
```

---

## Espacements & Layout

| Élément | Valeur |
|---|---|
| Container max-width | `72rem` (1152px) |
| Border radius global | `0.375rem` (6px) |
| Padding sections | `py-24` (6rem) / `py-32` pour Contact |
| Gap grille projets | `1.25rem` (5) |
| Gap badges | `0.375rem` (1.5) |

---

## Effets visuels

### Grain overlay
Texture de bruit subtile sur le hero pour casser l'effet trop lisse :
```css
background-image: url("data:image/svg+xml,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.035'/></svg>");
```
Opacité du grain : **0.035** (très subtil)

### Border gradient card
Au hover, une bordure dégradée Violet → Blue apparaît autour des cards :
- Épaisseur : `1.5px`
- Transition : `opacity 0.3s ease`
- Technique : double `mask` avec `mask-composite: exclude`

### Dot pattern background
Fond pointillés discret sur le hero :
```
Cercles r=1, espacement 32x32, opacity 0.025, currentColor
```

### Radial glow
Halos lumineux décoratifs dans certaines sections :
```css
background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
opacity: 0.06 à 0.07;
```

---

## Animations

| Animation | Durée | Easing | Déclencheur |
|---|---|---|---|
| Fade-up hero (badges, titre, CTA) | `0.6s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Au chargement, stagger 100ms |
| Draw-line (ligne décorative hero) | `1s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Après `0.6s` delay |
| Reveal sections (scroll) | `0.7s` | `cubic-bezier(0.16, 1, 0.3, 1)` | IntersectionObserver |
| Chip hover lift | `0.15s` | `ease` | Hover (`translateY(-2px) rotate(-1deg)`) |
| Card border gradient | `0.3s` | `ease` | Hover |
| Pulse (scroll indicator) | `2s` | `ease-in-out` | Infini |

---

## Composants UI

### Badges / Chips
- Background : `primary/10` ou `neutral/10`
- Texte : `primary` ou `neutral`
- Variant : `soft`
- Font : monospace
- Hover : lift + micro-rotation `-1deg`

### Cards
- Bordure : `1px border-default` au repos → transparente au hover
- Background : `bg-default`
- Shadow au hover : `shadow-xl`
- Border radius : hérite du global (`6px`)

### Navigation
- Font : DM Sans, `font-semibold`, `tracking-wide`
- Sticky avec `backdrop-blur-md` + `bg-default/80` après 40px de scroll
- Bordure bottom apparaît au scroll

### Boutons primaires
- Font : Syne, `font-bold`
- Couleur : `primary` (violet)
- Taille CTA principal : `lg` / `xl`

---

## Identité verbale

| Élément | Valeur |
|---|---|
| Nom affiché | `Viktor.` (point violet) |
| Tagline | *"Je construis des interfaces qui tiennent la route — et les infras qui les font tourner."* |
| Ton | Direct, technique, sans fioritures |
| Langue | Français |
| Footer | *"© [année] Viktor — Code, containers & curiosité."* |

---

## Liens & Contacts

| Plateforme | URL |
|---|---|
| GitHub | https://github.com/Diix46 |
| LinkedIn | https://www.linkedin.com/in/viktor-postupak-b30833147/ |
| Email | viktor.postupak@gmail.com |
