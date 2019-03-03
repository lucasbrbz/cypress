describe("Endpoint Health Status",() => {
    it('health status should be true',() => {
        cy
            .request({
                method: 'POST',
                url: 'https://projetosails.auth0.com/oauth/token',
                headers: { 'content-type': 'application/json' },
                body: {"client_id":"XONw0GvXaGIHNij6erFuexNMD11H2jEw","client_secret":"Yh7F0IWQxBFVbJLnB79ecDXtHzTVInDUKHv_jfP0y8XjR9f3VsNHjX3ghuGhtN69","audience":"https://projeto/api","grant_type":"client_credentials"}
            })
            .then((response) => {
                var requestHealth = cy.request({
                    url: "localhost:1337/v1/health",
                    auth: {"bearer": response.body.access_token}
                })
                requestHealth.its('body.health').should('be.eql',true)
            })
    })
})