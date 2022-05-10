import { render, screen } from '@testing-library/react';
import NavItem from '../../components/NavItem';

describe('Sidebar component', () => {
  it('should render the sidebar', () => {
    render(<NavItem link="/" closeMenu={() => {}} />);
    const links = screen.findAllByRole('link');
    expect(links.length).to.equal(3);
  });
});
