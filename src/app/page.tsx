"use client";

import { useState } from "react";
import { CharacterSection } from "@/components/character/character-section";
import { getAllCharacters } from "@/services/character/get-all-character";
import { useEpisodes } from "@/hooks/episode/useEpisode";
import { EpisodeTable } from "@/components/episode/episode-tablet";
import { Header } from "@/components/ui/header";
import { ContainerLayout } from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

type Character = Awaited<
  ReturnType<typeof getAllCharacters>
>["results"][number];

export default function Home() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);

  const [selectedCharacter1, setSelectedCharacter1] =
    useState<Character | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] =
    useState<Character | null>(null);

  const { data: episodesData, isLoading: episodesLoading } = useEpisodes(
    selectedCharacter1,
    selectedCharacter2
  );

  const character1OnlyEpisodes = episodesData?.character1Episodes || [];
  const character2OnlyEpisodes = episodesData?.character2Episodes || [];
  const sharedEpisodes = episodesData?.sharedEpisodes || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header
        title="Rick y Morty Universo de Personajes"
        subtitle="Relaciona personajes y descubre sus episodios compartidos"
      />

      <main className="container mx-auto px-4 py-8">
        <ContainerLayout className="mb-8">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 relative">
            <div className="flex-1">
              <CharacterSection
                title="Personaje #1"
                page={page1}
                onPageChange={setPage1}
                onCharacterSelect={setSelectedCharacter1}
                selectedCharacter={selectedCharacter1}
              />
            </div>
            <div className="hidden lg:block">
              <Separator />
            </div>
            <div className="flex-1 mt-8 lg:mt-0">
              <CharacterSection
                title="Personaje #2"
                page={page2}
                onPageChange={setPage2}
                onCharacterSelect={setSelectedCharacter2}
                selectedCharacter={selectedCharacter2}
              />
            </div>
          </div>
        </ContainerLayout>

        <ContainerLayout title="Analisis de Capitulos">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <EpisodeTable
              title="Personaje #1 - Solo Capitulos"
              episodes={character1OnlyEpisodes}
              loading={episodesLoading}
              bgColor="bg-blue-50"
            />

            <EpisodeTable
              title="Personajes #1 & #2 - Capitulos Compartidos"
              episodes={sharedEpisodes}
              loading={episodesLoading}
              bgColor="bg-green-50"
            />

            <EpisodeTable
              title="Personaje #2 - Solo Capitulos"
              episodes={character2OnlyEpisodes}
              loading={episodesLoading}
              bgColor="bg-purple-50"
            />
          </div>
        </ContainerLayout>
      </main>
    </div>
  );
}
