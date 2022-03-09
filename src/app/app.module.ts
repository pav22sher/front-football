//Библиотеки устанавливаются через пакетный менеджер npm
//Имя каждой библиотеки Angular начинается с префикса @angular
import {NgModule} from '@angular/core' //Для создания модуля
import {BrowserModule} from '@angular/platform-browser' //Для работы с браузером
import {FormsModule} from '@angular/forms' //Для работы с формами

//Компоненты
import {AppComponent} from './app.component' //Корневой компонент приложения
import {Lesson1Module} from "./lesson1/lesson1.module";
import {Lesson2Module} from "./lesson2/lesson2.module";
import {Lesson3Module} from "./lesson3/lesson3.module";
import {Lesson4Module} from "./lesson4/lesson4.module";
import {Lesson5Module} from "./lesson5/lesson5.module";
import {Lesson6Module} from "./lesson6/lesson6.module";
import {Lesson7Module} from "./lesson7/lesson7.module";

//Декоратор @NgModule с методанными
@NgModule({
  //корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent],
  //классы представлений, которые принадлежат модулю
  declarations: [
    AppComponent
  ],
  //классы которые необходимы для представлений текущего модуля
  imports: [
    BrowserModule,
    FormsModule,
    Lesson1Module,
    Lesson2Module,
    Lesson3Module,
    Lesson4Module,
    Lesson5Module,
    Lesson6Module,
    Lesson7Module,
  ]
})
export class AppModule {
}
