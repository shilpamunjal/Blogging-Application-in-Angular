import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCard } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardContent } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatChipGrid } from '@angular/material/chips';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { RouterModule} from "@angular/router"; 
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardActions } from '@angular/material/card';
import { provideHttpClient } from '@angular/common/http';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllComponent,
    ViewPostComponent,
    SearchByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatCard,
     MatCardContent,
     MatLabel,
     MatChipGrid,
     ReactiveFormsModule,
     MatFormField,
     MatChipsModule,
     MatCardHeader,
     MatCardTitle,
     MatCardSubtitle,
     MatCardActions
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
