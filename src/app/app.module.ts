import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LogoTextComponent } from './logo-text/logo-text.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CloudFeaturesComponent } from './cloud-features/cloud-features.component';
import { CloudPlansComponent } from './cloud-plans/cloud-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    LogoTextComponent,
    OurServicesComponent,
    CloudFeaturesComponent,
    CloudPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
