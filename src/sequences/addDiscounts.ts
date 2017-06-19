import * as Promise from 'bluebird';
import * as a from '../actions/common'
import { browser } from '../actions/common'

const defaultDriver = {
  // firstName: 'John',
  // lastName: 'Doe',
  // birthMonth: 'January',
  // birthDay: '01',
  // birthYear: '1980',
  // licenseAge: '17',
  // employmentStatus: 'No',
  // highestEducationLevel: '4 Year College',
  // residenceOwnership: 'Single Family Home Owner',
  // socialSecurityNumber: '050-69-3625',
  // email: 'john.doe@example.com',
  // phoneNumber: '6038675309',
  // hasIncident: true,
}



export default [
  () => new Promise((resolve, reject) => browser.elements('.icon-complete').then(({ value }) => {
    if (value.length > 1) {
      resolve()
    } else {
      reject("   ")
    }
  })),
  a.click('.icon-discounts')

]