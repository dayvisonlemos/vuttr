const { Tool } = require('../../../src/models');

describe('Tools Controller', () => {
  const datasource = [
    {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
    },
    {
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    },
    {
      title: 'fastify',
      link: 'https://www.fastify.io/',
      description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
      tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
    },
  ];
  beforeEach(async () => {
    const [p1, p2, p3] = datasource;
    await request.post('/tools').send(p1);
    await request.post('/tools').send(p2);
    await request.post('/tools').send(p3);
  });
  afterEach(async () => {
    await Tool.destroy({ where: {} });
  });
  describe('Find', () => {
    it('should return list result', async () => {
      const { body } = await request.get('/tools');

      const notion = body.find(tool => tool.title === 'Notion');
      const jsonServer = body.find(tool => tool.title === 'json-server');
      const fastify = body.find(tool => tool.title === 'fastify');

      expect(body.length).toEqual(3);
      expect(notion).toHaveProperty('id');
      expect(notion).toHaveProperty('link', 'https://notion.so');
      expect(notion).toHaveProperty('description', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.');
      expect(notion.tags.sort()).toEqual(['calendar', 'collaboration', 'organization', 'planning', 'writing']);

      expect(jsonServer).toHaveProperty('id');
      expect(jsonServer).toHaveProperty('link', 'https://github.com/typicode/json-server');
      expect(jsonServer).toHaveProperty('description', 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.');
      expect(jsonServer.tags.sort()).toEqual(['api', 'github', 'json', 'node', 'rest', 'schema']);

      expect(fastify).toHaveProperty('id');
      expect(fastify).toHaveProperty('link', 'https://www.fastify.io/');
      expect(fastify).toHaveProperty('description', 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.');
      expect(fastify.tags.sort()).toEqual(['framework', 'http2', 'https', 'localhost', 'node', 'web']);
    });
    it('should return filtered list result', async () => {
      const { body } = await request.get('/tools?tag=node');

      const jsonServer = body.find(tool => tool.title === 'json-server');
      const fastify = body.find(tool => tool.title === 'fastify');

      expect(body.length).toEqual(2);

      expect(jsonServer).toHaveProperty('id');
      expect(jsonServer).toHaveProperty('link', 'https://github.com/typicode/json-server');
      expect(jsonServer).toHaveProperty('description', 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.');
      expect(jsonServer.tags.sort()).toEqual(['api', 'github', 'json', 'node', 'rest', 'schema']);

      expect(fastify).toHaveProperty('id');
      expect(fastify).toHaveProperty('link', 'https://www.fastify.io/');
      expect(fastify).toHaveProperty('description', 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.');
      expect(fastify.tags.sort()).toEqual(['framework', 'http2', 'https', 'localhost', 'node', 'web']);
    });
  });
  describe.skip('Find By Id', () => {

  });
});
