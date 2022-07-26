import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleUser,
  faWindowMaximize,
  faFireFlameCurved
} from '@fortawesome/free-solid-svg-icons';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

const components = [ToolbarComponent, DeleteButtonComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatButtonToggleModule,
  RouterModule,
  FontAwesomeModule,
  MatGridListModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGoogle,
      faCircleUser,
      faGithub,
      faWindowMaximize,
      faFireFlameCurved
    );
  }
}
