# Ivans Labs Website

A minimal and secure website to transmit minimal data to low bandwidith text-based browsers.

Alternatively it can work on normal GUI browsers and utilize Javascript.

Based on [Deno Fresh Framework](https://fresh.deno.dev/)

### Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deno.yml
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── components/
│   ├── Button.tsx
│   ├── ProjectsView.tsx
│   └── NavBar.tsx
├── islands/
│   └── News.tsx
├── routes/
│   ├── api
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
