import ActionMenuItem from "@portifolio/components/ActionMenuItem";
import NavigationMenu from "@portifolio/components/NavigationMenu";
import { getTranslation } from "@portifolio/translation/serverTranslation";

export async function ApplicationMenu() {
    const translations = await getTranslation();

    return (
        <NavigationMenu>
            <ActionMenuItem link="/" label={translations("home_menu_label")} className="mb-2" />
            <ActionMenuItem link="/skills" label={translations("skills_menu_label")} className="mb-2" />
            <ActionMenuItem link="/projects" label={translations("projects_menu_label")} className="mb-2" />
            <ActionMenuItem link="/contact" label={translations("contact_menu_label")} className="mb-2" />
        </NavigationMenu>
    )
}