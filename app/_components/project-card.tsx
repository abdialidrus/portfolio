import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectType {
    name: string;
}

interface ProjectImage {
    url: string;
}

interface ProjectCardProps {
    id: string;
    name: string;
    description: string;
    coverImgUrl: string;
    type: ProjectType;
    github: string;
    images: ProjectImage[];
    technologies: string[];
}

const ProjectCard = ({ id, name, description, coverImgUrl, type, github, images, technologies }: ProjectCardProps) => {
    return (
        <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            key={id}
        >
            <Card className="group relative hover:shadow-xl transition-shadow duration-300 overflow-hidden p-0">
                <div className="relative overflow-hidden">
                    <img
                        src={images[0].url}
                        alt={name}
                        className="w-full h-45 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Tag Badge */}
                    <span className="absolute top-2 left-2 bg-white text-xs font-medium text-gray-700 px-2 py-0.5 rounded shadow">
                        {type.name}
                    </span>
                </div>

                <CardContent className="ml-4 mb-4 mt-0 p-0">
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((technology) => (
                            <Badge key={technology} variant="secondary">
                                {technology}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </a>

    );
}

export default ProjectCard;