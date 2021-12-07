describe('check table sort', function () {
    before ('login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(15000);  
    })

    function waitForSort(selector, timeout) {
        return browser.waitUntil(
            async () => await $(selector).isDisplayed(),
            {
                timeout: timeout,
                timeoutMsg: `Wrong sorting`
            });
    }
    function sortAscFn(a, b) {
        return a - b;
    }
    function sortDescFn(a, b) {
        return b - a;
    }
    it('Ascending sort ID column', async function () {
        await $('//div[@tabulator-field="id" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="asc"]', 4000);
        const listOfItems = await $$('//div[@tabulator-field="id" and @role="gridcell"]'); 
        const actualItemsPromise = listOfItems.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(actualItemsPromise);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortAscFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });  
    it('Descending sort ID column', async function () {
        await $('//div[@tabulator-field="id" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="desc"]', 4000);
        const listOfItems = await $$('//div[@tabulator-field="id" and @role="gridcell"]');
        const actualItemsPromise = listOfItems.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(actualItemsPromise);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortDescFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });
    it('Ascending sort Name column', async function () {
        await $('//div[@tabulator-field="name" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="asc"]', 4000);
        const listOfItems = await $$('//div[@tabulator-field="name" and @role="gridcell"]'); 
        const actualItemsPromise = listOfItems.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(actualItemsPromise);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortAscFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });  
    it('Descending sort Name column', async function () {
        await $('//div[@tabulator-field="name" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="desc"]', 4000);
        const listOfItems = await $$('//div[@tabulator-field="name" and @role="gridcell"]');
        const actualItemsPromise = listOfItems.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(actualItemsPromise);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortDescFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });
    it('Ascending sort Age column', async function () {
        await $('//div[@tabulator-field="age" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="asc"]', 4000);
        const listOfItems = await $$('//div[@tabulator-field="age" and @role="gridcell"]');
        const actualItemsPromise = listOfItems.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(actualItemsPromise);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortAscFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });
    it('Descending sort Age column', async function () {
        await $('//div[@tabulator-field="age" and @role="columnheader"]').click();
        await waitForSort('//div[@aria-sort="desc"]', 4000);
        const itemsList = await $$('//div[@tabulator-field="age" and @role="gridcell"]');
        const sortedItemsList = itemsList.map(async (item) => {
        return await item.getText();
        });
        const items = await Promise.all(sortedItemsList);
        const actualItemsStringArray = items.map((item) => {
        return + item;
        });
        const sortedArray = Array.from(actualItemsStringArray).sort(sortDescFn);
        await expect(actualItemsStringArray).toEqual(sortedArray);
    });
}); 