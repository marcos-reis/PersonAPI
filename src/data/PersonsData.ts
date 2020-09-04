export interface IPersonData {
  name: string;
  birthDate: string;
  genre: number;
  description?: string;
  city: string;
  state: string;
  academy: string;
  interest: string;
}


export const PersonsData: IPersonData[] = [

  { name: "Marcone", birthDate: "21-12-1996", genre: 0, city: "Rio do Sul", state: "Santa Catarina", academy: "Engenharia da Computação", interest: "tecnologia e segurança da informação" },
  { name: "Jackson", birthDate: "05-07-1993", genre: 0, city: "Belo Horizonte", state: "Minas Gerais", academy: "Análises e Desenvolvimento de Sistemas", interest: "tecnologia e segurança da informação" },
  { name: "Larissa", birthDate: "10-01-1997", genre: 1, city: "Salvador", state: "Bahia", academy: "Administração", interest: "desenvolvimento e marketing pessoal" },
  { name: "Roger", birthDate: "10-01-1985", genre: 0, city: "Guarulhos", state: "São Paulo", academy: "Redes", interest: "tecnologia e segurança da informação" },
  { name: "Lorena", birthDate: "10-01-1989", genre: 1, city: "São Paulo", state: "São Paulo", academy: "Ciencia da Computação", interest: "tecnologia e segurança da informação" }
]
