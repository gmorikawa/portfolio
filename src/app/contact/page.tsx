import { MainContainer } from "@portifolio/components/MainContainer";
import Image from "next/image";

export default function Contact() {
    return (
        <MainContainer>
            <ul>
                <li className="flex flex-row gap-5 items-center-safe p-2">
                    <Image src="https://s.magecdn.com/social/mb-mail.svg" width={50} height={50} alt="mail icon" />
                    <p>gabriel.morikawa@live.com</p>
                </li>

                <li className="flex flex-row gap-5 items-center-safe p-2">
                    <Image src="https://s.magecdn.com/social/tc-linkedin.svg" width={50} height={50} alt="linkedin icon" />
                    <p>linkedin.com/in/gmorikawa</p>
                </li>

                <li className="flex flex-row gap-5 items-center-safe p-2">
                    <Image unoptimized src="https://cdn.simpleicons.org/github/181717" width={50} height={50} alt="github icon" />
                    <p>github.com/gmorikawa</p>
                </li>

                {/* <li className="flex flex-row gap-5 items-center-safe p-2">
                    <Image unoptimized src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" width={50} height={50} alt="github icon" />
                    <p>leetcode.com/u/gmorikawa</p>
                </li> */}
            </ul>
        </MainContainer>
    );
}

