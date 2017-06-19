import * as a from '../actions/common'


const incident = {
  sr22: 'N',
  monthOfIncident: 'June',
  yearOfIncident: '2016',
  incidentType: 'Major Violation (Suspended/Revoked, Fleeing, Manslaughter, etc.)',
  incidentCategory: 'Violation'

}

export default [
  a.click('#hasIncident'),
  a.click('.addincidentimage'),
  a.clickRadioLabel(`financialResponsibilityFilingIndicator${incident.sr22}`),
  a.dropDown('monthOfIncident', incident.monthOfIncident),
  a.dropDown('yearOfIncident', incident.yearOfIncident),
  a.dropdownSelectGroup('incidentType', incident.incidentCategory, incident.incidentType),
  a.click('a.fill-orange'),
  a.clickPageButton
]