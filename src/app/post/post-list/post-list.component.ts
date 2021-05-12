import { Observable } from 'rxjs';
import { getposts } from './../state/post.selectors';
import { AppState } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../state/post.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select(getposts);
  }

}
