import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../../components/Sidebar';

describe('Sidebar component', () => {
  it('should render the sidebar', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const aside = screen.getByRole('banner');
    expect(aside).toBeInTheDocument();
  });

  it('should render the 3 links of the sidebar', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  });

  it('The content should be rendered', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Models');
    expect(links[1]).toHaveTextContent('Reserve');
    expect(links[2]).toHaveTextContent('Sign Out');
  });
});
