import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoAtual: string = "";

  constructor() { }

  ngOnInit() {
    
  }

 buscaAlunos(curso:string){

  if(curso === 'desenvolvimento'){
    return this.cursoAtual = curso;
  }

  if(curso === 'redes'){
    return this.cursoAtual = curso;

  }
  return this.cursoAtual = "";
 }
  

}
