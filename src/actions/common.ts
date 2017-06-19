import { remote } from 'webdriverio';


const b = remote({
  desiredCapabilities: { browserName: 'chrome' }
});

export const browser = b;
export const init = b.init.bind(b);
export const goToUrl = () => b.url('http://localhost:3000/?zipCode=85004');

export const isAtUrl = (url) => () => new Promise((resolve, reject) => b.getUrl().then((actualUrl) => actualUrl === url ? resolve() : reject()))

export const waitForPageButton = () => b.element('.pageButton');
export const clickPageButton = () => b.element('.pageButton').click();
export const clickRadioLabel = (option: string) => () => b.element(`label[for="${option}"]`).click();
export const dropDown = (name: string, value: string | number) => () =>
  b.element(`//select[@name='${name}']/option[text()='${value + ''}']`).click();

export const dropdownSelectGroup = (name: string, group: string, value: string | number) => () =>
  b.element(`//select[@name='${name}']/optgroup[@label='${group}']/option[text()='${value}']`).click();

export const enterData = (selector: string, value: string | number) => () => b.setValue(selector, value);
export const clickAdditionalDriver = () => b.element('#pageButtonAdditionalDriver').click();


export const waitForVehicleAddedCheck = () => b.element('.icon_completed').click();
export const switchToDriverTab = () => b.element('.icon-driver').click();
export const clickAddNewDriver = () => b.element('.icon[src="img/icon-add-driver.png"]').click();
export const click = (selector: string) => () => b.element(selector).click();

