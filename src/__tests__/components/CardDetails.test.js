import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import CarDetails from '../../pages/CarDetails';
import store from '../../redux/store';

describe('CarDetails Component', () => {
  it('should render the button', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetails />
        </BrowserRouter>
      </Provider>,
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render an image', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetails />
        </BrowserRouter>
      </Provider>,
    );
    const image = getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
