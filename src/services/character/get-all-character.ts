import api from "../api";
import { ENDPOINTS } from "@/constants/endoint";

export const getAllCharacters = async (page: number = 1) => {
    const response = await api.get<CharactersResponse>(`${ENDPOINTS.CHARACTERS}`, {
        params: { page },
    });
    return response.data;
};

type CharactersResponse = {
    info: ApiInfo;
    results: Character[];
}


type CharacterLocation = {
    name: string;
    url: string;
}

type Character = {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

type ApiInfo = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}