/// <reference types="Cypress" />

context.skip("Task 1.5", () => {
	before(() => {
		cy.visit("https://parabank.parasoft.com/parabank/contact.htm")
	});

	specify("Task 1.5 - Test customer care", () => {
		// Fill form
		cy.get("#name").type("Vestia Zeta");
		cy.get("#email").type("giguvosnar@vivaldi.net");
		cy.get("#phone").type("98091984");
		cy.get("#message").type("Have you heard of the critically acclaimed MMORPG Final Fantasy XIV?");

		// Click submit button
		cy.get(".button[value=\"Send to Customer Care\"]").click();

		// Expected result
		cy.contains("Thank you");
	});
});

context("Task 2.2", () => {
	const username = "VestiaZetaMyBeloved";
	const password = "VestiaZetaMyBeloved";

	beforeEach(() => {
		cy.visit("https://parabank.parasoft.com/parabank/index.htm");

		// Fill login form
		cy.get(".input[name=\"username\"]").type(username);
		cy.get(".input[name=\"passwor\"]").type(password);

		// Log in
		cy.get(".button[value=\"Log In\"]").click();
	});

	afterEach(() => {
		cy.get("a[href=\"/parabank/logout.htm\"]").click();
	});

	specify("Task 2.2.1 - ", () => {

	});

	specify("Test 2.2.2 - ", () => {

	});

	specify("Test 2.2.3 - ", () => {

	});
});
