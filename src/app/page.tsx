import data from "@portifolio/data/presentation.json";
import personal from "@portifolio/data/personal-information.json";

export default function Home() {
    const presentation: string[] = data["en-US"];

    return (
        <main className="p-10">
            <section id="profile-card" className="card">
                <header className="mb-6">
                    <h4 className="text-lg">
                        {personal?.name?.japanese}
                    </h4>

                    <h2 className="text-4xl">
                        {personal?.name?.original}
                    </h2>

                    <h2 className="text-lg">
                        {personal?.title}
                    </h2>
                </header>

                <main>
                    {presentation.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-2">
                            {paragraph}
                        </p>
                    ))}
                </main>
            </section>
        </main>
    );
}
