import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CharacterCard } from '../character-card'
import { API_URL } from '@/services/api'

// Mock character data
const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive' as 'Alive' | 'Dead' | 'unknown',
  species: 'Human',
  type: '',
  gender: 'Male' as 'Male' | 'Female' | 'Genderless' | 'unknown',
  origin: {
    name: 'Earth (C-137)',
    url: `${API_URL}/location/1`
  },
  location: {
    name: 'Citadel of Ricks',
    url: `${API_URL}/location/3`
  },
  image: `${API_URL}/character/avatar/1.jpeg`,
  episode: [`${API_URL}/episode/1`],
  url: `${API_URL}/character/1`,
  created: '2017-11-04T18:48:46.250Z'
}

describe('CharacterCard Component', () => {
  it('renders without crashing', () => {
    render(<CharacterCard character={mockCharacter} />)
  })

  it('displays character name', () => {
    render(<CharacterCard character={mockCharacter} />)
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  })

  it('displays character status and species', () => {
    render(<CharacterCard character={mockCharacter} />)
    expect(screen.getByText('Alive • Human')).toBeInTheDocument()
  })

  it('renders when selected', () => {
    render(<CharacterCard character={mockCharacter} isSelected={true} />)
  })

  it('renders when not selected', () => {
    render(<CharacterCard character={mockCharacter} isSelected={false} />)
  })

  it('handles different character statuses', () => {
    const deadCharacter = { ...mockCharacter, status: 'Dead' as 'Alive' | 'Dead' | 'unknown' }
    render(<CharacterCard character={deadCharacter} />)
    expect(screen.getByText('Dead • Human')).toBeInTheDocument()
  })
})