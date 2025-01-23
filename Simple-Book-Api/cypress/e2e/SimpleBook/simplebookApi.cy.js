describe("SimpleBook API", () => {
  const baseURL = "https://simple-books-api.glitch.me/";
  let token;
  let id;
  let orderId;
  it("Status", () => {
    cy.request({
      method: "GET",
      url: baseURL + "status",
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("List of books", () => {
    cy.request({
      method: "GET",
      url: baseURL + "books",
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("Get a single book", () => {
    cy.request({
      method: "GET",
      url: baseURL + "books/5",
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("API Authentication", () => {
    cy.request({
      method: "POST",
      url: baseURL + "api-clients/",
      body: {
        clientName: "Postman",
        clientEmail: "vahghfgd@example.com",
      },
      headers: {
        "content-Type": "application/json",
      },
      timeout: 120000,
    }).then((response) => {
      expect(response.status).to.eq(201);
      const res = JSON.parse(JSON.stringify(response.body));
      token = res.accessToken;
      cy.log(token);
    });
  });

  it("Submit an Order", () => {
    cy.request({
      method: "POST",
      url: baseURL + "orders",
      headers: {
        "content-Type": "application/json",
        Authorization: " Bearer " + token,
      },
      body: {
        bookId: 1,
        customerName: "John",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      const res2 = JSON.parse(JSON.stringify(response.body));
      cy.log(res2);
    });
  });

  it("Get an order", () => {
    cy.request({
      method: "GET",
      url: baseURL + "orders",
      headers: {
        "content-Type": "application/json",
        Authorization: " Bearer " + token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const res = JSON.parse(JSON.stringify(response.body));
      id = res[2];
      cy.log(id);
    });
  });

  it('Update an Order', () => {
    cy.request({
        method: "GET",
        url: baseURL + "orders/",
        body: {
         "customerName": "Abhishek Maurya"
        },
        headers: {
          "content-Type": "application/json",
          Authorization: " Bearer " + token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const res4 = JSON.parse(JSON.stringify(response.body));
        id = res4[2];
        cy.log(id);
      });
    
  });

  it('Delete an Order', () => {
    cy.request({
        method: "DELETE",
        url: baseURL + "orders/" + id,
        headers: {
          "content-Type": "application/json",
          Authorization: " Bearer " + token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        
        cy.log(JSON.stringify(response.body));
      });
    
  });
});
