import Tema from './Tema'
import User from './User';


interface Postagens{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema| null;
    usuario?: User | null;
}

export default Postagens;