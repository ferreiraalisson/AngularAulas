
import { Subject, takeUntil } from 'rxjs';
import { EmpresaService } from './../../services/empresa.service';
import { Component, OnDestroy, OnInit } from '@angular/core'; // representará uma determinada parte do projeto
import { EmpresaResponse } from '../../models/Interfaces/EmpresaResponse';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({ //receita para o bolo, onde indica os detalhes
  selector: 'app-empresa', //referencia para o html
  standalone: true, // Isso significa que a nossa parte do projeto pode funcionar sozinha, sem precisar de outras partes.
  imports: [RouterOutlet, RouterModule], // importando biblioteca Router
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit, OnDestroy {
    // declarando - definindo o tipo   e insantanciando a variavel
  private readonly destroy$:Subject<void>= new Subject();

  empresasResponse! : EmpresaResponse[]; //variável que armazena o valor de todas as empresas
  empresaResponse! : EmpresaResponse; // variável que armazena o valor de uma empresa

                     //instanciando no typescript - privacidade objeto: classe
  constructor(private empresaService: EmpresaService){} // método que serve para ser chamado quando instancia a classe

  ngOnInit(): void {
    this.getEmpresa();
   // this.getEmpresaPorId(20);
  }

  //método que faz a extração e chamada do servido
  getEmpresa():void{   // getEmpresas() é puxado lá do service.ts - subscribe dentro das chaves passar os parametros
    this.empresaService.getEmpresas().pipe(takeUntil(this.destroy$)).subscribe({ //pipe é responsável por criar um tubo para a conexão
      next: (response)=> {
        response && (this.empresasResponse = response)
        console.log(this.empresasResponse);
      }, //mapear o erro
        error: (error)=> console.log(error),
    });
  }

  getEmpresaPorId(id: number):void {
    this.empresaService.getEmpresaPorId(id).pipe(takeUntil(this.destroy$)).subscribe({ //.subscribe vai ser como um ponto de comunicação com o service component
      next: (response)=> { // quero pegar o resultado
        response && (this.empresaResponse = response)
        console.log(this.empresaResponse);
      }, //mapear o erro
        error: (error)=> console.log(error),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); //next é para realizar a chamada (chama o que você tem!)
    this.destroy$.complete()
  }
}
