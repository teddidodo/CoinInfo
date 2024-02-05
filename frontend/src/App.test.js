// Assuming you're using React Testing Library and Jest
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import NotFound from './pages/NotFound' // Import your NotFound component

describe('Routing', () => {
  it('renders Home component when the path is "/"', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Welcome to the Home Page')).toBeInTheDocument(); // Adjust text based on Home component
    expect(screen.queryByText('404 - Not Found')).not.toBeInTheDocument(); // Make sure NotFound component is not rendered
  });

  it('renders NotFound component for unknown paths', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );

    // Change this assertion based on what your NotFound component renders for unknown paths
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
    expect(screen.queryByText('Welcome to the Home Page')).not.toBeInTheDocument(); // Ensure Home component is not rendered
  });
});
