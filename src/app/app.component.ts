import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ComparteExperienciaPage } from '../pages/comparte-experiencia/comparte-experiencia';
import { ContactenosPage } from '../pages/contactenos/contactenos';
import { AyudasLegalesPage } from '../pages/ayudas-legales/ayudas-legales';
import { LocalizacionPage } from '../pages/localizacion/localizacion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Casos frecuentes', component: HomePage },
      { title: 'Comparte tu experiencia', component: ComparteExperienciaPage },
      { title: 'Tus ayudas legales', component: AyudasLegalesPage },
      { title: 'Ayuda por localizacion', component: LocalizacionPage },
      { title: 'Contáctenos', component: ContactenosPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
