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
      image: "https://camo.githubusercontent.com/80ffec709b1a2f1908fe3f2f62de2defbe04ab4eb17a1a1263db8f228684a07f/68747470733a2f2f63646e2e737461746963616c6c792e696f2f67682f5375646f2d4976616e2f4d79576562736974652d4173736574732f6d61696e2f696d616765732f776562736974652f706466617070686f6d65706167652e706e67",
      githubLink: "https://github.com/Ivans-Labs/simple-pdf-app",
      version: "1.0",
      lastUpdated: "2023-03-03"
    }
    // more projects...
  ];

  return (
    <div class="flex flex-wrap justify-around text-white">
      {projects.map((project) => (
        <div
          key={project.title}
          class="m-4 rounded-lg border-2 border-gray-300 p-4 max-w-sm shadow-lg"
        >
          <img src={project.image} alt={project.title} class="mb-4 rounded-lg" />
          <h3 class="text-lg mb-2">{project.title}</h3>
          <p><strong>Version:</strong> {project.version}</p>
          <p><strong>Last Updated:</strong> {project.lastUpdated}</p>
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
      class="px-2 py-1 border-gray-500 border-2 rounded bg-black hover:bg-gray-200 transition-colors"
    />
  );
}