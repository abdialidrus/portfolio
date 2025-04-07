import ProjectCard from "./project-card";

interface Project {
    id: string;
    title: string;
    description: string;
    coverImgUrl: string;
    type: {
        name: string;
    };
    images: {
        url: string;
    }[];
    technologies: string[];
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {projects.map((project: Project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.title}
                    description={project.description}
                    coverImgUrl={project.coverImgUrl}
                    type={project.type}
                    github=""
                    images={project.images}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}