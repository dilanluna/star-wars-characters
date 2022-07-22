import { rest } from 'msw';

const baseUrl = import.meta.env.VITE_API_URL;

const handlers = [
  rest.get(`${baseUrl}/people`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1,
        next: null,
        previous: null,
        results: [{ name: 'Luke Skywalker', url: `${baseUrl}/people/1/` }],
      }),
    );
  }),
];

export default handlers;
