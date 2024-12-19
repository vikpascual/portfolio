type TranslationData = {
    [key: string]: string;
};

export interface Translations {
    es: TranslationData;
    en: TranslationData;
}

export interface Project {
    image: string;
    title: string  ; // Solo claves válidas de LocalizationData
    description: string; // Solo claves válidas de LocalizationData
    links: {[key: string]: string};
    tags: string[];
    tags_text: string[];
    year: number;
}

export type Projects = {
    admin_oasis: Project;
    q_learning_pong: Project;
    space_simulator: Project;
    planet_laser_locator: Project;
    lichess_bot: Project;
};