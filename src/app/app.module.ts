import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ContainerComponent } from './components/container/container.component';
import { TempdisplayComponent } from './components/tempdisplay/tempdisplay.component';
import { WeatherdisplayComponent } from './components/weatherdisplay/weatherdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContainerComponent,
    TempdisplayComponent,
    WeatherdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
