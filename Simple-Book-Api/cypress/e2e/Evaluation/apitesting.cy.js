describe('Login user and get tokens', () => {
   
    it('Get token', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/users',
            body: {
              "username": "emilfghhjys",
              "password": "emilyspass",
              "expiresInMins": 30
            },
            header:{
                'content-Type':'application/json'
            },
            timeout:120000,
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            // const res = JSON.parse(JSON.stringify(response.body));
            // token = res.accessToken;
            // cy.log(token);
          });
    });
    
    //Get All product
    it('Get All Product', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    it('Get a single product', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products/1',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });
    it('Search products', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products/search?q=phone',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    it('Limit and skip products', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products?limit=10&skip=10&select=title,price',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    it('Sort products', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products?sortBy=title&order=asc',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    it('Get all products categories', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products/categories',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    
    it('Get products category list', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products/category-list',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });


    
    it('Get products by a category', () => {
        cy.request({
            method:'GET',
            url:'https://dummyjson.com/products/category/smartphones',
        
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

    
    it('Add a new product', () => {
        cy.request({
            method:'POST',
            url:'https://dummyjson.com/products/add',
          
            body: JSON.stringify({
                title: 'BMW Pencil',
                /* other product data */
              }),
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(JSON.stringify(response.body));
            
          });
    });


     
    it('Update a product', () => {
        cy.request({
            method:'PUT',
            url:'https://dummyjson.com/products/1',
          
            body: JSON.stringify({
             title: 'iPhone Galaxy +1'
              }),
            header:{
                'content-Type':'application/json'
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });

     
    it('Delete a product', () => {
        cy.request({
            method:'DELETE',
            url:'https://dummyjson.com/products/1',
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
          });
    });


});