import { ContactIcon, HomeIcon, ProjectIcon, SkillIcon } from "@portifolio/common/icons";
import ActionMenuItem from "@portifolio/components/ActionMenuItem";
import NavigationMenu from "@portifolio/components/NavigationMenu";
import { getTranslation } from "@portifolio/translation/serverTranslation";

export async function ApplicationMenu() {
    const translations = await getTranslation();

    return (
        <NavigationMenu>
            <ActionMenuItem link="/" icon={<HomeIcon />} label={translations("home_menu_label")} className="mb-2" />
            <ActionMenuItem link="/skills" icon={<SkillIcon />} label={translations("skills_menu_label")} className="mb-2" />
            <ActionMenuItem link="/projects" icon={<ProjectIcon />} label={translations("projects_menu_label")} className="mb-2" />
            <ActionMenuItem link="/contact" icon={<ContactIcon />} label={translations("contact_menu_label")} className="mb-2" />
        </NavigationMenu>
    )
}