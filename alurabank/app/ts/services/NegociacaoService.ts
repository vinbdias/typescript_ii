import { NegociacaoParcial, Negociacao } from '../models/index';
import { ResponseHandler } from './ResponseHandler';

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {        

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)));

    }
}