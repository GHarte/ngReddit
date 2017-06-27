import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Article } from  './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {

  }

  voteUp() {
    this.article.voteUp()
    return false; //Stops browser from trying to follow empty link.
  }

  voteDown() {
    this.article.voteDown()
    return false;
  }

  ngOnInit() {
  }

}
