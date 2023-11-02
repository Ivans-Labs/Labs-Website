# Ivans Labs Website

Based on Deno Fresh Framework

### Project Structure

.
├── .github/
│   └── workflows/
│       └── deno.yml
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── components/
│   ├── Button.tsx
│   └── ProjectsView.tsx *Displays Projects*
├── islands/
│   └── Counter.tsx
├── routes/
│   ├── api/
│   │   └── joke.ts
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

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
