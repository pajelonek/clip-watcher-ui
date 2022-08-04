import { render, screen } from '@testing-library/react';
import App from './App';

test('should render app', () => {
  render(<App />);
  const linkElement = screen.getByTestId("app-container");
  expect(linkElement).toBeInTheDocument();
});
