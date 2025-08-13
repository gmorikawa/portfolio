import { ActionMenuItem } from "@portifolio/components/ActionMenuItem";
import { NavigationMenu } from "@portifolio/components/NavigationMenu";

export function ApplicationMenu() {
    return (
        <NavigationMenu>
            <ActionMenuItem link="/" label="Home" className="mb-2" />
            <ActionMenuItem link="/skills" label="Skills" className="mb-2" />
            {/* <ActionMenuItem link="/projects" label="Projects" className="mb-2" /> */}
            <ActionMenuItem link="/contact" label="Contact" className="mb-2" />
        </NavigationMenu>
    )
}