// /docs/index.tsx

import { tw } from "twind";
import { Partial } from "$fresh/runtime.ts";

const Docs = () => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>My Fresh app</title>
      </head>

      <body f-client-nav className={tw`flex`}>
        <Partial name="sidebar">
          <aside className={tw`w-1/4 p-4`}>
            <h2 className={tw`font-semibold text-lg mb-4`}>Index</h2>
            <a href="/docs/routes" f-partial="/partials/docs/routes"> Routes </a>
          </aside>
        </Partial>

        <Partial name="main">
          <main className={tw`w-3/4 p-4`}>
            <h2 className={tw`font-semibold text-lg mb-4`}>Document Title</h2>
            <p> Documentation content goes here. </p>
          </main>
        </Partial>
      </body>
    </html>
  );
};

export default Docs;