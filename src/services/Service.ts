import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})


export const listarCategorias = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}


export const cadastrarCategoria = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizarCategoria = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

export const deletarCategoria = async (url: string) => {
    await api.delete(url)
}