import { getProjects } from "./actions/getProjects";
import ProjectList from "./_components/project-list";

export default async function Home() {
  const { data } = await getProjects();

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <p className="text-2xl">Hello there!</p>
        <p className="text-lg text-gray-700">My name is <b className="text-black">Abdi Alidrus</b> and this are my works.</p>
      </div>
      <div className="mt-0">
        <ProjectList projects={data || []} />
      </div>
    </main>
  );
}
