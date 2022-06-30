import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Madrugada dos Mortos (2004)',
      lancamento: '23/04/2004',
      duracao: '1h40m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1ZwFI4EA9xGo3aJV9Ulqx7Y37Rz.jpg',
      generos: ['Ação', 'Terror'],
      pagina: '/madrugada-dos-mortos',
      favorito: false
    },
    {
      nome: 'Guerra Mundial Z (2013)',
      lancamento: '28/06/2013',
      duracao: '2h3m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5HImW2XT2oN001IzZ4aw2IOLC4j.jpg',
      generos: ['Ação', 'Drama', 'Terror', 'Ficção Científica', 'Suspense'],
      pagina: '/guerra-mundial-z',
      favorito: false
    },
    {
      nome: 'Zumbilândia (2009)',
      lancamento: '08/10/2009',
      duracao: '1h28m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fgnzRbeuGstANw2Ef4A1pdr1I0y.jpg',
      generos: ['Comédia', 'Terror'],
      pagina: '/zumbilândia',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
