/// <reference types="cypress" />

import {TodoPage} from "/Users/marciamatsumoto/Documents/Projects/cypress-testing/cypress/pages/todo-page";

describe('todo actions', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigateToSite()
        todoPage.addTodo("Clean room")
    })
    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room')
        todoPage.validateToggleState(0, false)
    })
    
    it('should mark a todo as completed', () => {
        todoPage.toggleTodoItem(0)
        todoPage.validateCompletedState(0, true)
    })
     
    it('should clear completed todos', () => {
        todoPage.toggleTodoItem(0)
        todoPage.clearCompleted()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})
