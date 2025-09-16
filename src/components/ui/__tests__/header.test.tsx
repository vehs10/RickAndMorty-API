import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../header'

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header title="Test Title" subtitle="Test Subtitle" />)
  })

  it('displays the title', () => {
    render(<Header title="Rick y Morty" subtitle="Test Subtitle" />)
    expect(screen.getByText('Rick y Morty')).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    render(<Header title="Test Title" subtitle="Relaciona personajes" />)
    expect(screen.getByText('Relaciona personajes')).toBeInTheDocument()
  })
})