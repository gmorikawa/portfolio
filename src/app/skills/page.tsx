import { MainContainer } from "@portifolio/components/MainContainer";
import data from "@portifolio/data/skills.json";
import { getTranslation } from "@portifolio/translation/serverTranslation";
import Image from "next/image";

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

            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>{translations["skill_programming_languages"]}</h5>
                </header>

                <div className="flex flex-row flex-wrap gap-4">
                    {programmingLanguages?.map((skill: Tool) => (
                        <Image unoptimized key={skill?.label} src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>
            
            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>{translations["skill_databases"]}</h5>
                </header>

                <div className="flex flex-row flex-wrap gap-4">
                    {databases?.map((skill: Tool) => (
                        <Image unoptimized key={skill?.label} src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>{translations["skill_frameworks"]}</h5>
                </header>

                <div className="flex flex-row flex-wrap gap-4">
                    {frameworks?.map((skill: Tool) => (
                        <Image unoptimized key={skill?.label} src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>{translations["skill_dev_ops"]}</h5>
                </header>

                <div className="flex flex-row gap-4">
                    {devops?.map((skill: Tool) => (
                        <Image unoptimized key={skill?.label} src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>
        </MainContainer>
    );
}
