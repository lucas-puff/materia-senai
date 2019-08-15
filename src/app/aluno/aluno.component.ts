import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  AlunoDesenv: string[] = [];
  alunosRedes: string[] = [];
  @Input() curso: string = '';

  constructor() { }

  ngOnInit() {
 
    this.AlunoDesenv = ['pedro', 'josé', 'maria' ]
    this.alunosRedes = ['teobaldo','gertrudez','enesio']
  }

  getAlunos(){
    if(this.curso === 'desenvolvimento'){
      return this.AlunoDesenv;
    }

    if(this.curso === 'redes'){
      return this.alunosRedes;

    }
    return[];
  }
  

}
