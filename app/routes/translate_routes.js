// routes/note_routes.js

const axios = require('axios');
const qs = require('qs');


const base_url = "https://api-free.deepl.com/v2/translate?auth_key=68b0b807-4b8a-48e3-5ba0-fb6cedc97dce:fx"

module.exports = function(app) {
    app.post('/',(req,res) => {
        var data = qs.stringify({
            'text': req.body.text,
           'target_lang': req.body.target_lang 
           });

        var config = {
            method: 'post',
            url: 'https://api-free.deepl.com/v2/translate?auth_key=68b0b807-4b8a-48e3-5ba0-fb6cedc97dce:fx',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
        axios(config).then(function(response){
            res.send(JSON.stringify(response.data))
        }).catch(function (error){
            res.send(error)
        })
    })
    
};