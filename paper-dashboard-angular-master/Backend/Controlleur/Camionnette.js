const express = require('express');
const Camionnette=express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Camionnette.route('/ajout').post(async(req, res, next) => {
    try {
    const reponse =await sql.connect(config);
        const user =await sql.query("INSERT INTO Camionette VALUES('" + req.body.matrique + "','" + req.body.concessionaire+ "','" + req.body.type+ "')");
        res.json({
            user
        })
    }catch(error)
    {
        console.log('erreur')
    }

});




Camionnette.route('/all').get(async(req, res, next) => {
    try{
    const reponse =await sql.connect(config);
        const user =await sql.query('Select * From Camionette');
        const users = [];
        for (var i = 0; i <user.rowsAffected; i++) {
            users[i] = user.recordset[i];
            console.log(users[i])
        }
        res.json({
            users
        })
    }catch(error)
    {
        console.log('Erreur')
    }

});

module.exports = Camionnette;