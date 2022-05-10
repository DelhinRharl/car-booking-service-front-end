import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CarouselItem from '../../components/CarouselItem';
import carImageSmall from '../../images/car-small.png';

describe('Carousel Component', () => {
  it('should render the carousel item wrapped in a link with the correct path', () => {
    render(
      <BrowserRouter>
        <CarouselItem />
      </BrowserRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/cars/1');
    expect(link).not.toHaveAttribute('href', '/cars/2');
  });

  it('should render the correct image', () => {
    render(
      <BrowserRouter>
        <CarouselItem />
      </BrowserRouter>,
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', carImageSmall);
  });

  it('should render the correct heading', () => {
    render(
      <BrowserRouter>
        <CarouselItem />
      </BrowserRouter>,
    );

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Mercedes 2022');
  });

  it('should render the correct description', () => {
    render(
      <BrowserRouter>
        <CarouselItem />
      </BrowserRouter>,
    );

    const paragraph = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec/i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
