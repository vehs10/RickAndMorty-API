import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { EpisodeTable } from '../episode-tablet'
import { API_URL } from '@/services/api'

const mockEpisodes = [
  {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: [],
    url: `${API_URL}/episode/1`,
    created: '2017-11-10T12:56:33.798Z'
  },
  {
    id: 2,
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
    characters: [],
    url: `${API_URL}/episode/2`,
    created: '2017-11-10T12:56:33.916Z'
  }
]

describe('EpisodeTable Component', () => {
  it('renders without crashing', () => {
    render(<EpisodeTable title="Test Episodes" episodes={[]} />)
  })

  it('displays title', () => {
    render(<EpisodeTable title="Test Episodes" episodes={[]} />)
    expect(screen.getByText('Test Episodes')).toBeInTheDocument()
  })

  it('shows empty state when no episodes', () => {
    render(<EpisodeTable title="Test Episodes" episodes={[]} />)
    expect(screen.getByText('No hay episodios para mostrar')).toBeInTheDocument()
    expect(screen.getByText('Selecciona personajes para ver episodios')).toBeInTheDocument()
  })

  it('renders with episodes data', () => {
    render(<EpisodeTable title="Test Episodes" episodes={mockEpisodes} />)
    expect(screen.getByText('Test Episodes')).toBeInTheDocument()
  })

  it('renders with loading state', () => {
    render(<EpisodeTable title="Test Episodes" episodes={[]} loading={true} />)
  })

  it('renders with custom background color', () => {
    render(
      <EpisodeTable 
        title="Test Episodes" 
        episodes={[]} 
        bgColor="bg-blue-50" 
      />
    )
  })
})