import jasmine from "jasmine";

describe('MainTest', () => {
    
    it('async', async() => {
        for (let i=0; i<10; i++) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    for (let j=0; j<100000000; j++) {}
                    resolve(true);
                }, 1);
            }).then(() => {});
        }

    }, 1000);

});