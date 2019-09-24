System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Negociacoes;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends index_1.Imprimivel {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    return `${JSON.stringify(this._negociacoes)}`;
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
