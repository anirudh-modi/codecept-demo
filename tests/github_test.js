Feature('Github homepage');

BeforeSuite(async ({ I }) => {
  // Will wait for 3000ms and then load
  await I.performSetup(3000);
  I.amOnPage('https://github.com/codeceptjs/ui');
});

Scenario('Homepage', ({ I }) => {
  I.wait(1);
  I.grabAttributeFrom('.author');
  I.saveScreenshot('github.png');
  I.see('Codecept');
  I.type('Hello');
});
