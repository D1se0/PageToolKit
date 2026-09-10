# D1se0 :: ToolKit

ToolKit web de ciberseguridad ofensiva/defensiva que cataloga los repositorios públicos de
[github.com/D1se0](https://github.com/D1se0), organizados en **Red Team** y **Blue Team**, con
filtrado por categoría, búsqueda y un tema visual que cambia por completo (rojo/gris ↔ azul/gris)
según el equipo seleccionado.

## Stack

- **Node.js + React 18** (Vite)
- CSS puro con variables de tema, glassmorphism y animaciones

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  data/repos.js        # catálogo curado de repos (equipo, categoría, icono, descripción)
  components/
    Icon.jsx            # librería de iconos SVG propios (stroke-based)
    Navbar.jsx
    Hero.jsx
    TeamSwitch.jsx       # selector Todos / Red Team / Blue Team
    FilterBar.jsx        # búsqueda + chips de categoría
    RepoCard.jsx
    RepoGrid.jsx
    Footer.jsx
  styles/index.css       # sistema de diseño (temas, glass, grid, animaciones)
```

## Actualizar el catálogo

Añade o edita entradas en `src/data/repos.js`. Cada repo define:

```js
{
  name, team: 'red' | 'blue', category, icon,
  desc, lang, stars, url, featured?: true
}
```

Las categorías disponibles están en `RED_CATEGORIES` y `BLUE_CATEGORIES` del mismo archivo.
