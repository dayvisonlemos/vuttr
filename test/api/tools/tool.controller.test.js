describe('Tools Controller', () => {
  it('should save a tool', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
    };
    const { body, created } = await request.post('/rest/tools')
      .send(payload);

    expect(created).toBeTruthy();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('title', 'Notion');
    expect(body).toHaveProperty('link', 'https://notion.so');
    expect(body).toHaveProperty('description', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.');
    expect(body.id).not.toBeNull();
  });
});
