import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
interface Project {
  title: string;
  image: string;
  githubLink: string;
  version: string;
  lastUpdated: string;
}

export function ProjectsView() {
  const projects: Project[] = [
    {
      title: "simple-pdf-app",
      image: "https://cdn.statically.io/gh/Ivans-Labs/Labs-Website/main/static/projects/simplepdfapp.jpg",
      githubLink: "https://github.com/Ivans-Labs/simple-pdf-app",
      version: "1.0",
      lastUpdated: "2023-03-03"
    },
    {
      title: "Titan OSINT Arsenal",
      image: "https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/logo/titanosint.png",
      githubLink: "https://github.com/Ivans-Labs/",
      version: "0.1",
      lastUpdated: "2023-06-01"
    },
    {
      title: "DataHindge",
      image: "https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/logo/datahinge.png",
      githubLink: "https://github.com/Ivans-Labs/",
      version: "0.6",
      lastUpdated: "2023-09-01"
    },
  ];

  return (
    <div class="flex flex-wrap gap-4 justify-center text-white mt-12">
      {projects.map((project) => (
        <div
          key={project.title}
          class="m-2 rounded-lg border-2 border-blue-700 p-4 max-w-sm shadow-lg bg-[#032b52] flex flex-col justify-between"
        >
          <div>
            <img src={project.image} alt={project.title} class="mb-4 rounded-lg" style={{ width: '400px', height: 'max' }} />
            <h3 class="text-lg mb-2">{project.title}</h3>
            <p><strong>Version:</strong> {project.version}</p>
            <p><strong>Last Updated:</strong> {project.lastUpdated}</p>
          </div>
          <Button
            onClick={() => window.location.href = project.githubLink}
            class="mt-4"
          >
            GitHub Link
          </Button>
        </div>
      ))}
    </div>
  );
}

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-blue-700 border-2 rounded bg-darkblue-900 hover:bg-blue-700 transition-colors text-white"
    />
  );
}