//import BasePage from "./BasePage";

class PracticeFormPage {
    static get firstName() {
        return cy.get("#firstName")
    }

    static get lastName() {
        return cy.get("#lastName")
    }

    static get email() {
        return cy.get("#userEmail")
    }

    static get gender() {
        return cy.get(".custom-control.custom-radio.custom-control-inline")
    }

    static get userNumber() {
        return cy.get("#userNumber")
    }

    static get dateOfBirth() {
        return cy.get("[value='25 Aug 2022']")
    }

    static get subject() {
        return cy.get("#subjectsContainer")
    }

    static get hobbies() {
        return cy.get("[for='hobbies-checkbox-1']")
    }

    static get address() {
        return cy.get("#currentAddress")
    }

    static get state() {
        return cy.get("#state")
    }

    static get city() {
        return cy.get("#city")
    }

    static get submitButton() {
        return cy.get("#submit")
    }

    static get responseTableRow1() {
        //identifice pirmo rindu
        return cy.get(".table> tbody > tr:nth-child(1)")
    }

    // static get responseTableRow2() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(2)")
    // }

    // static get responseTableRow3() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(3)")
    // }

    // static get responseTableRow4() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(4)")
    // }

    // static get responseTableRow5() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(5)")
    // }

    // static get responseTableRow6() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(6)")
    // }

    // static get responseTableRow7() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(7)")
    // }

    // static get responseTableRow9() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(9)")
    // }

    // static get responseTableRow10() {
    //     //identifice pirmo rindu
    //     return cy.get(".table> tbody > tr:nth-child(10)")
    // }

    
 }

export default PracticeFormPage;