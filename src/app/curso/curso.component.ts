import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { IfStmt } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  cursoAtual: string = "";
  
  curso: any ={
    nome: null,
    descricao: null,
    email: null
  }


  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(formulario :NgForm){
    if(formulario.valid){ 
      console.log(formulario);
      console.log('---valores do formulário');
      console.log(formulario.form.value);
      console.log('valor do objeto')
      console.log(this.curso);}
   
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
