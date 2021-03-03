import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
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
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllArticle().subscribe(data=>{
      this.listeArticle=data;
      this.listeArticle=this.listeArticle.articles;
      console.log(this.listeArticle)
    });
    this.Barthy="barthy";
    console.log("bonjour",this.listeArticle)
  }

  filter()
  {
    this.listeArticles=[ {
      nom:'barthy',
      Code:'1290'},
      {
        nom:'Jeriel',
        Code:'1200'},];

  }
}
