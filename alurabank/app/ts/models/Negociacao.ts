import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}    

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): string {

        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        Volume: ${this.volume}
        `;
    }

    ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}