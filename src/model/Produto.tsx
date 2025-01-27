import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  entrega: number;
  preco: number;
  foto: string | null;
  categoria: Categoria | null;
}