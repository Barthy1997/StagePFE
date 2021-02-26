const express = require('express');
const AuthRoute = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs')
var jwt = require("jsonwebtoken");
let jwt_secret = "hdhzfghzhgszghsbgshh5262626626JDHSG";
let code;
let token;



AuthRoute.route('/inscriptionCommercial').post(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        let salt = brypt.genSaltSync(10)
        let hash = brypt.hashSync(req.body.password, salt)
        const commercial = await sql.query("INSERT INTO UserCommercial VALUES('" + req.body.nom + "','" + req.body.codecommercial+ "','" + req.body.profil + "','" + req.body.Camionnette + "','" + hash + "')");
        res.json(commercial)
    } catch (error) {
        console.log('erreur')
        
    }
});


AuthRoute.route('/inscriptionClient').post(async(req, res) => {
    try {
        const reponse = await sql.connect(config);
        const client = await sql.query("INSERT INTO UserClient VALUES('" + req.body.nom + "','"  + req.body.codeclient + "','" + req.body.codecommercial + "','" + req.body.adresse + "','" + req.body.Zone + "','" + req.body.Szone + "','" + req.body.jourvisite + "','" + req.body.Gps + "')");
        res.json(client)
        console.log(client)
    } catch {
        console.log('Erreur')

    }

});


AuthRoute.route('/login').post(async (req, res) => {

    try {
        const reponse = await sql.connect(config);
        const request = await sql.query("SELECT password From UserClient where nom='" + req.body.Username + "'");
        for (var i = 0; i < request.rowsAffected; i++) {
            code = brypt.compareSync(req.body.password, request.recordset[i].password);
            if (code===true) {
                code = true;
            }
            else {
                code = false;
            }
        }
        if (code===true) {
            const user = req.body.Username;
            token = await jwt.sign({
                user
            }, jwt_secret, {
                expiresIn: '2h'
            });
            res.json(token);
            console.log('Envoi token')
        }
        else {
            res.json(err)
            console.log('Erreurs', code)
        }

    } catch (error) {
        console.log('Erreur')

    }
})


AuthRoute.route('/authorisation').post(async (req, res) => {
    const header = res.header('x-token', token)
    console.log('bonjour',req.headers['authorization']);
    console.log(res.header('x-token'))
    jwt.verify(header, token, (err, token) => {
        if (err) {
            res.sendStatus(403)
            console.log('erreur authentification')
        }
        else {
            res.json(token)
            console.log('succès')
        }
    })


})
module.exports = AuthRoute;


