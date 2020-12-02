import {Galaxy} from "./Objets";

export function transformJsonToGalaxy(json: any) : Galaxy {
        let galaxy: Galaxy = {
            copyright: json.data.copyright,
            date: json.data.date,
            explanation: json.data.explanation,
            hdurl: json.data.hdurl,
            media_type: json.data.media_type,
            service_version: json.data.service_version,
            title: json.data.title,
            url: json.data.url
        }
        return galaxy;
};