describe('Tools Controller', () => {
  it('should save a tool', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [
        'api',
        'json',
        'schema',
        'node',
        'github',
        'rest',
      ],
    };

    const { body, created } = await request.post('/rest/tools')
      .send(payload);

    expect(created).toBeTruthy();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('title', 'Notion');
    expect(body).toHaveProperty('link', 'https://notion.so');
    expect(body).toHaveProperty('description', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.');
    expect(body.id).not.toBeNull();
    expect(body.tags).toEqual(payload.tags);
  });
  it('should return badRequest for null title', async () => {
    const payload = {
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [
        'api',
        'json',
      ],
    };

    const { body, badRequest } = await request.post('/rest/tools')
      .send(payload);

    expect(badRequest).toBeTruthy();
    expect(body).toHaveProperty('message', 'Title is required');
  });
  it('should return badRequest for null link', async () => {
    const payload = {
      title: 'Notion',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [
        'api',
        'json',
      ],
    };

    const { body, badRequest } = await request.post('/rest/tools')
      .send(payload);

    expect(badRequest).toBeTruthy();
    expect(body).toHaveProperty('message', 'Link is required');
  });
  it('should return badRequest for null description', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      tags: [
        'api',
        'json',
      ],
    };

    const { body, badRequest } = await request.post('/rest/tools')
      .send(payload);

    expect(badRequest).toBeTruthy();
    expect(body).toHaveProperty('message', 'Description is required');
  });
  it('should return badRequest for null tags', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
    };

    const { body, badRequest } = await request.post('/rest/tools')
      .send(payload);

    expect(badRequest).toBeTruthy();
    expect(body).toHaveProperty('message', 'Tags is required and cannot be null');
  });
  it('should return badRequest for empty tags', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [],
    };

    const { body, badRequest } = await request.post('/rest/tools')
      .send(payload);

    expect(badRequest).toBeTruthy();
    expect(body).toHaveProperty('message', 'Tags is required and cannot be null');
  });
  it('should remove duplicated tags and save a tool', async () => {
    const payload = {
      title: 'Notion',
      link: 'https://notion.so',
      description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      tags: [
        'api',
        'json',
        'schema',
        'schema',
        'api',
        'schema',
        'json',
        'json',
      ],
    };

    const { body, created } = await request.post('/rest/tools')
      .send(payload);

    expect(created).toBeTruthy();
    expect(body.tags).toEqual(['api', 'json', 'schema']);
  });
});
