import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    const articleHeader = await Selector('.result-content').find('h1');

    let headerText = await articleHeader.innerText;
    console.log("Header" + headerText)
});

fixture `Authentication tests`
    .page `https://devexpress.github.io/testcafe/`
    .beforeEach(async t => {
        await t.click('.get-started-button');
    });


fixture `Interact With the Page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
        .click(selectBasedOnText);
});

test('Press Key test', async t => {
    await t
        .click('#tried-test-cafe')
        // pressing 'Space' imitates clicking the checkbox again
        .pressKey('space')
});

test('Navigate To URL test', async t => {
    await t
        .navigateTo('https://github.com/DevExpress/testcafe');
});

test('Type Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe');
});

test('Select Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe')
        .selectText('#developer-name')
        .pressKey('delete');
});

test('Drag test', async t => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');

    await t
        .click(triedCheckbox)
        .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 });
});

test('Check property of element', async t => {
    const developerNameInput = Selector('#developer-name');
 
    await t
        .expect(developerNameInput.value).eql('', 'input is empty')
        .typeText(developerNameInput, 'Peter Parker')
        .expect(developerNameInput.value).contains('Peter', 'input contains text "Peter"');
 });

fixture `Example Hover`
    .page `https://js.devexpress.com`;

test('Hover test', async t => {
    await t
        .hover('.map-container');

    await t
    .takeScreenshot()
    .takeElementScreenshot('.map-container');
});