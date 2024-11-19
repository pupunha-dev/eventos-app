import { Id } from "../shared";
import { Evento } from "../evento";

export const eventos: Evento[] = [
  {
    id: Id.novo(),
    alias: 'evento-fullstack',
    senha: '123',
    nome: 'Evento fullstack da Coder',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'Lapa-PR',
    descricao: 'Desenvolva sua primeira aplicação Fullstack com deploy na AWS',
    imagem: '',
    imagemBackground: '',
    convidados: [
      {
        id: Id.novo(),
        nome: 'Daniel Melo',
        email: 'dsmprogramador@gmail.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhante: 1
      }
    ],
    publicoEsperado: 100
  }
]