import { rest } from 'msw';

const handlers = [
  rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1,
        next: null,
        previous: null,
        results: [
          { name: 'Luke Skywalker', url: 'https://swapi.co/api/people/1/' },
        ],
      }),
    );
  }),
];

export default handlers;
