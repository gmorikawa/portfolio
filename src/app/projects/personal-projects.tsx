import { Project } from "@portifolio/common/types/project";
import { projects } from "@portifolio/data/projects";

import StackContainer from "@portifolio/components/container/StackContainer";

import { ProjectSection } from "./project";

export interface PersonalProjectProps { }

export function PersonalProjects({ }: PersonalProjectProps) {
    return (
        <StackContainer className="gap-4">
            {projects.map((project: Project, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </StackContainer>
    );
}

export default PersonalProjects;