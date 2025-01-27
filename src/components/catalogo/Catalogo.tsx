import { Link } from 'react-router-dom'

interface CatalogProps {
    id: number,
    nome: string, 
    preco: number, 
    foto: string
}

export function Catalogo({id, nome, preco, foto} : CatalogProps){
    console.log(nome)
    
    return(
    <>
        <Link to={`/categoria/${id}`} ><img src={foto} className="w-30"/></Link>
        <h2 className='text-black'>{nome}</h2>
        <p className='text-black'>Valor: {preco}</p>
    </>
    )
}
