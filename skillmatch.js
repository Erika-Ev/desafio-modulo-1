const candidato = {
  nome: "João",
  habilidades: ["JavaScript", "React", "Node.js"],
  area: "Desenvolvimento Web",
  experienciaMeses: 24,
};

const vagas = [
  {
    id: 1,
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Front-end",
    requisitos: ["JavaScript", "React", "HTML", "CSS"],
    salario: 5000,
    modalidade: "Presencial",
  },
  {
    id: 2,
    empresa: "Innovatech",
    cargo: "Desenvolvedor Back-end",
    requisitos: ["JavaScript", "Node.js", "PostgreSQL"],
    salario: 6000,
    modalidade: "Remoto",
  },
  {
    id: 3,
    empresa: "WebWorks",
    cargo: "Desenvolvedor Full Stack",
    requisitos: ["JavaScript", "React", "Node.js", "MongoDB"],
    salario: 7000,
    modalidade: "Híbrido",
  },
];

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    console.log(
      `Vaga: ${this.cargo} na empresa ${this.empresa} - Salário: R$${this.salario} - Modalidade: ${this.modalidade}`,
    );
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.area = "Front-end";
    this.nivel = nivel;
  }

  exibirNivel() {
    console.log(`Nível da vaga: ${this.nivel}`);
  }
}

// -----------------------FUNÇÕES-----------------------

// Função para verificar se o candidato atende aos requisitos da vaga
// compatibilidade = (quantidade de requisitos compativeis) / (total de requisitos da vaga) * 100

function verificarCompatibilidade(candidato, vaga) {
  const requisitosAtendidos = vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito),
  );
  const compatibilidade =
    (requisitosAtendidos.length / vaga.requisitos.length) * 100;
  return compatibilidade;
}

// Classificar as vagas com base na compatibilidade
function classificarVagas(candidato, vagas) {
  return vagas.map((vaga) => {
    const compatibilidade = verificarCompatibilidade(candidato, vaga);
    return { ...vaga, compatibilidade };
  });
}

// Gerar uma recomendação de estudos com base nas habilidades faltantes
function gerarRecomendacaoEstudos(candidato, vagas) {
  //criando a função
  const habilidadesFaltantes = new Set(); // Usar um Set para evitar duplicatas
  for (const vaga of vagas) {
    vaga.requisitos.forEach((requisito) => {
      if (!candidato.habilidades.includes(requisito)) {
        // se a lista de habilidades do candidato não inclui o requisito da vaga, adiciona ao conjunto de habilidades faltantes
        habilidadesFaltantes.add(requisito);
      }
    });
  }
  return Array.from(habilidadesFaltantes);
}

//------------------------EXECUÇÃO-----------------------

// Exibir habilidades faltantes para cada vaga
for (const vaga of vagas) {
  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !candidato.habilidades.includes(requisito), // Filtra os requisitos que o candidato não possui com o !
  );
  console.log(`Vaga: ${vaga.cargo} na empresa ${vaga.empresa}`);
  console.log(`Habilidades faltantes: ${habilidadesFaltantes.join(", ")}`);
}

const resultadoCompatibilidade = classificarVagas(candidato, vagas);
for (const vaga of resultadoCompatibilidade) {
  // 0-49%: Baixa compatibilidade
  // 50-79%: Compatibilidade média
  // 80-100%: Alta compatibilidade
  if (vaga.compatibilidade >= 80) {
    console.log(
      `Vaga: ${vaga.cargo} na empresa ${vaga.empresa} - Alta compatibilidade (${vaga.compatibilidade.toFixed(2)}%)`,
    );
  } else if (vaga.compatibilidade >= 50) {
    console.log(
      `Vaga: ${vaga.cargo} na empresa ${vaga.empresa} - Compatibilidade média (${vaga.compatibilidade.toFixed(2)}%)`,
    );
  } else {
    console.log(
      `Vaga: ${vaga.cargo} na empresa ${vaga.empresa} - Baixa compatibilidade (${vaga.compatibilidade.toFixed(2)}%)`,
    );
  }
} // alt + seta para mover a linha para cima ou para baixo
// Identificar a vaga com maior compatibilidade
const vagaMaisCompativel = resultadoCompatibilidade.reduce(
  (max, vaga) => (vaga.compatibilidade > max.compatibilidade ? vaga : max),
  resultadoCompatibilidade[0],
);
console.log(
  `Vaga mais compatível: ${vagaMaisCompativel.cargo} na empresa ${vagaMaisCompativel.empresa} - Compatibilidade (${vagaMaisCompativel.compatibilidade.toFixed(2)}%)`,
);

const recomendacaoEstudos = gerarRecomendacaoEstudos(candidato, vagas); // chamando a função
console.log(
  `Recomendações de estudos para ${candidato.nome}: ${recomendacaoEstudos.join(", ")}`,
);
