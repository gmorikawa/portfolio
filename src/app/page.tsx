import { MainContainer } from "@portifolio/components/MainContainer";
import { getTranslation } from "@portifolio/translation/serverTranslation";

export default async function Home() {
    const data = await getTranslation();
    const presentation: string[] = data?.presentation;

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
