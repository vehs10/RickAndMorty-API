import { CharacterCard } from "./character-card";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useCharacters } from "@/hooks/character/useCharacter";
import { getAllCharacters } from "@/services/character/get-all-character";
import { Loader2 } from "lucide-react";

type Character = Awaited<ReturnType<typeof getAllCharacters>>['results'][number];

type CharacterSectionProps = {
  title: string;
  page: number;
  onPageChange: (page: number) => void;
  onCharacterSelect: (character: Character | null) => void; 
  selectedCharacter: Character | null;
}

export const CharacterSection = ({ 
  title, 
  page, 
  onPageChange, 
  onCharacterSelect, 
  selectedCharacter 
}: CharacterSectionProps) => {
  const { data, isLoading } = useCharacters(page);

  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-lg">
            <div className="flex flex-col items-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-[400px] sm:h-[500px] lg:h-[620px] mb-4 p-2 bg-gray-50/50 rounded-lg border overflow-y-auto">
          {data?.results.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={selectedCharacter?.id === character.id}
              onClick={onCharacterSelect}
            />
          ))}
          
          {isLoading && Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="h-[100px] bg-gray-200 rounded-xl animate-pulse border"
            />
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      {data?.info && !isLoading && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) onPageChange(page - 1);
                }}
                className={page <= 1 ? "pointer-events-none opacity-50" : "hover:bg-blue-50"}
              />
            </PaginationItem>
            
            {Array.from({ length: Math.min(5, data.info.pages) }, (_, i) => {
              const pageNum = page <= 3 ? i + 1 : page - 2 + i;
              if (pageNum > data.info.pages) return null;
              
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(pageNum);
                    }}
                    isActive={pageNum === page}
                    className={pageNum === page ? "bg-blue-500 text-white" : "hover:bg-blue-50"}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (page < data.info.pages) onPageChange(page + 1);
                }}
                className={page >= data.info.pages ? "pointer-events-none opacity-50" : "hover:bg-blue-50"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};