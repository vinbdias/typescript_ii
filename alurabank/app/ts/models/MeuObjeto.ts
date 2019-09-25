import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export interface MeuObjeto extends Imprimivel, Igualavel<any> {


}