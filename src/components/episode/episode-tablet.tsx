"use client";

import { DataTable } from "@/components/dataTable/data-table";
import { getEpisode } from "@/services/episode/episode";
import { EpisodeColumns } from "./columns";

type Episode = Awaited<ReturnType<typeof getEpisode>>;

type EpisodeTableProps = {
  title: string;
  episodes: Episode[];
  loading?: boolean;
  bgColor?: string;
}

export const EpisodeTable = ({ title, episodes, loading = false, bgColor = "bg-gray-50" }: EpisodeTableProps) => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-bold mb-3 text-center text-gray-800">
        {title}
      </h3>
      
      <div className={`${bgColor} rounded-xl border p-4 h-[400px]`}>
        {episodes.length === 0 && !loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-center">
              <div className="text-2xl mb-2">📺</div>
              <div>No hay episodios para mostrar</div>
              <div className="text-sm">Selecciona personajes para ver episodios</div>
            </div>
          </div>
        ) : (
          <DataTable
            columns={EpisodeColumns}
            data={episodes}
            isLoading={loading}
            pageSize={5} 
          />
        )}
      </div>
    </div>
  );
};