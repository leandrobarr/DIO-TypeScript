// types
// interfaces

/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'Aquático'
    executarRugido (alturaEmDecibeis: number): void
}
*/
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'Aquático'
    domestico: boolean
    //executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
     visaoNoturna: boolean
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
    
}


/*
animal.executarRugido ('s')

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}DB`)

}
*/