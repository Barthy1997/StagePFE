const express = require('express');
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');
const Article=express.Router();

Article.route('/AllArticle').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        const article =await sql.query('Select * From F_ARTICLE');
        const articles = [];
        for (var i = 0; i <article.rowsAffected; i++) {
            articles[i] = article.recordset[i];
          }
        res.json({
            articles
        })
  } catch (error) {
        
    }


})

Article.route('/AllCatalogue').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        const catalogue =await sql.query('Select * From F_CATALOGUE');
        const catalogues = [];
        for (var i = 0; i <catalogue.rowsAffected; i++) {
            catalogues[i] = catalogue.recordset[i];   
            console.log( catalogues[i]) 
        }
        res.json({
            catalogues
        })   
    } catch (error) {
        }
})


module.exports=Article;