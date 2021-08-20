import { Component, OnInit } from '@angular/core';
import { RecuperarPostsService } from '../services/recuperar-posts.service';


@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.scss']
})
export class ListaPostsComponent implements OnInit {

  posts = [{id: 1, title: "Post de prueba numero 1"}, {id:2, title: "Post de prueba numero 2"}]

  constructor(
    private recuperarPostsService: RecuperarPostsService
  ) { }

  ngOnInit(): void {
    this.recuperarPostsService.recuperarPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
