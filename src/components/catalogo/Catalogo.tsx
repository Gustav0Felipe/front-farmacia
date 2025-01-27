import { Link } from 'react-router-dom'
import './catalog.css'

interface CatalogProps {
    id: number,
    nome: string, 
    preco: number, 
    foto: string
}

export function Catalog({id, nome, preco, foto} : CatalogProps){
    return(
    <>
        <Link to={`/comprar/${id}`} ><img src={foto}/></Link>
        <h2>{nome}</h2>
        <p>Valor: {preco}</p>
    </>
    )
}
