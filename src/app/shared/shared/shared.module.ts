import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserCardComponent } from 'src/app/pages/home/components/user-card/user-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent,UserCardComponent],
  imports: [CommonModule,MatCardModule,MatButtonModule],
  exports: [FooterComponent,UserCardComponent],
})
export class SharedModule {}
