// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância de Heroi
const meuHeroi = new Heroi('Aragorn', 35, 'guerreiro');

// Chamando o método atacar da instância criada
meuHeroi.atacar();
