import MainContainer from "@portifolio/components/MainContainer";
import { getTranslation } from "@portifolio/translation/serverTranslation";

export default async function Home() {
    const translations = await getTranslation();
    const presentation: string[] = translations("presentation") as string[];

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
