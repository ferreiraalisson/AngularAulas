import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form/form.component';

// Decorador - função para adicionar funcionalidades
@Component({
  // Propriedades
  selector: 'app-root', // O nome da tag HTML que será usada para este componente no arquivo HTML
  standalone: true, // Se ele será dependente ou não, o componente pode funcionar e ser usado sem a necessidade de ser declarado em um módulo  permitindo utilizar diretamente
  imports: [RouterOutlet, FormComponent], // o componente pode funcionar e ser usado sem a necessidade de ser declarado em um módulo
  // RouterOutlet --> define onde as rotas devem ser renderizadas no componente. É usada para exibir componentes de acordo com a rota atual da aplicação.
  // FormComponent --> componente criado
  templateUrl: './app.component.html', // O caminho para o arquivo HTML que define a aparência e o conteúdo do componente
  styleUrl: './app.component.css' // O caminho para o(s) arquivo(s) CSS que define(m) o estilo do componente
})

// Classe do componente
export class AppComponent { // Propriedades e métodos que este componente usará
  title = 'Estudando'; // propriedade utilizada por esse component
}
