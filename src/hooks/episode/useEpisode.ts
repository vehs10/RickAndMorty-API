import { useQuery } from '@tanstack/react-query';
import { getMultipleEpisodes, extractEpisodeIds } from '@/services/episode/episode';
import { getAllCharacters } from "@/services/character/get-all-character";
import { getEpisode } from '@/services/episode/episode';

type Character = Awaited<ReturnType<typeof getAllCharacters>>['results'][number];
type Episode = Awaited<ReturnType<typeof getEpisode>>;

export const useEpisodes = (character1: Character | null, character2: Character | null) => {
    return useQuery({
        queryKey: ['episodes', character1?.id, character2?.id],
        queryFn: async () => {
            let character1Episodes: Episode[] = [];
            let character2Episodes: Episode[] = [];
            let sharedEpisodes: Episode[] = [];
            if (character1) {
                const char1EpisodeIds = extractEpisodeIds(character1.episode);
                if (char1EpisodeIds.length > 0) {
                    character1Episodes = await getMultipleEpisodes(char1EpisodeIds);
                }
            }
            if (character2) {
                const char2EpisodeIds = extractEpisodeIds(character2.episode);
                if (char2EpisodeIds.length > 0) {
                    character2Episodes = await getMultipleEpisodes(char2EpisodeIds);
                }
            }
            if (character1 && character2) {
                const char1EpisodeIds = extractEpisodeIds(character1.episode);
                const char2EpisodeIds = extractEpisodeIds(character2.episode);
                const sharedIds = char1EpisodeIds.filter(id => char2EpisodeIds.includes(id));
                
                if (sharedIds.length > 0) {
                    sharedEpisodes = await getMultipleEpisodes(sharedIds);
                }
            }

            return {
                character1Episodes,    
                character2Episodes,     
                sharedEpisodes         
            };
        },
        enabled: !!(character1 || character2), 
        staleTime: 10 * 60 * 1000, 
    });
};