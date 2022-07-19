import { lazy, Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './theme';

const CharactersPage = lazy(() => import('./pages/characters-page'));
const CharactersLayout = lazy(() => import('./pages/characters-layout'));
const CharacterDetailPage = lazy(() => import('./pages/character-detail-page'));

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Suspense>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<CharactersLayout />}>
                <Route
                  index
                  element={<CharactersPage />}
                />

                <Route
                  path=":id"
                  element={<CharacterDetailPage />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
