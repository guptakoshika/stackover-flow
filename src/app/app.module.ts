import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { EditorComponent } from './component/editor/editor.component';
import { FooterComponent } from './component/footer/footer.component';
import { YourAnswerComponent } from './component/your-answer/your-answer.component';
import { DescriptionAndAnswerComponent } from './component/description-and-answer/description-and-answer.component';
import { CommentComponent } from './component/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    EditorComponent,
    FooterComponent,
    YourAnswerComponent,
    DescriptionAndAnswerComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
