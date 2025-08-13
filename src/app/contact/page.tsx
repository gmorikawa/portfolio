import { ImageMenuItem } from "@portifolio/components/ImageMenuItem";
import { MainContainer } from "@portifolio/components/MainContainer";
import Image from "next/image";
import contact from "@portifolio/data/contact.json";

export default function Contact() {
    return (
        <MainContainer>
            <ul>
                {contact.map((item, index: number) => (
                    <ImageMenuItem key={index} image={item.icon} label={item.value} />
                ))}
            </ul>
        </MainContainer>
    );
}

