/// <reference types="Cypress" />

context.skip("Task 1.5 - Automated Testing of Customer Care", () => {
	before(() => {
		cy.visit("https://parabank.parasoft.com/parabank/contact.htm")
	});

	specify("Task 1.5 - Test customer care", () => {
		cy.get("#name").type("Vestia Zeta");
		cy.get("#email").type("giguvosnar@vivaldi.net");
		cy.get("#phone").type("98091984");
		cy.get("#message").type("Have you heard of the critically acclaimed MMORPG Final Fantasy XIV?");

		cy.get(".button[value=\"Send to Customer Care\"]").click();
		cy.contains("Thank you");
	});
});

context("Task 2.5 - Automated Testing of Website", () => {
	const username = "VestiaZetaMyBeloved";
	const password = "VestiaZetaMyBeloved";

	beforeEach(() => {
		cy.visit("https://parabank.parasoft.com/parabank/index.htm");

		cy.get(".input[name=\"username\"]").type(username);
		cy.get(".input[name=\"password\"]").type(password);

		cy.get(".button[value=\"Log In\"]").click();
	});

	afterEach(() => {
		cy.get("a[href=\"/parabank/logout.htm\"]").click();
	});

	specify("Test 2.5.1 - Open New Account", () => {
		cy.get("a[href=\"/parabank/openaccount.htm\"]").click();

		cy.wait(1000);

		cy.get("#type").select(1);
		cy.get("#fromAccountId").select(0);

		cy.get(".button[value=\"Open New Account\"]").click();

		cy.contains("Account Opened!");
	});

	specify("Task 2.5.2 - Transfer Funds", () => {
		cy.get("a[href=\"/parabank/transfer.htm\"]").click();

		cy.wait(1000);

		cy.get("#amount").type("69");
		cy.get("#fromAccountId").select(0);
		cy.get("#toAccountId").select(1);

		cy.get(".button[value=\"Transfer\"]").click();

		cy.contains("Transfer Complete!");
	});

	specify("Test 2.5.3 - Request Loan", () => {
		cy.get("a[href=\"/parabank/requestloan.htm\"]").click();

		cy.wait(1000);

		cy.get("#amount").type("69");
		cy.get("#downPayment").type("69");
		cy.get("#fromAccountId").select(0);

		cy.get(".button[value=\"Apply Now\"]").click();

		cy.contains("Loan Request Processed");
	});
});
