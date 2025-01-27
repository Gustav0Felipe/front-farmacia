import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizarCategoria, cadastrarCategoria, listarCategorias } from "../../services/Service";
import Categoria from "../../model/Categoria";

function FormTema() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
            await listarCategorias(`/categoria/${id}`, setCategoria)
        }
        

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined && id !== null) {
            try {
                await atualizarCategoria(`/categoria`, categoria, setCategoria)
                alert('A Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                    alert('Erro ao atualizar a Categoria.')
                }

            }
         else {
            try {
                await cadastrarCategoria(`/categoria`, categoria, setCategoria)
                alert('A categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                    alert('Erro ao cadastrar a Categoria.')
            }
        }
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da sua Categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
               
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
    );
}

export default FormTema;