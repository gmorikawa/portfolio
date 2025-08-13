import data from "@portifolio/data/presentation.json";

export default function Home() {
    const presentation: string[] = data["en-US"];

    return (
        <main className="p-10">
            <section id="profile-card" className="card">
                <header className="mb-6">
                    <h2 style={{ fontSize: "50px", fontFamily: "'Yuji Syuku', serif" }}>
                        こんにちは
                    </h2>
                </header>

                <main>
                    {presentation.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-2" style={{ fontFamily: "'Yuji Syuku', serif" }}>
                            {paragraph}
                        </p>
                    ))}
                </main>
            </section>
        </main>
    );
}
