import { Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { TesteComponent } from './components/teste/teste.component';


export const routes: Routes = [
  {
    path: '',
    component: EmpresaComponent // sempre usar o autocomplete para importar
  },
  { // criando uma nova rota para um novo componente
    path: 'editarEmpresa',
    component: EditarEmpresaComponent // a partir do momento que colocamos aqui ele irá importar
  },
  {
    path: 'teste',
    component: TesteComponent
  }
];
