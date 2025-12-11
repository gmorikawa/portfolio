import Badge from "@portifolio/components/data-display/Badge";
import Container from "@portifolio/components/container/Container";
import FlexContainer from "@portifolio/components/container/FlexContainer";
import Hyperlink from "@portifolio/components/Hyperlink";
import StackContainer from "@portifolio/components/container/StackContainer";
import List from "@portifolio/components/data-display/List";
import Paragraph from "@portifolio/components/typography/Paragraph";
import Text from "@portifolio/components/typography/Text";

import { Icons } from "@portifolio/common/icons";
import { Style } from "@portifolio/utils/style";
import { getTranslation } from "@portifolio/translation/serverTranslation";

type Title = string;
type Description = string;
type IconLink = string;
type ProjectRepository = {
    label: string;
    url: string;
    description: string;
    technologies: string[];
};

export interface ProjectProps {
    title: Title;
    description: Description;
    repositories: ProjectRepository[];
    icon: IconLink
}

export async function Project({ title, description, repositories, icon }: ProjectProps) {
    const translations = await getTranslation();

    return (
        <StackContainer className="gap-4">
            <FlexContainer className="gap-8">
                <Container className="basis-auto">
                    <img src={icon} alt={`${title} Icon`} className="w-48 border-1 border-gray-300 rounded-lg" />
                </Container>

                <Container className="flex-grow">
                    <header className="mb-4">
                        <h5 className="font-bold text-2xl">
                            {title}
                        </h5>
                    </header>

                    <Paragraph>{translations(description)}</Paragraph>
                </Container>
            </FlexContainer>

            <Container className="w-full">
                <h6 className="font-bold">Repositories</h6>

                <List.Container className="mb-4">
                    {repositories.map((repository, repositoryIndex: number) => (
                        <List.Item key={repositoryIndex}>
                            <StackContainer className="gap-2 py-2">
                                <FlexContainer justify="start" align="center" className="gap-2">
                                    <Text>
                                        <i className={Style.join(Icons["Github"])} />
                                    </Text>
                                    <Hyperlink href={repository.url} target="_blank" rel="noopener noreferrer">
                                        {repository.label}
                                    </Hyperlink>

                                    <Text>{translations(repository.description)}</Text>
                                </FlexContainer>

                                <FlexContainer className="gap-2 flex-wrap">
                                    {repository.technologies.map((technology, techIndex: number) => (
                                        <Badge key={techIndex}>
                                            <i className={Style.join(Icons[technology])} /> {technology}
                                        </Badge>
                                    ))}
                                </FlexContainer>
                            </StackContainer>
                        </List.Item>
                    ))}
                </List.Container>
            </Container>
        </StackContainer>
    );
}