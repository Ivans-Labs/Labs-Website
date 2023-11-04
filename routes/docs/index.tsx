// /docs/index.tsx

import { tw } from "twind";
import { Partial } from "$fresh/runtime.ts";

const Docs = () => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ivans Labs - Docs</title>
      </head>
      
      <body f-client-nav className={tw`flex bg-gray-800 text-white`}>
        <Partial name="sidebar">
          <aside className={tw`w-1/4 p-4`}>
            <h1 className={tw`text-white text-2xl tracking-wide mb-4`}>Documentation Index</h1>
            <h2 className={tw`text-white text-xl mb-2`}>Topics:</h2>
            <a href="/docs/routes" f-partial="/partials/docs/routes" className={tw`text-blue-500 hover:text-blue-800`}>
              Routes 
            </a>
          </aside>
        </Partial>

        <Partial name="main">
          <main className={tw`w-3/4 p-4 bg-white bg-opacity-90 rounded-lg m-4`}>
            <h2 className={tw`font-semibold text-gray-800 mb-2`}>Document Title</h2>
            <h3 className={tw`font-medium text-gray-700 mb-1`}>Subtitle</h3>
            <p className={tw`text-gray-600`}> Documentation content goes here. </p>
          </main>
        </Partial>
      </body>
    </html>
  );
};

export default Docs;