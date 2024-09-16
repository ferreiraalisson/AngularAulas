import { Routes } from '@angular/router';
import { FormComponent } from './form/form/form.component';
import { AppComponent } from './app.component';
// routes nome da variavel cosntante. Routes é um tipo definido para representar a configuração das rotas da aplicação
export const routes: Routes = [
  {
    path: 'form', // define o caminho da URL, o usuário deverá acrescentar isso para ver a página correspondente ao componente
    component: FormComponent //  define o componente que será exibido quando a URL corresponder ao path.
  }
]; // um array de objetos de rota
