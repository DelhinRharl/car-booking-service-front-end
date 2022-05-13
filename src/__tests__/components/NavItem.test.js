import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavItem from '../../components/NavItem';

describe('NavItem component', () => {
  it('should render the list item', () => {
    render(
      <BrowserRouter>
        <NavItem link="/">Test link</NavItem>
      </BrowserRouter>,
    );
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
  });

  it('should render the link', () => {
    render(
      <BrowserRouter>
        <NavItem link="/">Test link</NavItem>
      </BrowserRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should render the text', () => {
    render(
      <BrowserRouter>
        <NavItem link="/">Test link</NavItem>
      </BrowserRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Test link');
  });

  it('should render the button', () => {
    const handleLogOut = () => {};
    render(
      <BrowserRouter>
        <NavItem link="/" handleLogOut={handleLogOut}>
          Test button
        </NavItem>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test button');
  });

  it('should render the type button', () => {
    const handleLogOut = () => {};
    render(
      <BrowserRouter>
        <NavItem link="/" handleLogOut={handleLogOut}>
          Test button
        </NavItem>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should not be a link', () => {
    const handleLogOut = () => {};
    render(
      <BrowserRouter>
        <NavItem link="/" handleLogOut={handleLogOut}>
          Test button
        </NavItem>
      </BrowserRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('src');
  });
});
