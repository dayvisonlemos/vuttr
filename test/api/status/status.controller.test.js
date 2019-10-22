describe('Status Controller', () => {
  it('should return status ok when call get /status', async () => {
    const result = await request.get('/status');
    expect(result.ok).toBeTruthy();
    expect(result.text).toEqual('ok');
  });
});
