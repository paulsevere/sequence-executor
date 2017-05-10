import { map } from 'ramda';
import * as Promise from 'bluebird';
import { sequence } from './lib/sequence'
import { remote } from 'webdriverio';


const vehicle = {
  year: '2017',
  make: 'CHEVROLET',
  model: 'BOLT EV',
  trim: 'LT',
  bodyStyle: '4 Door Hatchback',
  purchaseYear: '2016',
  address: '123 Test St',
  mileage: 12000
};


const b = remote({
  desiredCapabilities: { browserName: 'chrome' }
});


const clickPageButton = () => b.element('.pageButton').click();
const clickRadioLabel = (option: string) => () => b.element(`label[for="${option}"]`).click();
const dropDown = (name: string, value: string | number) => () => b.element(`//select[@name='${name}']/option[text()='${value + ''}']`).click();
const enterData = (selector: string, value: string | number) => () => b.setValue(selector, value);



const steps = [
  b.init.bind(b),
  () => b.url('http://localhost:3000/?zipCode=85004'),
  () => b.element('.pageButton'),
  dropDown('year', vehicle.year),
  dropDown('make', vehicle.make),
  dropDown('model', vehicle.model),
  dropDown('fullModelName', vehicle.trim),
  dropDown('bodyStyle', vehicle.bodyStyle),
  clickPageButton,
  dropDown('purchaseYear', vehicle.purchaseYear),
  clickRadioLabel('purchasedNew01'),
  clickRadioLabel('ownership01'),
  clickPageButton,
  clickRadioLabel('primaryUse03'),
  enterData('#annualDistance', vehicle.mileage),
  clickPageButton,
  enterData('#streetAddress', vehicle.address),
  clickPageButton,
  () => b.element('#pageButtonAdditionalDriver').click()
]


sequence(steps).then(console.log).catch(err => console.log(err.message))

