import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
import { Catalogue } from 'app/Model/Catalogue';
import { GestionArticleService } from 'app/Services/gestion-article.service';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {

  listeArticle;
  Barthy:any;
  listeArticles:Article[];
  P:number=1;
  Envoyer:number;
  famille;
  listeCatalogues;
  somme:number=0;
  
  
constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllArticle().subscribe(data=>{
      this.listeArticle=data;
      this.listeArticle=this.listeArticle.articles;
    });


    this.Article.getAllCatalogue().subscribe(data=>{
      this.listeCatalogues=data;
      this.listeCatalogues=this.listeCatalogues.catalogues;
       console.log(this.listeCatalogues)
    });
    
  }

  envoyer(nom)
  {
   this.famille=nom;
    console.log(this.somme)
      
  }
  
  
}
