import 'whatwg-fetch';
import '@testing-library/jest-dom';
import server from './mocks/server';

// Mock api calls
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
