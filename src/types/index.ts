export interface Rocket {
    rocket_name: string;
    rocket_type: string;
}

export interface RocketLinks {
    flickr_images: Array<string>;
}

export interface Launch {
    id: number;
    launch_date_local: string;
    rocket: Rocket;
    mission_name: string;
    launch_success: boolean;
    links: RocketLinks
}

export interface LaunchGroup {
    date: string;
    items: Array<Launch>;
}
