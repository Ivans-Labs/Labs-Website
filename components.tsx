/** @jsx femtojsx.h */

import { femtojsx } from "./html.tsx";

type PageProps = {
  title?: string;
  headExtras?: femtojsx.VNode;
  children?: femtojsx.VNode;
};

/**
 * A page layout.
 */
export function Page(props: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {props.title && <title>{props.title}</title>}
        <link rel="stylesheet" href="https://the.missing.style" />
        <script src="https://unpkg.com/htmx.org@1.8.0" />
        {props.headExtras}
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}


export function HomePage() {
  return (
    <Page title="Ivan's Minimal Website">
      <main class="text-center py-5" style="background-color: #2A2E35; color: #FFF;">
        <h1>Welcome to Ivan's Minimal Website</h1>
        <p class="mt-5">
          <Counter value={0} />
        </p>
      </main>
    </Page>
  );
}

export function Counter(props: { value: number }) {
  const successorHref = `/numbers/${props.value}/successor`;

  return (
    <div
      class="box f-row align-items:center justify-content:center"
      hx-get={successorHref}
      hx-target="this"
      hx-swap="outerHTML"
      style="background-color: #545B68; padding: 10px; border-radius: 5px;"
    >
      {props.value}
      <button type="button" class="ml-3 btn btn-light" hx-trigger="click">Increase</button>
    </div>
  );
}
