import {
    ChakraUIIcon,
    DockerIcon,
    JavaIcon,
    MavenIcon,
    PostgreSQLIcon,
    ReactIcon,
    ReactRouterIcon,
    SpringBootIcon,
    TypeScriptIcon,
    ViteIcon
} from "@portifolio/common/icons";
import { Project } from "@portifolio/common/types/project";

export const projects: Project[] = [
    {
        title: "図書館　toshokan",
        description: "project.toshokan.description",
        repositories: [
            {
                "label": "toshokan",
                "url": "https://github.com/gmorikawa/toshokan",
                "description": "project.toshokan.repository.toshokan",
                "technologies": [
                    { label: "Java", icon: <JavaIcon /> },
                    { label: "Spring Boot", icon: <SpringBootIcon /> },
                    { label: "PostgreSQL", icon: <PostgreSQLIcon /> },
                    { label: "Maven", icon: <MavenIcon /> }
                ]
            },
            {
                "label": "toshokan-web",
                "url": "https://github.com/gmorikawa/toshokan-web",
                "description": "project.toshokan.repository.toshokan-web",
                "technologies": [
                    { label: "TypeScript", icon: <TypeScriptIcon /> },
                    { label: "React", icon: <ReactIcon /> },
                    { label: "Vite", icon: <ViteIcon /> },
                    { label: "Chakra UI", icon: <ChakraUIIcon /> },
                    { label: "React Router", icon: <ReactRouterIcon /> }
                ]
            },
            {
                "label": "toshokan-ops",
                "url": "https://github.com/gmorikawa/toshokan-ops",
                "description": "project.toshokan.repository.toshokan-ops",
                "technologies": [
                    { label: "Docker", icon: <DockerIcon /> }
                ]
            }
        ],
        icon: "/toshokan_logo.png"
    }
];
