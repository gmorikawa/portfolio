import { MainContainer } from "@portifolio/components/MainContainer";
import data from "@portifolio/data/presentation.json";


export default function Home() {
    const presentation: string[] = data["en-US"];

    return (
        <MainContainer>
            {presentation.map((paragraph: string, index: number) => (
                <p key={index} className="mb-2">
                    {paragraph}
                </p>
            ))}
        </MainContainer>
    );
}
