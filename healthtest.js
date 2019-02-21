describe('Endpoint Health Status',() => {
    it('Health status should be true',() => {
        var config_token = {
            url : "https://projetosails.auth0.com/oauth/token",
            method : "POST",
            headers : {"content-type" : "application/json"},
            body: {"client_id":"XONw0GvXaGIHNij6erFuexNMD11H2jEw","client_secret":"Yh7F0IWQxBFVbJLnB79ecDXtHzTVInDUKHv_jfP0y8XjR9f3VsNHjX3ghuGhtN69","audience":"https://projeto/api","grant_type":"client_credentials"}
        };
        var req = new XMLHttpRequest();
        req.open('GET',config_token, (response) => {
            response.on("data",(body) => {
                var token = JSON.parse(body);
                var status = cy.request({
                    url: 'localhost:1337/v1/health',
                    auth: {'bearer':token.body.access_token}
                })
                status.its('body.health').should('be.eql',true)
            });
        });
    })
})

/* describe('Endpoint Health Status', () => {                          -- AUTENTICACAO ESTATICA -- 
    it('Health Status should be true', () => {
        var token = cy.request({
            url : "https://projetosails.auth0.com/oauth/token",
            method : "POST",
            headers : {"content-type" : "application/json"},
            body: {"client_id":"XONw0GvXaGIHNij6erFuexNMD11H2jEw","client_secret":"Yh7F0IWQxBFVbJLnB79ecDXtHzTVInDUKHv_jfP0y8XjR9f3VsNHjX3ghuGhtN69","audience":"https://projeto/api","grant_type":"client_credentials"}
        })
        var status = cy.request({
            url: 'localhost:1337/v1/health',
            auth: {'bearer':token.body.access_token}
        })
        status.its('body.health').should('be.eql',true)
    })
}) */