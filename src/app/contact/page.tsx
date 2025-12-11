import { Hyperlink } from "@portifolio/components/Hyperlink";
import { ImageMenuItem } from "@portifolio/components/ImageMenuItem";
import { MainContainer } from "@portifolio/components/MainContainer";
import contact from "@portifolio/data/contact.json";

export default function Contact() {
    return (
        <MainContainer>
            <ul>
                {contact.map((item, index: number) => (
                    <ImageMenuItem key={index} image={item.icon} description={item.value}>
                        <Hyperlink href={item.link}>{item.value}</Hyperlink>
                    </ImageMenuItem>
                ))}
            </ul>
        </MainContainer>
    );
}

