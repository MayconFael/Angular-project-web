export class User {

    //atributos da classe com "?" para ser opcional
    id?: string;
    nome?: string;
    email?: string;
    senha?: string;
    status?: string;
    foto?: string;

    //construtor possibilita a criação um novo usuario.
    constructor(id?: string, nome?: string, email?: string, 
                senha?: string, status?: string, foto?: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.status = status;
        this.foto = foto;
    }
}