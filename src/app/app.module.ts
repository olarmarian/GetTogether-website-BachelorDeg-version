import { LocalsService } from './local-service/locals.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { SidesectionComponent } from './sidesection/sidesection.component';
import { LocalDetailsComponent } from './local-details/local-details.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatDialogModule,
  MatCheckboxModule,
  MatCardModule,
} from "@angular/material";
import {MatTabsModule} from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { ReactiveFormsModule } from "@angular/forms";
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { LocalsPageComponent } from './locals-page/locals-page.component';
import { MetadataComponent } from './metadata/metadata.component';
import { LocalCardComponent } from './local-card/local-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SectionComponent,
    SidesectionComponent,
    LocalDetailsComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    LogInComponent,
    SignUpComponent,
    ReviewComponent,
    ReviewListComponent,
    LocalsPageComponent,
    MetadataComponent,
    LocalCardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatCarouselModule,
    MatTabsModule,
    SlickCarouselModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      {path : '', component:HomepageComponent},
      {path : 'login', component:LogInComponent},
      {path : 'signup', component:SignUpComponent},
      {path : 'locals/:name', component: LocalDetailsComponent},
      {path : 'locals', component:LocalsPageComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [LocalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }