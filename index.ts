// types
// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'Aquático'
    executarRugido (alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
     visaoNoturna: boolean
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}DB`)
    
}

animal.executarRugido ('s')

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}DB`)

}