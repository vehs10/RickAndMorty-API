import { useQuery } from '@tanstack/react-query';
import { getAllCharacters } from '@/services/character/get-all-character';

export const useCharacters = (page: number, key: string) => {
    return useQuery({
        queryKey: ['characters', key, page],
        queryFn: () => getAllCharacters(page),
        staleTime: 2 * 60 * 1000, 
    });
};