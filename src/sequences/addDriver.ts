import * as Promise from 'bluebird';
import * as a from '../actions/common'
import incidentSteps from './addIncident'


const defaultDriver = {
  firstName: 'John',
  lastName: 'Doe',
  birthMonth: 'January',
  birthDay: '01',
  birthYear: '1980',
  licenseAge: '17',
  employmentStatus: 'No',
  highestEducationLevel: '4 Year College',
  residenceOwnership: 'Single Family Home Owner',
  socialSecurityNumber: '050-69-3625',
  email: 'john.doe@example.com',
  phoneNumber: '6038675309',
  hasIncident: true,
}

const { firstName, hasIncident, lastName, birthMonth, birthDay, birthYear, residenceOwnership, employmentStatus, highestEducationLevel, email, phoneNumber, licenseAge } = defaultDriver;


export default [
  a.waitForVehicleAddedCheck,
  a.switchToDriverTab,
  a.clickAddNewDriver,
  a.enterData("#firstName", firstName),
  a.enterData("#lastName", lastName),
  a.dropDown("monthOfBirth", birthMonth),
  a.enterData("#dayOfBirth", parseInt(birthDay)),
  a.enterData('#yearOfBirth', parseInt(birthYear)),
  a.clickRadioLabel(`genderM`),
  a.clickRadioLabel(`maritalStatusMarried`),
  a.clickRadioLabel(`employmentStatus01`),
  a.dropDown('highestEducationLevel', highestEducationLevel),
  a.dropDown('residenceOwnership', residenceOwnership),
  a.clickPageButton,
  a.isAtUrl('http://localhost:3000/driverStep1'),
  a.clickPageButton,
  a.clickRadioLabel(`currentlyInsured16`),
  a.clickRadioLabel(`hasOtherLibertyMutualPoliciesN`),
  a.clickPageButton,
  ...(hasIncident ?
    [...incidentSteps] :
    [a.click('#hasNoIncident')]
  ),
  a.enterData('#email', email),
  a.enterData('#phoneNumber', phoneNumber),
  a.clickAdditionalDriver,
]