import BasePage from "../pageObjects/BasePage"
import PracticeFormPage from "../pageObjects/PracticeFormPage"
import SortableListPage from "../pageObjects/SortableListPage"

describe('empty spec', () => {
  it('Scenario 1', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    PracticeFormPage.firstName.type("Kristaps");
    PracticeFormPage.lastName.type("Klava");
    PracticeFormPage.email.type("test@test.lv");
    PracticeFormPage.gender.contains("Male").click();
    PracticeFormPage.userNumber.type("0123456789");
    PracticeFormPage.dateOfBirth.click();
    const setMonth = "February";
    const setYear = "1984";
    const setDate = "29";
    PracticeFormPage.dateOfBirth.type("{selectall}").type(setDate+" "+setMonth+" "+setYear+"{enter}");
    PracticeFormPage.subject.type("Math"+"{enter}");
    PracticeFormPage.hobbies.click();
    PracticeFormPage.address.type("Brivibas iela");
    PracticeFormPage.state.type("NCR"+"{enter}");
    PracticeFormPage.city.type("Delhi"+"{enter}");
    PracticeFormPage.submitButton.click();
    PracticeFormPage.responseTableRow1.each(($elm, index, $list) => {
      const t = $elm.text();
      if (t.includes('Student Name')){
        PracticeFormPage.responseTableRow1.eq(index).next().then(function(d) {
          const r= d.text()
          expect(r).to.contains('Student Email')
        })
      }
  })//should("contain.text", "Kristaps Klava");
    // PracticeFormPage.responseTableRow2.should("contain.text", "test@test.lv");
    // PracticeFormPage.responseTableRow3.should("contain.text", "Male");
    // PracticeFormPage.responseTableRow4.should("contain.text", "0123456789");
    // PracticeFormPage.responseTableRow5.should("contain.text", "29 February,1984");
    // PracticeFormPage.responseTableRow6.should("contain.text", "Maths");
    // PracticeFormPage.responseTableRow7.should("contain.text", "Sports");
    // PracticeFormPage.responseTableRow9.should
  });

})

describe('empty spec 2', () => {
  it.only('Scenario 2', () => {
    cy.visit('https://demoqa.com/sortable');
    
  })
})
