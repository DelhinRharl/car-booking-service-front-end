import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CarDetails from '../../pages/CarDetails';

describe('CarDetails component', () => {
  it('should render the  page correctly ', () => {
    const header = render(
      <BrowserRouter>
        <CarDetails />
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
