import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
import { ListParent } from 'app/Model/ListParent';
import { GestionArticleService } from 'app/Services/gestion-article.service';

@Component({
  selector: 'app-gestion-commande-article',
  templateUrl: './gestion-commande-article.component.html',
  styleUrls: ['./gestion-commande-article.component.css']
})
export class GestionCommandeArticleComponent implements OnInit {

  listeArticle;
  listeArticles:Article[];
  P:number=1;
  Envoyer:number;
  listphoto;
  listeCatalogues;
  listParent:ListParent[];
  listenomParent=[];
  index:number;
  listeRetour=[];
  PrixUnitaire;
  Quantite:number=1;
  Nombre;
  commande;
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllPhoto().subscribe(data=>{
      this.listeArticle=data;
      this.listeArticle=this.listeArticle.catalogues;
      console.log(this.listeArticle[3].nomPhoto)
    
    });
    this.Article.getAllCatalogue().subscribe(data=>{
     this.listeCatalogues=data;
     this.listeCatalogues=this.listeCatalogues.catalogues;
    });

    this.Article.getAllArticle().subscribe(data=>{
      this.commande=data;
      this.commande=this.commande.articles;
      this.PrixUnitaire=this.commande.articles;
    })
    this.Envoyer=0;
   this.commande=0;
  }
   

  envoyer(nom)
  {
   this.Envoyer=nom;
   this.listeRetour.push(nom)
   console.log(this.listeRetour)
   
  }
  QArticle(event:any,CO)
  {
   this.Quantite=event.target.value;
   this.Nombre=CO;
  
  }
  Retour()
  {
    if(this.listeRetour.length<1)
    {
    this.Envoyer=0;
    }
    else{
      this.listeRetour;
     this.index=this.listeRetour[this.listeRetour.length-1];
     this.Envoyer=this.index;
     this.listeRetour.pop();
     console.log(this.listeRetour)
    }
  }
  commander()
  {
  this.commande=1;
  console.log(this.commande)
  }
 

}
