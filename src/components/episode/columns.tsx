import { ColumnDef } from "@tanstack/react-table";
import { getEpisode } from "@/services/episode/episode";


type Episode = Awaited<ReturnType<typeof getEpisode>>;

export const EpisodeColumns: ColumnDef<Episode>[] = [
  {
    accessorKey: "episode",
    header: "Episode",
    cell: ({ row }) => (
      <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
        {row.getValue("episode")}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium text-sm">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "air_date",
    header: "Air Date",
    cell: ({ row }) => (
      <span className="text-xs text-gray-600">
        {row.getValue("air_date")}
      </span>
    ),
  },
];