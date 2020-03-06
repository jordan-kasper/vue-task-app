const TODO_ITEM_ONE = 'Learn some Vue JS';
const TODO_ITEM_TWO = 'Create tests with cypress.io';
const TODO_ITEM_THREE = 'Apply applitools visual testing';

const LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

describe('Todo App Test Suite', () => {
  // before each test, make sure to visit the home page of the app
  beforeEach(() => {
    cy.restoreLocalStorageCache();
    cy.visit('/'); // "baseUrl" is defined in cypress.json file
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  context('Checking App Exists', () => {
    it('Visits the app root url', () => {
      cy.visit('/');
      cy.contains('h1', 'Vue Todo App');
    });
  });

  context('Add todos', () => {
    it('should allow me to add todo items', () => {
      // create one todo item
      cy.get('[data-cy= "name"]') // grab the input textbox
        .type(TODO_ITEM_ONE); // type the title of the todo

      cy.get('[data-cy= "priority"]') // grab the input textbox
        .select('1'); // type the title of the todo
      // verify the item was added

      cy.get('[data-cy=submit]').click();

      cy.get('[data-cy= "name"]') // grab the input textbox
        .type(TODO_ITEM_TWO); // type the title of the todo

      cy.get('[data-cy= "priority"]') // grab the input textbox
        .select('2'); // type the title of the todo
      // verify the item was added

      cy.get('[data-cy=submit]').click();

      cy.get('[data-cy= "name"]') // grab the input textbox
        .type(TODO_ITEM_THREE); // type the title of the todo

      cy.get('[data-cy= "priority"]') // grab the input textbox
        .select('3'); // type the title of the todo
      // verify the item was added
      cy.get('[data-cy=submit]').click();
    });
  });
  context('selecting and reordering todos', () => {
    it('reorder todos', () => {
      cy.get('th')
        .eq(2)
        .click();
    });
  });
  context('Selecting and Deleting todos', () => {
    it('Should select the first todo.', () => {
      cy.get('tr>td')
        .eq(0)
        .click();
      cy.get('[data-cy="deleteSelected"]').click();
    });
  });
  context('Deleting All todos', () => {
    it('Should delete all of the items', () => {
      cy.get('[data-cy="deleteAll"]').click();
    });
  });
});
