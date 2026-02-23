# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio/CV website for Javin Carlson. Full-stack application with a FastAPI backend and React frontend located in the `Project/` directory.

## Architecture

### Backend (`Project/backend/`)
- **FastAPI** application in `app/main.py`
- **Pydantic** schemas in `app/schemas.py` define `AboutMe` and `Project` models
- Data stored in `app/data.json` (not a database)
- API endpoints: `/about`, `/projects`, `/projects/{project_id}`

### Frontend (`Project/frontend/`)
- **React 19** with **TypeScript** and **Vite** (using SWC)
- **Tailwind CSS 4** for styling
- **React Router DOM** for client-side routing
- `components/` - Reusable UI components (Navibar, Connection, Hero, ProjectCard)
- `pages/` - Route pages (Home, Education)
- Fetches data from backend at `http://127.0.0.1:8000`

## Development Commands

### Backend
```bash
# From Project/backend/ directory
source venv/bin/activate
uvicorn app.main:app --reload
```

### Frontend
```bash
# From Project/frontend/ directory
npm install        # First time setup
npm run dev        # Start dev server
npm run build      # TypeScript compile + Vite build
npm run lint       # Run ESLint
```

## Notes

- Backend uses CORS with allow all origins (development configuration)
- Frontend expects backend running on port 8000
- No tests are currently configured
