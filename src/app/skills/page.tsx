import { MainContainer } from "@portifolio/components/MainContainer";
import data from "@portifolio/data/skills.json";
import Image from "next/image";

interface Tool {
    label: string;
    icon: string;
}

export default function Skills() {
    const programmingLanguages: Tool[] = data["programming-languages"];
    const databases: Tool[] = data["databases"];
    const frameworks: Tool[] = data["frameworks"];
    const devops: Tool[] = data["devops"];

    return (
        <MainContainer>
            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>Programming Languages</h5>
                </header>

                <div className="flex flex-row gap-4">
                    {programmingLanguages?.map((skill: Tool) => (
                        <Image unoptimized src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>
            
            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>Databases</h5>
                </header>

                <div className="flex flex-row gap-4">
                    {databases?.map((skill: Tool) => (
                        <Image unoptimized src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>Frameworks</h5>
                </header>

                <div className="flex flex-row gap-4">
                    {frameworks?.map((skill: Tool) => (
                        <Image unoptimized src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <header className="mb-4 text-xl">
                    <h5>DevOps</h5>
                </header>

                <div className="flex flex-row gap-4">
                    {devops?.map((skill: Tool) => (
                        <Image unoptimized src={skill?.icon} width={75} height={75} alt={skill?.label} />
                    ))}
                </div>
            </section>
        </MainContainer>
    );
}
