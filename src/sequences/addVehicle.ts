import { dropDown, clickPageButton, waitForPageButton, goToUrl, init, clickRadioLabel, enterData, clickAdditionalDriver } from '../actions/common'


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



export default [
  init,
  goToUrl,
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
  clickAdditionalDriver
]