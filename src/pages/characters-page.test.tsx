import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersPage from './characters-page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>{children}</MemoryRouter>
  </QueryClientProvider>
);

describe('CharactersPage', () => {
  it('should display a list of characters', async () => {
    render(<CharactersPage />, { wrapper });

    await waitFor(() => screen.getByRole('list'));

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
