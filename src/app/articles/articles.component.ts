import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article: Article = {
    title: 'rails authentication',
    summary: 'rails authentication tutorial How to build auth from scretch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quo cupiditate voluptatibus non rerum reprehenderit dolores aspernatur beatae. Accusantium expedita quod eos voluptatem assumenda eveniet fugiat, magni saepe quasi ab!', 
    technology: 'Rails 5, API',
    image: 'http://nafootball.com/uploads/video/picture/86/%D0%9E%D0%91%D0%97%D0%9E%D0%A01-min.jpg'
  }

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
  }


}
