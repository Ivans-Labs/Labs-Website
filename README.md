# Ivans Labs Website

A Project Website implementing from scratch components and concepts.

- `/docs` Implement a fully featured docs system (from scratch)
- `/reports` Implement a reports generation using MD, MDX and CSV.
- `/news` Implement News Feed with RSS (related news to my projects, blogs or reports)

**Future:**

- `/tools` My various different web tools
- `/ai` - AI tools

Based on [Deno Fresh Framework](https://fresh.deno.dev/)

### Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deno.yml *Basic Linter*
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── components/
│   ├── Button.tsx
│   ├── ProjectsView.tsx *Displays my projects, will need rework to get from Projects.json.*
│   └── NavBar.tsx *Basic rounded floating NavBar*
├── islands/
│   ├── News.tsx *Display News and Arrows, will need to rework to fetch from files*
│   └── Search.tsx *Basic Search function for /docs*
├── routes/
│   ├── api/
│   │   └── joke.ts *test*
│   ├── index.tsx
│   ├── _404.tsx
│   ├── greet/
│   │   └── [name].tsx
│   ├── _app.tsx
│   └── docs/
│       └── index.tsx *docs page, wip*
├── static/
│   └── favicon.ico
├── .gitignore
├── deno.json
├── dev.ts
├── fresh.config.ts
├── fresh.gen.ts
├── main.ts
├── README.md
└── twind.config.ts
```

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
