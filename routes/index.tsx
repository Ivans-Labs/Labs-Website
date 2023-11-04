import { tw } from 'twind';
import { NavBar } from "../components/NavBar.tsx";
import { ProjectsView } from "../components/ProjectsView.tsx";
import { News } from "../islands/News.tsx";

export default function Home() {
  return (
    <div class={tw`px-4 py-8 mx-auto bg-[#03396c] text-white min-h-screen`}>
      <NavBar />
      <div class={tw`pt-14 max-w-screen-lg mx-auto flex flex-col items-center justify-center`}>
        <h1 class={tw`text-6xl font-bold leading-snug mb-4 text-white`}>Welcome to Ivan's Labs</h1>
        <p class={tw`my-4 text-lg leading-relaxed text-gray-200`}>
          Secure & Refreshing Website powered by Deno Fresh Framework.
        </p>
      </div>
      <h3 class={tw`text-4xl font-semibold leading-snug mb-4 text-center text-white`}>My Focused Projects</h3>
      <div class={tw`my-8`}>
        <ProjectsView />
      </div>
      <div class={tw`my-8`}>
        <News />
      </div>
    </div>
  );
}