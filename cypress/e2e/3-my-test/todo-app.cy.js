/// <reference types="cypress" />

describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have input field", () => {
    cy.get("#new-todo").should("exist");
  });

  it("should add new elements", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 1);
  });

  it("Show open Todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn html");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn css");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn javascript");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 4);
    cy.get("#todo-list").get("li").contains("learn html").find("input").click();
    cy.get("#todo-list")
      .get("li")
      .contains("learn javascript")
      .find("input")
      .click();
    cy.get("#filter-open").click();
  });

  it("Show done Todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn html");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn css");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn javascript");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 4);
    cy.get("#todo-list").get("li").contains("learn html").find("input").click();
    cy.get("#todo-list")
      .get("li")
      .contains("learn javascript")
      .find("input")
      .click();
    cy.get("#filter-done").click();
  });

  it("Show all Todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn html");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn css");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn javascript");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 4);
    cy.get("#todo-list").get("li").contains("learn html").find("input").click();
    cy.get("#todo-list")
      .get("li")
      .contains("learn javascript")
      .find("input")
      .click();
    cy.get("#filter-done").click();
    cy.get("#filter-all").click();
  });

  it("Delete all Todos", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn html");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn css");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("learn javascript");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").should("have.length", 4);
    cy.get("#todo-list").get("li").contains("learn html").find("input").click();
    cy.get("#todo-list")
      .get("li")
      .contains("learn javascript")
      .find("input")
      .click();
    cy.get("#filter-done").click();
    cy.get("#filter-all").click();
    cy.get("#delete-todos").click();
  });

  it("Blur an element", () => {
    cy.get("#new-todo").as("deg").focus();
    cy.get("@deg").blur();
  });

  it("Uncheck a checkbox", () => {
    cy.get("#new-todo").type("learn cypress");
    cy.get("#add-todo").click();
    cy.get("#todo-list").get("li").find("input").check();
    cy.get("#todo-list").get("li").find("input").uncheck();
  });
});
