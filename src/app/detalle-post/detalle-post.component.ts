import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecuperarPostsService } from '../services/recuperar-posts.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.scss']
})
export class DetallePostComponent implements OnInit {

  post: any;
  ultimoComentario: number = 1629488565811;

  constructor(
    private recuperarPostsService: RecuperarPostsService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      
      this.recuperarPostsService.recuperarPost(id).subscribe(data => {
        this.post = data;
      });

    });
  }

  fechaUltimoComentario(fecha:number){
    
    this.ultimoComentario = fecha;
  }

  volver(){
    this.router.navigate(['/']);
  }
}
