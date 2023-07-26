import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewUserComponent } from 'src/app/pages/view-user/view-user.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ViewUserComponent }]),
  ],
  exports: [ViewUserComponent],
})
export class ViewUserModule {}
