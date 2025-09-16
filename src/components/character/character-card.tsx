import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { getAllCharacters } from "@/services/character/get-all-character";

type Character = Awaited<ReturnType<typeof getAllCharacters>>['results'][number];

type CharacterCardProps = {
  character: Character;
  isSelected?: boolean;
  onClick?: (character: Character | null) => void;
}

export const CharacterCard = ({ character, isSelected = false, onClick }: CharacterCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(isSelected ? null : character);
    }
  };

  return (
    <div
      className={cn(
        "border rounded-xl p-2 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105",
        "flex flex-col items-center space-y-1.5 h-[100px] w-full", 
        "bg-gradient-to-br from-white to-gray-50", 
        isSelected 
          ? "border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl ring-4 ring-blue-200/50" 
          : "border border-gray-200 hover:border-blue-300 hover:shadow-md"
      )}
      onClick={handleClick}
    >

      <Avatar className="w-10 h-10 ring-2 ring-white shadow-sm">
        <AvatarImage src={character.image} alt={character.name} className="object-cover" />
        <AvatarFallback className="text-xs font-bold bg-gradient-to-br from-purple-400 to-blue-500 text-white">
          {character.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-semibold text-xs text-center line-clamp-1 px-1 text-gray-800">
        {character.name}
      </h3>
    
      <div className="flex items-center justify-center space-x-1 text-[10px] text-gray-600 w-full px-1">
        <div 
          className={cn(
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            character.status === "Alive" && "bg-emerald-500 shadow-sm",
            character.status === "Dead" && "bg-red-500 shadow-sm",
            character.status === "unknown" && "bg-gray-400 shadow-sm"
          )}
        />
        <span className="truncate font-medium">
          {character.status} • {character.species}
        </span>
      </div>
    </div>
  );
};