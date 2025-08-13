import data from "@portifolio/data/skills.json";
import Image from "next/image";

interface WithIcon {
    icon: string;
}

interface ProgrammingLanguage extends WithIcon {
    language: string;
}

interface Database extends WithIcon {
    database: string;
}

export default function Skills() {
    const programmingLanguages: ProgrammingLanguage[] = data["programming-languages"];
    const databases: Database[] = data["database"];

    return (
        <main id="content">
            <table>
                {programmingLanguages?.map((skill: ProgrammingLanguage) => (
                    <tr>
                        <td>
                            <Image unoptimized src={skill?.icon} width={50} height={50} alt={skill?.language} />
                        </td>
                        <td>
                            <p>{skill?.language}</p>
                        </td>
                    </tr>
                ))}
            </table>

            <table>
                {databases?.map((skill: Database) => (
                    <tr>
                        <td>
                            <Image unoptimized src={skill?.icon} width={50} height={50} alt={skill?.database} />
                        </td>
                        <td>
                            <p>{skill?.database}</p>
                        </td>
                    </tr>
                ))}
            </table>
        </main>
    );
}
