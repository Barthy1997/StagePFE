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
        for (var i = 0; i <100; i++) {
            articles[i] = article.recordset[i];
            console.log(articles[i])
        }
        res.json({
            articles
        })

        
    } catch (error) {
        
    }


})


module.exports=Article;