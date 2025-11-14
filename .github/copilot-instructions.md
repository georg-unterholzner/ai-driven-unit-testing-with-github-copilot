# General Instructions

## Project Overview

This is a **demonstration repository** for AI-driven unit testing featuring a simple React todo list app.

Supported Features:
- **Add todos**: Create new tasks with a simple input form
- **Toggle completion**: Mark todos as complete or incomplete with a checkbox
- **Delete todos**: Remove tasks you no longer need
- **Filter by status**: View all todos, only active ones, or only completed ones
- **Client-side storage**: All todos are automatically saved to localStorage and persist across page refreshes

## Architecture

**Structure**: React 19 + TypeScript + Vite
- `/app/` - Single-page todo application with client-side localStorage persistence
- `/app/src/components/` - Presentation components
- `/app/src/hooks/` - Custom React hooks (e.g. state management, localStorage sync)
- `/app/src/types/` - TypeScript interfaces
- `/app/src/utils/` - Utility functions (localStorage helpers)

**Data Flow**: App.tsx → useTodos hook → localStorage utils. Filter logic uses `useMemo` in App.tsx. No external state management, only localStorage and React state.

## Commands

- Always use relative paths to change the directory, e.g.
  - `cd ./app` - good
  - `cd /home/user/repositories/project/app` - bad
- If you already changed the directory, don't try to change it again.
- If you introduce larger changes to the codebase, ALWAYS verify that everything still works correctly. For this, use the **all** the following checks:
  - `npm run lint`: Run ESLint.
  - `npm run test`: Run all unit tests (use `npm run test -- /relative/path/to/file/from/app-folder` to run a specific test file).
  - `npm run typecheck`: Run TypeScript compiler check.
