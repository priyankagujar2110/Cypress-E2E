import { before } from "cypress/types/lodash";
import { createAccountPage } from "../../pages/createAccount";
const createAccountobj = new createAccountPage()



const url = Cypress.env('baseurl')

describe('this is describe test' ,()=>{

    before('fixture file ',()=>{
        cy.fixture('example').then((data),()=>{
            this.data = data
        })

    })

    beforeEach('this is beforeEach test', ()=>{
        cy.visit(url)
    })


    it('Create an account test' ,()=>{

        createAccountobj.enterFirstName(this.data.firstName)
        createAccountobj.enterLastName(this.data.lastName)
        createAccountobj.entermobileNumber(this.data.mobileNumber)
        createAccountobj.entermobileNumber(this.data.mobileNumber)
        createAccountobj.clickSignUpButton()



    })


























})