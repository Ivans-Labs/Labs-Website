// /docs/index.tsx

import { tw } from "twind";
import { Partial } from "$fresh/runtime.ts";
import { Search } from "../../components/Search.tsx";

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
          <aside className={tw`w-1/4 h-screen p-8 bg-gray-900`}>
            <h1 className={tw`text-white text-2xl tracking-wide mb-4`}>Documentation Index</h1>
            <Search />
            <h2 className={tw`text-gray-400 text-lg mb-2`}>Topics</h2>
            <a href="/docs/routes" f-partial="/partials/docs/routes" className={tw`text-blue-300 hover:text-blue-500 transition`}>
              Routes 
            </a>
          </aside>
        </Partial>

        <Partial name="main">
          <main className={tw`w-3/4 h-screen p-8 bg-gray-900 m-6 rounded-xl overflow-auto`}>
            <h2 className={tw`font-semibold text-white mb-2`}>Document Title</h2>
            <h3 className={tw`font-medium text-gray-400 mb-1`}>Subtitle</h3>
            <p className={tw`text-gray-400`}> Documentation content goes here. </p>
          </main>
        </Partial>
      </body>
    </html>
  );
};

export default Docs;