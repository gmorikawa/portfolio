import { MainContainer } from "@portifolio/components/MainContainer";
import data from "@portifolio/data/skills.json";
import { getTranslation } from "@portifolio/translation/serverTranslation";
import { Logo } from "./logo";
import { LogoContainer } from "./logo-container";
import { ToolsContainer } from "./tools-container";

interface Tool {
    label: string;
    icon: string;
}

export default async function Skills() {
    const translations = await getTranslation();

    const programmingLanguages: Tool[] = data["programming-languages"];
    const databases: Tool[] = data["databases"];
    const frameworks: Tool[] = data["frameworks"];
    const devops: Tool[] = data["devops"];

    return (
        <MainContainer>
            <section className="mb-10">
                {translations["skills_warning"]?.map((line: string, index: number) => (
                    <p key={index}>{line}</p>
                ))}
            </section>

            <ToolsContainer title={translations["skill_programming_languages"]}>
                <LogoContainer>
                    {programmingLanguages?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title={translations["skill_databases"]}>
                <LogoContainer>
                    {databases?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title={translations["skill_frameworks"]}>
                <LogoContainer>
                    {frameworks?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title={translations["skill_dev_ops"]}>
                <LogoContainer>
                    {devops?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>
        </MainContainer>
    );
}
