/// <reference types="Cypress" />

context.skip("Task 1.5 - Automated Testing of Customer Care", () => {
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

context("Task 2.5 - Automated Testing of Website", () => {
	const username = "VestiaZetaMyBeloved";
	const password = "VestiaZetaMyBeloved";

	beforeEach(() => {
		cy.visit("https://parabank.parasoft.com/parabank/index.htm");

		// Fill login form
		cy.get(".input[name=\"username\"]").type(username);
		cy.get(".input[name=\"password\"]").type(password);

		// Log in
		cy.get(".button[value=\"Log In\"]").click();
	});

	afterEach(() => {
		cy.get("a[href=\"/parabank/logout.htm\"]").click();
	});

	specify.skip("Test 2.5.1 - Open New Account", () => {
		// Navifate to Open New Account Page
		cy.get("a[href=\"/parabank/openaccount.htm\"]").click();

		// Select account type
		cy.get("#type").select(1);

		// Select existing account
		cy.get("#fromAccountId").select(1);

		// Open New Account
		cy.get(".button[value=\"Open New Account\"]").click();

		// Expected Result
		cy.contains("Congratulations, your account is now open.");
	});

	specify("Task 2.5.2 - ", () => {
	});

	specify.skip("Test 2.5.3 - ", () => {

	});
});
