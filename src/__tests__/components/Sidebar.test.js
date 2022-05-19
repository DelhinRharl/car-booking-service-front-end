import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import store from '../../redux/store';

describe('Sidebar component', () => {
  it('should render the sidebar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>,
    );

    const aside = screen.getByRole('banner');
    expect(aside).toBeInTheDocument();
  });

  it('should render the 4 links of the sidebar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>,
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  });

  it('The content should be rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>,
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Models');
    expect(links[1]).toHaveTextContent('Reserve');
    expect(links[2]).toHaveTextContent('My reservations');
    // expect(links[3]).toHaveTextContent('Sign Out');
  });
});
