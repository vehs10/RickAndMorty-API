import { useQuery } from '@tanstack/react-query';
import { getAllCharacters } from '@/services/character/get-all-character';

export const useCharacters = (page: number) => {
    return useQuery({
        queryKey: ['characters', page],
        queryFn: () => getAllCharacters(page),
        staleTime: 3 * 60 * 1000, 
    });
};