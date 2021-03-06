import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
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
