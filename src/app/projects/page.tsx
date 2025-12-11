import MainContainer from "@portifolio/components/MainContainer";
import { PersonalProjects } from "./personal-projects";
import Container from "@portifolio/components/container/Container";

export default function Projects() {
    return (
        <MainContainer>
            <Container className="pb-10 mb-10">
                <PersonalProjects />
            </Container>
        </MainContainer>
    );
}

