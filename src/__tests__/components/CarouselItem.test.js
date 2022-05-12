import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CarouselItem from '../../components/CarouselItem';

describe('Carousel Component', () => {
  it('should render the carousel item wrapped in a link with the correct path', () => {
    render(
      <BrowserRouter>
        <CarouselItem
          car={{
            id: 1, make: 'Mercedes ', model: '2022', image: 'image',
          }}
        />
      </BrowserRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/cars/1');
    expect(link).not.toHaveAttribute('href', '/cars/2');
  });

  it('should render the correct image', () => {
    render(
      <BrowserRouter>
        <CarouselItem
          car={{
            id: 1, make: 'Mercedes ', model: '2022', image: 'image',
          }}
        />
      </BrowserRouter>,
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'image');
  });

  it('should render the correct heading', () => {
    render(
      <BrowserRouter>
        <CarouselItem
          car={{
            id: 1, make: 'Mercedes ', model: '2022', image: 'image',
          }}
        />
      </BrowserRouter>,
    );

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Mercedes 2022');
  });

  it('should render the correct description', () => {
    render(
      <BrowserRouter>
        <CarouselItem
          car={{
            id: 1, make: 'Mercedes ', model: '2022', image: 'image',
          }}
        />
      </BrowserRouter>,
    );

    const paragraph = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec/i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
