# Portfolio Viktor — Design Spec

## Contexte

Vitrine personnelle one-page pour Viktor, développeur frontend avec expertise DevOps et bonne connaissance des outils IA. Pas d'objectif commercial immédiat — showcase libre.

## Décisions validées

| Décision | Choix |
|---|---|
| Framework | Nuxt 3 + SSG (`nuxt generate`) |
| UI lib | @nuxt/ui v4 |
| CSS | Tailwind CSS v4 |
| Ambiance | A + C : fond clair, accents violets/bleus vifs |
| Hero layout | Texte seul, aligné à gauche |
| Photo | Aucune |
| Sections | Hero, Compétences, Projets, Expérience, Contact |
| Effort design | Maximum — CSS poussé, effets distinctifs, aucun "AI slop" |

## Identité visuelle

- **Typographie** : Syne (headings, display) + DM Sans (body)
- **Palette** : primary `violet`, secondary `blue`, neutral `zinc`
- **Fond** : blanc avec grain SVG subtil en overlay
- **Accents** : violet-600 / blue-500 uniquement sur éléments clés
- **Radius** : 0.375rem (légèrement arrondi, pas trop playful)

## Effets CSS distinctifs (anti-AI-slop)

- Titre hero avec text-stroke outline animé + gradient clip
- Ligne décorative SVG animée sous le hero
- Skill chips avec hover tilt 3D (transform perspective)
- Project cards avec border gradient animé au hover
- Scroll-triggered fade-in via IntersectionObserver — géré par un composable global `useReveal()` (single IntersectionObserver instance, appelé dans `pages/index.vue`)
- Curseur custom subtil (dot blanc, mix-blend-difference, s'agrandit au hover sur éléments interactifs) — désactivé sur mobile (pointerfine media query), respecte `prefers-reduced-motion`
- Noise texture overlay sur le hero (SVG filter inline)
- Timeline expérience avec ligne verticale animée au scroll
- Sticky nav avec backdrop-blur + transition border au scroll

## AppCursor — comportement précis

- Composant `AppCursor.vue` : dot circulaire blanc `w-3 h-3`, `mix-blend-difference`, suit la souris via `mousemove`
- Au hover sur `a, button, [data-cursor-hover]` : s'agrandit à `w-8 h-8`
- Rendu via `<Teleport to="body">` pour éviter les z-index conflicts
- **Désactivé sur touch** : le composant ne rend rien si `window.matchMedia('(pointer: coarse)').matches`
- **Réduit si `prefers-reduced-motion`** : transitions désactivées, position fixe non animée

## Structure fichiers

```
app.vue                          ← UApp wrapper + UHeader/UFooter
pages/index.vue                  ← assemblage des sections
components/
  TheHero.vue                    ← section hero
  TheSkills.vue                  ← grille compétences
  TheProjects.vue                ← cards projets
  TheExperience.vue              ← timeline expérience
  TheContact.vue                 ← section contact
  AppCursor.vue                  ← curseur custom
assets/css/main.css              ← theme Tailwind + fonts + variables
app.config.ts                    ← couleurs NuxtUI
nuxt.config.ts                   ← modules + SSG
```

## Contenu

### Hero
- Titre : "Viktor."
- Sous-titre : "Développeur Frontend & DevOps"
- Tagline : "Je construis des interfaces qui tiennent la route — et les infras qui les font tourner."
- CTAs : "Voir mes projets" (primary) + "Me contacter" (ghost)
- Badges : Frontend · DevOps · IA

### Compétences (groupées)
- Frontend : React, Vue, Nuxt, TypeScript, Tailwind
- DevOps : Docker, CI/CD, Linux, WireGuard, SWAG, Selfhost
- IA : LLM, Prompt Engineering, AI Tools, Langchain

### Projets — data shape par carte

Chaque projet a les champs suivants :

| Champ | Type | Requis |
|---|---|---|
| `name` | string | oui |
| `description` | string | oui |
| `tags` | string[] | oui |
| `icon` | emoji | oui |
| `github` | string \| null | non — lien masqué si null |
| `link` | string \| null | non — lien masqué si null |

Projets initiaux (placeholders — Viktor mettra à jour les URLs) :
- GeoMind : Nuxt + FastAPI, homelab, github: null, link: null
- DiixServer : Docker Compose + WireGuard + Linux, github: null, link: null
- Dealbot : Discord.js + Node.js, github: null, link: null
- DiixHub : Vue + Nuxt + Self-host, github: null, link: null

### Expérience — data shape par entrée

Chaque entrée timeline a les champs suivants :

| Champ | Type | Description |
|---|---|---|
| `period` | string | ex. "2023 — Aujourd'hui" |
| `role` | string | Intitulé du poste |
| `company` | string | Nom de la société |
| `description` | string | 1-2 phrases |
| `tags` | string[] | Technologies utilisées |

Le composant `TheExperience.vue` est construit avec 3 entrées placeholder que Viktor remplacera. La structure du composant ne dépend pas du contenu réel.

### Contact — intégration

- Pas de formulaire : tous les liens sont des `<a href>` directs
- Email : lien `mailto:` — Viktor remplacera l'adresse
- GitHub : lien externe vers son profil
- LinkedIn : **inclus** — lien externe vers son profil (Viktor remplacera l'URL)
- Le site est SSG pur, zéro backend, zéro service tiers requis

### nuxt.config.ts — modules requis

```ts
modules: ['@nuxt/ui', '@nuxt/fonts']
```

- `@nuxt/ui` : fournit Tailwind v4 + tous les composants
- `@nuxt/fonts` : charge Syne + DM Sans automatiquement depuis Google Fonts
- `nitro.preset: 'static'` pour SSG
