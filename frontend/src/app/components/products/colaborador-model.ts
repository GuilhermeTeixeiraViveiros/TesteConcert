export interface Colaborador{
    id?: number
    nome: string
    CPF: string
    genero: string 
    nascimento: Date
    ativo?: boolean
    setor?: string
}