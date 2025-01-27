import Produto from "./Produto";

export default interface Categoria {
  id: number;
  nome: string;
  produtos: Array<Produto>
}