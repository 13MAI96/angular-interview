import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  formulario!: FormGroup;
  @Output() ultimoComentario = new EventEmitter<number>();

  comentarios: any[] = [
    {nombre: "Erica", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {nombre: "Javi", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl(""), comentario: [""]
    })
  }

  nuevoComentario(formulario: any){
    this.comentarios.push(formulario);
    console.log(formulario);
    console.log(Date.now());
    this.ultimoComentario.emit(Date.now());
  }

}
