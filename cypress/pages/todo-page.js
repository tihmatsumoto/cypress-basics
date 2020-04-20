/// <reference types="cypress" />

export class TodoPage {
    navigateToSite() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    validateTodoText(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    toggleTodoItem(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    filterTodoStatus(status) {
        cy.contains(status).click()
    }

    clearCompleted() {
        cy.contains('Clear completed').click()
    }

    validateNumberOfTodosShown(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    validateToggleState(todoIndex, shouldBeToggled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
    }

    validateCompletedState(todoIndex, shouldBeCompleted) {
        const box = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        box.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }
}
