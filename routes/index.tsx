import { useSignal } from "@preact/signals";
import { ProjectsView } from "../components/ProjectsView.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#03396c] text-white min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold ">Welcome to Ivan's Labs</h1>
        <p class="my-4">
          Interactively Updating Project Website based on Deno Fresh.
        </p>
      </div>
      <ProjectsView />
    </div>
  );
}
