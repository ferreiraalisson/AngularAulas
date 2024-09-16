import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// CONFIGURAÇÃO DA APLICAÇÃO
// export: Torna appConfig disponível para ser importado e usado em outros arquivos.
export const appConfig: ApplicationConfig = { // ApplicationConfig: Tipo que define a estrutura esperada para a configuração da aplicação.
  // provedores são usados para fornecer serviços e funcionalidades à aplicação Angular.
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), // Configura a detecção de mudanças com otimizações de desempenho.
              provideRouter(routes), // provedor que configura o roteamento da aplicação. Ele é responsável por associar as rotas definidas (no array routes) aos componentes correspondentes.
              provideClientHydration()] // Melhora a performance e a experiência do usuário ao carregar a aplicação.
};
