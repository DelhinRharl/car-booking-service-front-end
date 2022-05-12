import { render, screen } from '@testing-library/react';
import FormError from '../../components/FormError';

describe('FormError component', () => {
  it('should render the paragraph', () => {
    render(<FormError>Test error</FormError>);
    const paragraph = screen.getByText('Test error');

    expect(paragraph).toBeInTheDocument();
  });
});
