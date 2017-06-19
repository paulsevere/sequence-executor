import * as a from '../actions/common'
import * as Promise from 'bluebird';
import incidentSteps from './addIncident'


const defaultDriver = {
  firstName: 'Paul',
  lastName: 'Severe',
  birthMonth: 'January',
  birthDay: '01',
  birthYear: '1995',
  licenseAge: '17',
  employmentStatus: 'Yes',
  highestEducationLevel: '4 Year College',
  residenceOwnership: 'Single Family Home Owner',
  socialSecurityNumber: '050-69-3625',
  relationToInsured: 'Son',
  email: 'john.doe@example.com',
  phoneNumber: '6038675309',
  hasIncident: true
}
const { firstName, lastName, relationToInsured, hasIncident, birthMonth, birthDay, birthYear, residenceOwnership, employmentStatus, highestEducationLevel, email, phoneNumber, licenseAge } = defaultDriver;


export default [
  a.switchToDriverTab,
  a.clickAddNewDriver,
  a.enterData("#firstName", firstName),
  a.enterData("#lastName", lastName),
  a.dropDown("monthOfBirth", birthMonth),
  a.enterData("#dayOfBirth", parseInt(birthDay)),
  a.enterData('#yearOfBirth', parseInt(birthYear)),
  a.clickRadioLabel(`relationToNamedInsured${relationToInsured}`),
  a.clickRadioLabel(`maritalStatusMarried`),
  a.clickRadioLabel(`employmentStatus01`),
  a.dropDown('highestEducationLevel', highestEducationLevel),
  a.clickPageButton,
  ...(hasIncident ?
    incidentSteps :
    [a.click('#hasNoIncident'),
    a.click('#noIncident')]
  )
]