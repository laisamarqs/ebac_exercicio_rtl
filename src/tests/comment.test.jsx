const puppeteer = require('puppeteer');

describe('Inserção de Comentários', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Deve ser capaz de inserir dois comentários', async () => {
    await page.goto('');

    const commentInput = await page.$('[data-testid="comment-input"]');
    await commentInput.type('I understand nothing. — Michael Scott');
    const submitButton = await page.$('[data-testid="submit-button"]');
    await submitButton.click();

    const comment1 = await page.$eval('[role="comment"]', (element) => element.textContent);
    expect(comment1).toContain('I understand nothing. — Michael Scott');

    await commentInput.type('I stopped caring a long time ago. - Creed Bratton');
    await submitButton.click();

    const comment2 = await page.$eval('[role="comment"]:nth-of-type(2)', (element) => element.textContent);
    expect(comment2).toContain('I stopped caring a long time ago. - Creed Bratton');
  });
});
