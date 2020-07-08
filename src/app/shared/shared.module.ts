import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponencialPipe } from './Pipes/exponential/exponencial.pipe';
import { HighlightDirective } from './Directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,

  ],
  exports: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
