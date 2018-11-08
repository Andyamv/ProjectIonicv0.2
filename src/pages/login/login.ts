import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreacionUsuarioPage } from '../creacion-usuario/creacion-usuario';
import { ContactenosPage } from '../contactenos/contactenos';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  displayName;
  //constructor(public navCtrl: NavController, public navParams: NavParams)
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) 
  {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToPrincipal(){
    this.navCtrl.setRoot(HomePage);
  }
  goToCreacionUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CreacionUsuarioPage);  
  }
  
  goToContact(params){
    if (!params) params = {};
    this.navCtrl.push(ContactenosPage);  
  }
  
  goToConnectFB() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.navCtrl.setRoot(HomePage)
      });
  }
}
