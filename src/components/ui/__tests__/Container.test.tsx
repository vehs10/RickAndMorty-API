import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContainerLayout } from '../Container'

describe('ContainerLayout Component', () => {
  it('renders without crashing', () => {
    render(
      <ContainerLayout>
        <div>Test content</div>
      </ContainerLayout>
    )
  })

  it('renders with title', () => {
    render(
      <ContainerLayout title="Test Title">
        <div>Test content</div>
      </ContainerLayout>
    )
  })

  it('renders children content', () => {
    const { getByText } = render(
      <ContainerLayout>
        <div>Test children content</div>
      </ContainerLayout>
    )
    
    expect(getByText('Test children content')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <ContainerLayout className="custom-class">
        <div>Test content</div>
      </ContainerLayout>
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })
})