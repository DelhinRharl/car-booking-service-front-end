import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import PrimaryButton from '../../components/PrimaryButton';

describe('PrimaryButton Component', () => {
  it('should render the button', () => {
    render(
      <BrowserRouter>
        <PrimaryButton>Test button</PrimaryButton>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render the correct text', () => {
    render(
      <BrowserRouter>
        <PrimaryButton>Test button</PrimaryButton>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test button');
  });

  it('should have a default type button', () => {
    render(
      <BrowserRouter>
        <PrimaryButton>Test button</PrimaryButton>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should have a provided type', () => {
    render(
      <BrowserRouter>
        <PrimaryButton btnType="submit">Test button</PrimaryButton>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
