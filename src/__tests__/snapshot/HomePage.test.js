import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import HomePage from '../../pages/HomePage';
import store from '../../redux/store';

describe('Home Page', () => {
  it('should render the  page correctly ', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(home).toMatchSnapshot();
  });
});
