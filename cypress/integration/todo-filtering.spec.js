/// <reference types="cypress" />

import {TodoPage} from "/Users/marciamatsumoto/Documents/Projects/cypress-testing/cypress/pages/todo-page";

describe('filtering', function() {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigateToSite()
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Finish interview test")
        todoPage.addTodo("Research Cypress API testing")
        todoPage.toggleTodoItem(2)
    })

    it('should filter Active To dos correctly', () => {
        todoPage.filterTodoStatus('Active')
        todoPage.validateNumberOfTodosShown(2)
    })

    it('should filter Completed To dos correctly', () => {
        todoPage.filterTodoStatus('Completed')
        todoPage.validateNumberOfTodosShown(1)
    })

    it('should filter All To dos correctly', () => {
        todoPage.filterTodoStatus('All')
        todoPage.validateNumberOfTodosShown(3)
    })

})