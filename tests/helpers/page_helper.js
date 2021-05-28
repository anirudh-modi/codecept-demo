const Helper = require('@codeceptjs/helper');

class PageHelper extends Helper {
    performSetup(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            },n);
        });
    }

}
module.exports = PageHelper;
