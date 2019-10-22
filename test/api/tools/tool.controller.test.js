describe('Tools Controller', () => {
  it('should save a tool', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    };
    const result = await request.post('/rest/tools', payload);

    expect(result.created).toBeTruthy();
  });
});
