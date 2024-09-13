import { Component } from '@angular/core'; // biblioteca
import { RouterOutlet } from '@angular/router';
import { EmpresaComponent } from "./components/empresa/empresa.component";

@Component({ //anotação - chamada funcionalidade de uma biblioteca
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpresaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { //instrução
  title = 'projeto1'; // Nome que fica na guia
}
