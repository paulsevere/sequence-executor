import { map } from 'ramda';
import * as Promise from 'bluebird';
import { sequence } from './lib/sequence'
import { dropDown, clickPageButton, waitForPageButton, goToUrl, init, clickRadioLabel, enterData, clickAdditionalDriver, browser } from './actions/common'



export default [
  init,
  () => browser.url('https://www.jsbin.com'),
  () => browser.windowHandleSize({ width: 1500, height: 1000 }),

  () => browser.element('#createnew').click(),
  () => browser.pause(1000),
  () => browser.element("#panels > a:nth-child(3)").click(),
  () => browser.element('//*[@id="panels"]/a[4]').click(),

  () => browser.element('//*[@id="source"]/div[5]/div/div[2]/div/div[6]/div[1]/div/div/div/div[5]/div/pre').click(),
  () => browser.keys("console.log('Wow its so coool')"),
  () => browser.element('#runwithalerts').click(),
]
// sequence()








// import vehicleSteps from './sequences/addVehicle'
// import driverSteps from './sequences/addDriver'
// import additionalDriverSteps from './sequences/addAdditionalDriver'
// import incidentSteps from './sequences/addIncident'
// import discountSteps from './sequences/addDiscounts'
// sequence([...vehicleSteps, ...driverSteps, ...additionalDriverSteps]).then(console.log).catch(err => console.log(err.message))
