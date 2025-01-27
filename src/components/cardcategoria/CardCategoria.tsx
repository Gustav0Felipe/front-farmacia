import { Link, useParams } from 'react-router-dom'
import Categoria from '../../model/Categoria'
import { useEffect, useState } from 'react'
import { listarCategorias } from '../../services/Service'

function CardCategoria() {

    const { id } = useParams<{ id: string }>()
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    async function buscarPorId() {
            await listarCategorias(`/categoria/${id}`, setCategoria)
        }
        
    useEffect(() => {
        buscarPorId()  
    }, [])
    
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria