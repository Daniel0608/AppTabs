import { AtorDetalhePage } from './../ator-detalhe/ator-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

    listaAtores: IAtor[] = [
      {
        nome: 'Norman Reedus',
        idade: '53 anos',
        classificacao: 9,
        biografia: "Norman Mark Reedus (Hollywood, 6 de janeiro de 1969) é um ator, diretor, fotógrafo e modelo norte-americano que\
        tornou-se mais conhecido por seu personagem de Murphy MacManus, no filme The Boondock Saints (Santos Justiceiros), e Daryl\
        Dixon na série de televisão The Walking Dead (2010-presente). Atualmente encontra-se em um relacionamento com a atriz, colega\
        de trabalho Melissa McBride.\n Norman Reedus nasceu na Flórida, onde viveu apenas alguns meses antes de mudar-se para Los\
        Angeles, na Califórnia. Quando fez 12 anos de idade, partiu em viagem com seus pais, e desde então viveu em muitos países,\
        incluindo Inglaterra, Espanha e Japão. Antes de conseguir seu primeiro papel como ator, inicialmente, ele trabalhou em uma\
        loja da Harley Davidson em Veneza e ao mesmo tempo contribuiu para o artwork de vários shows como pintor, fotógrafo, escultor\
        e artista de vídeo. Ele começou a atuar na peça 'Maps para Drowners', no Teatro Tiffany em Sunset Boulevard, segundo suas próprias\
        palavras: 'Eu fui apresentado a um diretor e acabei fazendo uma peça no Tiffany Theater em Los Angeles depois que eu bebi demais\
        numa festa e comecei a gritar com todos os convidados da sala de estar de um pavimento no piso superior. Eu tinha acabado de sair\
        do meu emprego em uma loja de motos em Venice. Um agente estava na platéia na primeira noite em que eu participei da peça e acabou\
        me escalando para o meu primeiro filme.'\nDias depois, ele foi chamado para participar do filme Mutação, então em Amor de\
        sangue (Six Ways To Sunday 1997) e Floating (1997). Ele já atuou em muitos filmes, incluindo Santos justiceiros (1999),\
        Ruas Selvagens (2002), Blade II - O Caçador de Vampiros (2002), A Morte veste-se de Negro (1999), Intrigas (2000), Moroz\
        po kozhe (2007), The Notorious Bettie Page (2005), Hero Wanted, e muitos outros. Reedus é talvez mais conhecido por\
        interpretar o papel de Murphy MacManus no filme Os Santos Justiceiros (The Boondock), juntamente com Sean Patrick Flanery\
        e Willem Dafoe. Ele atuou novamente com Flanery em 2009, na sequência, em Os Santos Justiceiros II: Dia de Todos os Santos\
        The Boondock Saints II: All Saints Day).\n Em 2010, Reedus assumiu o papel de Daryl Dixon na série de televisão The Walking Dead.\
         O personagem não estava originalmente na série de quadrinhos, de mesmo nome, mas foi criado especificamente para Reedus depois\
          de sua audição para o personagem de Merle Dixon.",
        foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ozHPdO5jAt7ozzdZUgyRAMNPSDW.jpg',
        generos: ['Masculino'],
        pagina: '/norman-reedus',
        favorito: false
      },
      {
        nome: 'Melissa McBride',
        idade: '57 anos',
        classificacao: 10,
        biografia: "Melissa McBride nasceu em Lexington, Kentucky, em uma família de quatro filhos. Seu pai era dono de uma empresa\
        e sua mãe foi estudante do Pasadena Playhouse.\n Melissa Suzane McBride nasceu em Lexington, no estado norte-americano\
        do Kentucky. Ela se mudou para Atlanta, na Geórgia, em meados dos anos 80.Ela começou sua carreira profissional em 1991,\
        em Atlanta.Melissa atuou em uma série de comerciais e trabalhos publicitários, como Rooms To Go, e foi uma porta-voz da Ford\
        por alguns anos.\n Melissa fez sua estreia na televisão em 1993, no canal ABC, em um episódio da série de drama Matlock.\
        Mais tarde, Melissa McBride co-estrelou em várias séries de televisão, incluindo In the Heat of the Night, American Gothic,\
        Profiler, Walker, Texas Ranger e Dawson's Creek. Em Dawson's Creek, ela interpretou Nina, uma cinéfila que encanta Dawson\
        após seu rompimento com Jen, na época um episódio chamado 'Road Trip', em 1998. Em 2003, voltou a aparecer no final da\
        série, mas interpretando um personagem diferente. Ainda na década de 1990, Melissa também atuou nos filmes Her Deadly Rival,\
        Close to Danger, Any Place But Home, Nathan Dixon e Piratas da Informática. Em 1996 ela esteve na minissérie \
        A Season in Purgatory da CBS baseado em um romance de 1993 com o mesmo nome, de Dominick Dunne.\n McBride trabalhou como\
        diretora de elenco de filmes e comerciais em Atlanta, Geórgia de 2000 a 2010. Em 2007, o diretor Frank Darabont integrou\
        McBride ao elenco de Woman With Kids at Home em conjunto com o elenco do filme de terror e ficção científica O Nevoeiro\
        baseado no romance de 1980 com mesmo nome de Stephen King.\n Em 2010, McBride se juntou ao elenco da série de drama da AMC\
        The Walking Dead baseada na série de quadrinhos de mesmo nome, criada por Robert Kirkman.Ela interpreta a personagem Carol\
        Peletier, uma das protagonistas da série.",
        foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2omPfeMdnicJqqvgKAU2iqVyD4Z.jpg',
        generos: ['Feminino'],
        pagina: '/melissa-mcbride',
        favorito: false
      }
    ];
    exibirAtor(ator: IAtor){
      const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
      this.router.navigate(['ator-detalhe'],navigationExtras);
    }
  
    async exibirAlertaFavorito(ator: IAtor) {
      const alert = await this.alertController.create({
  
        header: 'Meus Favoritos',
        message: 'Deseja realmente favoritar o Ator?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              ator.favorito=false;
            }
          }, {
            text: 'Sim, favoritar.',
            handler: () => {
              ator.favorito=true;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    }
  
    async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Ator adicionado aos favoritos...',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
  }