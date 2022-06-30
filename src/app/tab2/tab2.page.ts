import { SerieDetalhePage } from './../serie-detalhe/serie-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

    listaSeries: ISerie[] = [
      {
        nome: 'The Walking Dead (2010)',
        lancamento: '31/10/2010',
        duracao: '11 Temporadas',
        classificacao: 8,
        cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
        generos: ['Ação', 'Aventura', 'Drama', 'Ficção Científica', 'Fantasia'],
        pagina: '/the-walking-dead',
        favorito: false
      },
      {
        nome: 'Breaking Bad: A Química do Mal (2008)',
        lancamento: '20/01/2008',
        duracao: '5 Temporadas',
        classificacao: 9,
        cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        generos: ['Drama'],
        pagina: '/breaking-bad',
        favorito: false
      }
    ];
    exibirSerie(serie: ISerie){
      const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
      this.router.navigate(['serie-detalhe'],navigationExtras);
    }
  
    async exibirAlertaFavorito(serie: ISerie) {
      const alert = await this.alertController.create({
  
        header: 'Meus Favoritos',
        message: 'Deseja realmente favoritar a Série?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              serie.favorito=false;
            }
          }, {
            text: 'Sim, favoritar.',
            handler: () => {
              serie.favorito=true;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    }
  
    async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Série adicionada aos favoritos...',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
  }