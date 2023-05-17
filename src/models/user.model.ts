export class User{


    id? : string;
    nome? : string; 
    email? : string;
    senha? : string;
    status? : string;
    foto? : string;

    constructor(id?: string, nome?: string, email?: string, senha?: string, status?: string, foto?: string ){

        this.id=id;
        this.nome=nome;
        this.email=email;
        this.senha=senha;
        this.status=status;
        this.foto=foto;
    }

}