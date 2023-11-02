# Ivans Labs Website

Based on [Deno Fresh Framework](https://fresh.deno.dev/)

Displays all my projects, reports, and showcases.

### Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deno.yml *Linter only*
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── components/
│   ├── Button.tsx
│   └── ProjectsView.tsx *Displays Projects*
├── islands/
│   └── Counter.tsx *test*
├── routes/
│   ├── api/
│   │   └── joke.ts *test*
│   ├── index.tsx
│   ├── _404.tsx
│   ├── greet/
│   │   └── [name].tsx
│   └── _app.tsx
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
