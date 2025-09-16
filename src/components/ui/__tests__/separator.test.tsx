import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Separator } from '../separator'

describe('Separator Component', () => {
  it('renders without crashing', () => {
    render(<Separator />)
  })

  it('renders with default icon', () => {
    const { container } = render(<Separator />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with custom icon', () => {
    const customIcon = <span>Custom Icon</span>
    const { getByText } = render(<Separator icon={customIcon} />)
    expect(getByText('Custom Icon')).toBeInTheDocument()
  })

  it('renders with custom colors', () => {
    render(
      <Separator 
        topLineColor="via-red-300"
        bottomLineColor="via-green-300"
        circleGradient="from-red-500 to-green-600"
      />
    )
  })
})