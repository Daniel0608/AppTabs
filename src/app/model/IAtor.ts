/* eslint-disable eol-last */
export interface IAtor{
    nome: string;
    idade: string;
    biografia: string;
    classificacao: number;
    foto: string;
    generos: string[];
    pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
    favorito: boolean;
  }