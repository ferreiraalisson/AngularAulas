import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaResponse } from '../models/Interfaces/EmpresaResponse';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {
  // construindo o método, dentro do construtor declaramos a variável - injetando um objeto de uma classe
  constructor(private http : HttpClient) {}
   // métodos que farão a comunicação
    getEmpresas(): Observable<EmpresaResponse[]>{ // Observable precisará importar - será uma assinatura para acompanhar o <any> é o tipo do método, que permite aceitar qualquer coisa
      return this.http.get<EmpresaResponse[]>(`http://academico3.rj.senac.br/empresa`, {}); // conexão - terá o endereço do backend (sweg) e o backpoint
    }
                                          //EmpresaResponse vem do models e assume o papel do any
    getEmpresaPorId(id: number): Observable<EmpresaResponse>{ // observable irá fazer um ponto de comunicação com o arquivo.ts correspondente ao componente criado. Nele precisaremos criar uma função e ter o .subscribe()
      return this.http.get<EmpresaResponse>(`http://academico3.rj.senac.br/empresa/${id}`, {}
      );
    }

}
