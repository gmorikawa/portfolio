import StackContainer from "@portifolio/components/container/StackContainer";

import { Project } from "./project";

import projects from "@portifolio/data/projects.json";

export interface PersonalProjectProps { }

export function PersonalProjects({ }: PersonalProjectProps) {
    return (
        <StackContainer className="gap-4">
            {projects.map((project, index: number) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    repositories={project.repositories}
                    icon={project.icon}
                />
            ))}
        </StackContainer>
    );
}

export default PersonalProjects;