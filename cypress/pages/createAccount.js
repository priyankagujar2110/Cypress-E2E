export class createAccountPage {


 webLocatorsobj = {

    firstName: 'input[name="firstname"]',
    lastName: 'input[name="lastname"]',
    mobileNumber: 'input[name="reg_email__"]',
    password: 'input[name="reg_passwd__"]',
    date: '#day',
    month: '#month',
    year: '#year',
    gender:  function (){
        cy.get('#u_0_o_P0').eq(0)
    },


    signUp: '#u_0_s_Oz'


}

enterFirstName(fName){
    cy.get(this.webLocatorsobj.firstName).type(fName)
}

enterLastName(LName){
    cy.get(this.webLocatorsobj.lastName).type(LName)
}

entermobileNumber(Mnumber){
    cy.get(this.webLocatorsobj.lastName).type(Mnumber)
}

enterPassword(password){
    cy.get(this.webLocatorsobj.enterLastName).type(password)
}

selectDate(){
    cy.get(this.webLocatorsobj.date).select(8)
}

selectMonth(){
    cy.get(this.webLocatorsobj.month).select(Oct)
}

selectYear(){
    cy.get(this.webLocatorsobj.year).select(1990)
}


selectGender(){
    cy.get(this.webLocatorsobj.gender).check()
}

clickSignUpButton(){
    cy.get(this.webLocatorsobj.signUp).click()
}


























}