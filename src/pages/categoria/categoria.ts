import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  categorias: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public categoriaProvider: CategoriaProvider,
    private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.categoriaProvider.getAll()
    .then((result: any[]) => {
      this.categorias = result;
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
    });
  }

}
