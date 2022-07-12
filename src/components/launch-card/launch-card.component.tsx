import React from "react";
import './launch-card.styles.css'
import image from '../../assets/placeholder-image.png'
import { ProgressiveImage } from "../progressive-image/progressive-image.component";
import { Rocket, RocketLinks } from "../../types";

export interface LaunchCardProps {
    rocket: Rocket;
    mission_name: string;
    launch_success: boolean;
    links: RocketLinks;
}


export function LaunchCard({ rocket, mission_name, launch_success, links }: LaunchCardProps) {

    return (
        <div className="launch-card">
            <ProgressiveImage 
                src={links.flickr_images[0]} 
                className="launch-card__image"
                placeholderSrc={image}
                alt="rocket launch"
            />
            <div className="launch-card__data">
                <p><span>Rocket name:</span> <span>{rocket.rocket_name}</span></p>
                <p><span>Rocket type:</span> <span>{rocket.rocket_type}</span></p>
                <p><span>Mission name:</span> <span>{mission_name}</span></p>
                <p><span>Launch success:</span> <span>{launch_success ? 'yes' : 'no'}</span></p>
            </div>
        </div>
    )
}
