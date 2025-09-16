import api from "../api";
import { ENDPOINTS } from "@/constants/endoint";

export const getEpisode = async (id: number) => {
    const response = await api.get<Episode>(`${ENDPOINTS.EPISODES}/${id}`);
    return response.data;
};

export const getMultipleEpisodes = async (ids: number[]) => {
    if (ids.length === 0) return [];
    
    const idsString = ids.join(',');
    const response = await api.get<Episode[]>(`${ENDPOINTS.EPISODES}/${idsString}`);
    return Array.isArray(response.data) ? response.data : [response.data];
};

export const extractEpisodeIds = (episodeUrls: string[]) => {
    return episodeUrls.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length - 1]);
    });
};

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}