const { sequence } = require("../dist/lib/sequence");
const steps = require("../dist/index");
const {
  dropDown,
  clickPageButton,
  waitForPageButton,
  goToUrl,
  init,
  clickRadioLabel,
  enterData,
  clickAdditionalDriver,
  browser
} = require("../dist/actions/common");

describe("a selenium test", function() {
  beforeEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  it(
    "works",
    function(done) {
      sequence([
        init,
        () => browser.url("https://www.jsbin.com"),
        () => browser.windowHandleSize({ width: 1500, height: 1000 }),

        () => browser.element("#createnew").click(),
        () => browser.pause(1000),
        () => browser.element("#panels > a:nth-child(3)").click(),
        () => browser.element('//*[@id="panels"]/a[4]').click(),

        () =>
          browser
            .element(
              '//*[@id="source"]/div[5]/div/div[2]/div/div[6]/div[1]/div/div/div/div[5]/div/pre'
            )
            .click(),
        () => browser.keys("console.log('Wow its so coool')"),
        () => browser.element("#runwithalerts").click()
      ]).then(() => {
        expect(true).toBe(true);
        done();
      });
    },
    10000
  );
});

describe("a normal async stest", function() {
  it("wait for it", function(done) {
    setTimeout(() => {
      done();
    }, 100000);
  });
});
