Feature('Github homepage');

BeforeSuite(async ({ I }) => {

    // Will wait for 3000ms and then load
    await I.performSetup(3000);
    I.amOnPage('https://github.com/codeceptjs/ui');
});

Scenario('Homepage', ({ I }) => {
    I.grabAttributeFrom('.author');
});
