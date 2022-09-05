export interface NavItems {
    href: string;
    name: string;
    image: string;
}

export interface Data {
    user: UserData;
}

interface UserData {
    name: string;
    avatar_url: string;
    html_url: string;
    bio: string;
}

export interface DataSkill {
    name: string;
    level: number;
}

export interface LayoutProps {
    children: JSX.Element;
    title: string;
    foot: boolean;
}