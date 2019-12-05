const { Tool } = require('../../../src/models');

describe('Tools Controller', () => {
  const defaultTool = {
    title: 'Notion',
    link: 'https://notion.so',
    description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  };
  beforeEach(async () => {
    const { body: { id } } = await request.post('/tools').send(defaultTool);
    defaultTool.id = id;
  });
  afterEach(async () => {
    await Tool.destroy({ where: {} });
  });
  describe('Delete', () => {
    it('should remove tool and tags', async () => {
      const { noContent } = await request.delete(`/tools/${defaultTool.id}`);
      const result = await Tool.findByPk(defaultTool.id);

      expect(noContent).toBeTruthy();
      expect(result.deleted_at).not.toBeNull();
    });
  });
});
