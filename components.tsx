/** @jsx femtojsx.h */

import { femtojsx } from "./html.tsx";
import { extract, install } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";

install({
  presets: [
    presetTailwind(),
    {
      theme: {
        fontFamily: {
          sans: ["Helvetica", "sans-serif"],
          serif: ["Times", "serif"],
        },
      },
    },
  ],
});

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.title && <title>{props.title}</title>}
        <link rel="stylesheet" href="https://the.missing.style" />
        <script src="https://unpkg.com/htmx.org@1.8.0" />
        {props.headExtras}
      </head>
      <body style="background-color: #2A2E35; color: #FFF;">
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export function Nav() {
  return (
    <nav class="p-3" style="border-radius: 5px; background-color: #545B68;">
      <a href="/" class="mr-3" style="color: #FFF;">Home</a>
      <a href="/tools" style="color: #FFF;">Tools</a>
    </nav>
  );
}

export function Header() {
  return (
      <header class="p-3" style="border-radius: 5px; background-color: #545B68;">
          <h1 class="mb-3">Ivan's Minimal Website</h1>
          <Nav />
      </header>
  );
}

export function Footer() {
    return (
        <footer class="p-3 text-center" style="border-radius: 5px; background-color: #545B68;">
            <p>&copy; 2023 Ivan's Minimal HTMX + Deno Website</p>
        </footer>
    );
}

export function HomePage() {
  return (
    <Page title="Ivan's Minimal Website">
      <AboutSection />
      <ContactSection />
    </Page>
  );
}

export function AboutSection() {
    return (
        <section class="p-5 text-center">
            <h2>About Ivan's Minimal Website</h2>
            <p>Welcome to my website! Here you can find information about me and my work.</p>
        </section>
    );
}

export function ContactSection() {
    return (
        <section class="p-5 text-center">
            <h2>Contact Ivan</h2>
            <p>For any inquiries or questions, please contact me through email@example.com. I'd love to hear from you!</p>
        </section>
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