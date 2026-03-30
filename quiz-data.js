// ===== DADOS DO SIMULADO =====

const quizData = [
    // ===== PARTE 1: GERÊNCIA EM ENFERMAGEM (20 QUESTÕES) =====
    {
        id: 1,
        category: "Gerência",
        question: "Qual é o foco principal da Teoria Científica de Taylor?",
        options: [
            "Racionalização do trabalho e tarefas",
            "Relações humanas e motivação",
            "Estrutura burocrática",
            "Adaptação ao ambiente"
        ],
        correct: 0,
        justification: "A Teoria Científica proposta por Frederick Taylor (Taylorismo) foca na racionalização e organização científica do trabalho, buscando otimizar as tarefas através de estudos de tempo e movimento para aumentar a produtividade."
    },
    {
        id: 2,
        category: "Gerência",
        question: "Qual função administrativa define a autoridade e responsabilidade?",
        options: [
            "Planejamento",
            "Organização",
            "Direção",
            "Controle"
        ],
        correct: 1,
        justification: "A Organização é a função que define a estrutura hierárquica, distribuindo autoridade, responsabilidade e recursos entre os membros da equipe, estabelecendo as relações de poder e dever."
    },
    {
        id: 3,
        category: "Gerência",
        question: "Qual é o alcance temporal do Planejamento Estratégico?",
        options: [
            "Curto prazo (até 1 ano)",
            "Médio prazo (1 a 3 anos)",
            "Longo prazo (acima de 3 anos)",
            "Sem definição específica"
        ],
        correct: 2,
        justification: "O Planejamento Estratégico é de longo prazo (acima de 3 anos), definindo a missão, visão, objetivos e estratégias globais da organização para o futuro distante."
    },
    {
        id: 4,
        category: "Gerência",
        question: "De acordo com a Lei 7.498/86, o que é privativo do enfermeiro?",
        options: [
            "Execução de cuidados de higiene pessoal",
            "Administração de medicamentos",
            "Direção e Planejamento da assistência de enfermagem",
            "Aferição de sinais vitais"
        ],
        correct: 2,
        justification: "Conforme a Lei do Exercício Profissional de Enfermagem (Lei 7.498/86), a Direção e o Planejamento da assistência de enfermagem são privativos do enfermeiro, assim como a orientação e supervisão de outros profissionais."
    },
    {
        id: 5,
        category: "Gerência",
        question: "Qual teoria administrativa foca na organização informal?",
        options: [
            "Teoria Científica",
            "Teoria Clássica",
            "Teoria das Relações Humanas",
            "Teoria Burocrática"
        ],
        correct: 2,
        justification: "A Teoria das Relações Humanas, desenvolvida por Elton Mayo, foca no comportamento social, motivação e relacionamentos informais entre os membros da organização, contrário ao foco mecanicista das teorias anteriores."
    },
    {
        id: 6,
        category: "Gerência",
        question: "Quais são as 5 funções de Fayol, segundo a Teoria Clássica?",
        options: [
            "Prever, Organizar, Comandar, Coordenar e Controlar",
            "Planejar, Organizar, Liderar, Executar e Avaliar",
            "Decisão, Planejamento, Execução, Avaliação e Feedback",
            "Diagnóstico, Planejamento, Implementação, Avaliação e Manutenção"
        ],
        correct: 0,
        justification: "Henri Fayol definiu as 5 funções administrativas clássicas: Prever (antecipar eventos), Organizar (estruturar), Comandar (dirigir), Coordenar (sincronizar) e Controlar (verificar resultados)."
    },
    {
        id: 7,
        category: "Gerência",
        question: "O que é o 5W2H?",
        options: [
            "Análise de custo-benefício",
            "Checklist para consistência do projeto: O quê, Quem, Quando, Onde, Por quê, Como e Quanto",
            "Método de avaliação de desempenho",
            "Ferramenta de comunicação"
        ],
        correct: 1,
        justification: "5W2H é um checklist que define: What (O quê?), Who (Quem?), When (Quando?), Where (Onde?), Why (Por quê?), How (Como?) e How Much (Quanto?). Ferramenta essencial para consistência do planejamento de projetos."
    },
    {
        id: 8,
        category: "Gerência",
        question: "Em qual aspecto a Teoria Burocrática de Weber se concentra?",
        options: [
            "Relacionamentos humanos e motivação",
            "Regras, normas, hierarquia e impessoalidade",
            "Adaptabilidade ao ambiente",
            "Produtividade e tarefas"
        ],
        correct: 1,
        justification: "Max Weber propôs a Teoria Burocrática que foca em: regras, normas técnicas, hierarquia rigorosa, divisão do trabalho clara, impessoalidade nas relações e documentação formal como formas de garantir eficiência."
    },
    {
        id: 9,
        category: "Gerência",
        question: "Como pode ser definida a função de 'Direção' na enfermagem?",
        options: [
            "Documentar todas as ações realizadas",
            "Influenciar a equipe para atingir um objetivo comum",
            "Distribuir recursos materiais",
            "Verificar se as normas foram cumpridas"
        ],
        correct: 1,
        justification: "Direção é a função de liderança que influencia, motiva e coordena a equipe para alcançar objetivos comuns, envolvendo comunicação, decisão, delegação e orientação do trabalho."
    },
    {
        id: 10,
        category: "Gerência",
        question: "O que é o MASP (Método de Análise e Resolução de Problemas)?",
        options: [
            "Metodologia de avaliação comportamental",
            "Método sistemático para identificar, analisar e resolver problemas",
            "Software de gestão administrativo",
            "Escala de mensuração de produtividade"
        ],
        correct: 1,
        justification: "MASP é um método científico e estruturado que segue fases: Observação, Definição, Análise, Plano de Ação, Ação, Verificação e Conclusão, permitindo solução efetiva de problemas."
    },
    {
        id: 11,
        category: "Gerência",
        question: "Em qual horizonte temporal o Planejamento Operacional se foca?",
        options: [
            "Longo prazo (acima de 3 anos)",
            "Médio prazo (1 a 3 anos)",
            "Curto prazo e ações atuais imediatas",
            "Período indefinido"
        ],
        correct: 2,
        justification: "O Planejamento Operacional é de curto prazo (até 1 ano), focando em ações concretas, imediatas e cotidianas para operacionalizar o planejamento estratégico e tático na prática diária."
    },
    {
        id: 12,
        category: "Gerência",
        question: "Qual princípio do planejamento permite ajustes e reformulações conforme necessário?",
        options: [
            "Precisão",
            "Continuidade",
            "Flexibilidade",
            "Participação"
        ],
        correct: 2,
        justification: "A Flexibilidade permite que o planejamento seja revisado e ajustado conforme mudanças no ambiente interno ou externo, mantendo a capacidade de resposta da organização."
    },
    {
        id: 13,
        category: "Gerência",
        question: "Qual teoria administrativa defende que não existe um único modelo ideal de gestão?",
        options: [
            "Teoria Científica",
            "Teoria Comportamental",
            "Teoria Contingencial",
            "Teoria Clássica"
        ],
        correct: 2,
        justification: "A Teoria Contingencial propõe que não há uma melhor maneira de organizar, planejar ou controlar; a estrutura e prática devem se adaptar às diferentes situações e contextos."
    },
    {
        id: 14,
        category: "Gerência",
        question: "Para qual propósito o Gráfico de Gantt é utilizado?",
        options: [
            "Análise financeira",
            "Monitorar o tempo e duração das atividades de um projeto",
            "Avaliação de desempenho individual",
            "Distribuição de salários"
        ],
        correct: 1,
        justification: "O Gráfico de Gantt é uma ferramenta visual que mostra cronologicamente o planejamento, execução e monitoramento das atividades de um projeto, permitindo visualizar prazos e dependências."
    },
    {
        id: 15,
        category: "Gerência",
        question: "Na SAE (Sistematização da Assistência de Enfermagem), o que a 'Organização' organiza?",
        options: [
            "Apenas o material",
            "Método, pessoal e instrumentos",
            "Somente o pessoal",
            "Apenas os procedimentos"
        ],
        correct: 1,
        justification: "Na SAE, a Organização envolve a sistematização de três elementos: Método (processo estruturado), Pessoal (equipe de enfermagem) e Instrumentos (materiais, equipamentos, formulários)."
    },
    {
        id: 16,
        category: "Gerência",
        question: "Em qual aspecto a Teoria Comportamental se concentra?",
        options: [
            "Produção em massa",
            "Estrutura hierárquica rígida",
            "Tomada de decisão e liderança",
            "Padronização de tarefas"
        ],
        correct: 2,
        justification: "A Teoria Comportamental (Behavioral Management) foca em comportamento organizacional, motivação, tomada de decisão, liderança e dinâmica de grupos, reconhecendo fatores psicossociais."
    },
    {
        id: 17,
        category: "Gerência",
        question: "O que é o Diagnóstico Situacional conforme a Res. 509/16?",
        options: [
            "Avaliação individual de cada paciente",
            "Caracterização do serviço para embasamento do plano de trabalho",
            "Previsão de receitas e despesas",
            "Projeto de pesquisa"
        ],
        correct: 1,
        justification: "O Diagnóstico Situacional é o levantamento e análise das condições atuais de um serviço de enfermagem, incluindo recursos, problemas, oportunidades e pontos fortes, informando o planejamento."
    },
    {
        id: 18,
        category: "Gerência",
        question: "Como a Teoria dos Sistemas concebe a organização?",
        options: [
            "Um mecanismo fechado e independente",
            "Uma entidade estática e imutável",
            "Um sistema aberto e interdependente",
            "Uma estrutura isolada do ambiente"
        ],
        correct: 2,
        justification: "A Teoria dos Sistemas entende a organização como um sistema aberto que interage constantemente com o ambiente, onde os elementos são interdependentes e formam um todo integrado."
    },
    {
        id: 19,
        category: "Gerência",
        question: "Qual é a primeira fase do planejamento administrativo?",
        options: [
            "Execução das ações",
            "Definição de objetivos",
            "Conhecimento do sistema (Diagnóstico)",
            "Avaliação de resultados"
        ],
        correct: 2,
        justification: "A primeira fase do planejamento é o Diagnóstico ou Conhecimento do Sistema, onde se levanta dados sobre a situação atual, problemas, recursos e oportunidades para embasar as próximas etapas."
    },
    {
        id: 20,
        category: "Gerência",
        question: "Como deve ser o controle na enfermagem?",
        options: [
            "Realizado apenas ao final do período",
            "Pontual e ocasional",
            "Contínuo e baseado em padrões predeterminados",
            "Deixado a critério de cada profissional"
        ],
        correct: 2,
        justification: "O controle na enfermagem é contínuo (durante todo o processo), sistemático, baseado em padrões técnicos predeterminados e objetivos, garantindo qualidade e conformidade da assistência."
    },

    // ===== PARTE 2: GESTÃO PATRIMONIAL (20 QUESTÕES) =====
    {
        id: 21,
        category: "Gestão Patrimonial",
        question: "O que compõe o Ativo de uma organização?",
        options: [
            "Apenas dinheiro em banco",
            "Bens + Direitos",
            "Somente bens móveis",
            "Passivos e obrigações"
        ],
        correct: 1,
        justification: "O Ativo é composto por Bens (itens tangíveis como equipamentos, medicamentos) e Direitos (valores a receber, contas correntes), representando os recursos da organização."
    },
    {
        id: 22,
        category: "Gestão Patrimonial",
        question: "Qual é a classificação dos medicamentos quanto aos recursos?",
        options: [
            "Recursos patrimoniais e permanentes",
            "Materiais e de consumo",
            "Bens imóveis e tangíveis",
            "Direitos e créditos"
        ],
        correct: 1,
        justification: "Medicamentos são classificados como Materiais de Consumo, são utilizados na prestação de serviços, possuem vida útil curta ou imediata e necessitam reposição constante."
    },
    {
        id: 23,
        category: "Gestão Patrimonial",
        question: "Um tomógrafo é classificado como qual tipo de recurso?",
        options: [
            "Material de consumo",
            "Bem intangível",
            "Patrimonial, durável e móvel",
            "Despesa operacional"
        ],
        correct: 2,
        justification: "Um tomógrafo é um recurso Patrimonial (bem que permanece na instituição), Durável (vida útil longa) e Móvel (pode ser transportado), exigindo controle rigoroso e depreciação."
    },
    {
        id: 24,
        category: "Gestão Patrimonial",
        question: "Como pode ser definida a Depreciação?",
        options: [
            "Aumento de valor do bem",
            "Perda de valor por uso, desgaste ou obsolescência",
            "Imposto cobrado pelo bem",
            "Seguro do patrimônio"
        ],
        correct: 1,
        justification: "Depreciação é a redução gradual do valor de um bem patrimonial devido ao uso, desgaste natural, ação do tempo ou obsolescência tecnológica, refletida contabilmente."
    },
    {
        id: 25,
        category: "Gestão Patrimonial",
        question: "Qual atributo da classificação de materiais está relacionado à simplicidade?",
        options: [
            "Abrangência",
            "Praticidade",
            "Flexibilidade",
            "Universalidade"
        ],
        correct: 1,
        justification: "Praticidade refere-se ao atributo que torna a classificação simples, clara, fácil de entender e de ser aplicada, evitando complexidade excessiva no sistema de catalogação."
    },
    {
        id: 26,
        category: "Gestão Patrimonial",
        question: "O que caracteriza os Materiais Críticos?",
        options: [
            "São sempre os mais caros",
            "Falta gera risco para o serviço e a demanda é imprevisível",
            "São de fácil substituição",
            "Não necessitam controle especial"
        ],
        correct: 1,
        justification: "Materiais Críticos são aqueles cuja falta compromete a qualidade da assistência ou gera risco, com demanda imprevisível e incerta, exigindo estoque de segurança e monitoramento contínuo."
    },
    {
        id: 27,
        category: "Gestão Patrimonial",
        question: "Qual é o propósito da etapa de 'Padronização' na gestão de materiais?",
        options: [
            "Aumentar o custo dos materiais",
            "Uniformização do emprego e do tipo do material",
            "Reduzir a quantidade de fornecedores",
            "Diminuir a qualidade"
        ],
        correct: 1,
        justification: "A Padronização visa uniformizar o emprego e os tipos de materiais utilizados, reduzindo variedade, facilitando controle, estoque, compras e garantindo qualidade e compatibilidade."
    },
    {
        id: 28,
        category: "Gestão Patrimonial",
        question: "O que é Vida Econômica de um bem?",
        options: [
            "Tempo que o bem pode ser armazenado",
            "Período em que o ativo gera benefícios econômicos para a empresa",
            "Tempo até quebra do bem",
            "Período de garantia do fornecedor"
        ],
        correct: 1,
        justification: "Vida Econômica é o período estimado durante o qual um bem patrimonial permanece útil e produtivo, gerando benefícios para a organização, base para cálculo de depreciação."
    },
    {
        id: 29,
        category: "Gestão Patrimonial",
        question: "Qual é o método de Depreciação Linear?",
        options: [
            "Depreciação acelerada no início",
            "Divisão igualitária do valor em parcelas iguais pelo tempo de vida útil",
            "Depreciação variável conforme uso",
            "Sem cálculo matemático definido"
        ],
        correct: 1,
        justification: "No Método Linear, divide-se o valor do bem pelo número de períodos (anos) de vida útil, obtendo cotas iguais e periódicas, sendo o método mais simples e utilizado."
    },
    {
        id: 30,
        category: "Gestão Patrimonial",
        question: "O que representa o Patrimônio Líquido?",
        options: [
            "Apenas o dinheiro em caixa",
            "A diferença entre Ativos e Passivos",
            "Total de bens da instituição",
            "Lucro mensal da organização"
        ],
        correct: 1,
        justification: "Patrimônio Líquido = Ativos - Passivos. Representa o valor líquido da organização, o que realmente pertence aos proprietários após descontar as obrigações."
    },
    {
        id: 31,
        category: "Gestão Patrimonial",
        question: "Qual é a primeira etapa do processo de classificação de materiais?",
        options: [
            "Padronização",
            "Normalização",
            "Catalogação",
            "Codificação"
        ],
        correct: 2,
        justification: "Catalogação é a primeira etapa, onde se faz o levantamento, identificação e listagem de todos os materiais existentes e necessários, criando o catálogo de materiais de referência."
    },
    {
        id: 32,
        category: "Gestão Patrimonial",
        question: "Qual é a diferença entre Bens de Consumo e Bens Duráveis?",
        options: [
            "Ambos têm a mesma vida útil",
            "Bens de Consumo: vida útil curta | Bens Duráveis: longa duração",
            "Bens Duráveis são apenas materiais",
            "Não há diferença significativa"
        ],
        correct: 1,
        justification: "Bens de Consumo têm vida útil curta (medicamentos, materiais descartáveis) e são usados rapidamente. Bens Duráveis oferecem serviços por longo período (equipamentos, móveis)."
    },
    {
        id: 33,
        category: "Gestão Patrimonial",
        question: "O que é Codificação de Materiais?",
        options: [
            "Divisão de materiais por cor",
            "Atribuição de números e/ou letras que representam e identificam o item",
            "Processo de compra de materiais",
            "Embalagem do material"
        ],
        correct: 1,
        justification: "Codificação é a atribuição de um código (números, letras ou combinação) único para cada item, facilitando identificação, organização, localização, controle e processamento de dados."
    },
    {
        id: 34,
        category: "Gestão Patrimonial",
        question: "Qual é a classe de periculosidade dos produtos Corrosivos?",
        options: [
            "Classe 3",
            "Classe 5",
            "Classe 8",
            "Classe 9"
        ],
        correct: 2,
        justification: "Corrosivos são classificados como Classe 8 segundo a tabela de substâncias perigosas, incluindo ácidos e bases fortes que causam danos à pele e outras substâncias."
    },
    {
        id: 35,
        category: "Gestão Patrimonial",
        question: "Qual é um exemplo de Bem Imóvel de uma instituição hospitalar?",
        options: [
            "Camas hospitalar",
            "Equipamentos médicos",
            "Prédio e terreno do hospital",
            "Veículos para transporte"
        ],
        correct: 2,
        justification: "Bens Imóveis são aqueles que não podem ser removidos do local (imóveis). Prédios, edifícios, construções e terrenos são exemplos clássicos de bens imóveis patrimoniais."
    },
    {
        id: 36,
        category: "Gestão Patrimonial",
        question: "Em qual situação o método de Soma dos Dígitos é utilizado para depreciação?",
        options: [
            "Quando o valor inicial é muito alto",
            "Quando o desgaste é maior nos primeiros anos",
            "Quando o bem nunca se deprecia",
            "Quando a vida útil é indefinida"
        ],
        correct: 1,
        justification: "O método de Soma dos Dígitos (acelerado) é usado quando há maior depreciação nos primeiros anos de uso, refletindo melhor a realidade de desgaste de certos equipamentos."
    },
    {
        id: 37,
        category: "Gestão Patrimonial",
        question: "O que é Normalização na gestão de materiais?",
        options: [
            "Divisão de materiais por área",
            "Aumento de quantidade de itens",
            "Estabelecimento de normas técnicas e características para os itens",
            "Eliminação de materiais antigos"
        ],
        correct: 2,
        justification: "Normalização estabelece normas técnicas, especificações, características de qualidade e padrões que os materiais devem atender, garantindo compatibilidade, segurança e eficácia."
    },
    {
        id: 38,
        category: "Gestão Patrimonial",
        question: "Como são classificados os Bens Móveis quanto à movimentação?",
        options: [
            "Não podem ser removidos",
            "Podem ser transportados e removidos",
            "Devem permanecer fixos",
            "Sua localização não importa"
        ],
        correct: 1,
        justification: "Bens Móveis são aqueles passíveis de transporte ou remoção de um local para outro, como equipamentos, móveis, veículos, tendo a mobilidade como característica essencial."
    },
    {
        id: 39,
        category: "Gestão Patrimonial",
        question: "Qual é a responsabilidade principal do administrador de materiais?",
        options: [
            "Vender todos os materiais disponíveis",
            "Garantir a disponibilidade de insumos sem excesso de estoque",
            "Acumular o máximo de materiais possível",
            "Eliminar o controle de materiais"
        ],
        correct: 1,
        justification: "O administrador de materiais deve garantir disponibilidade (não faltar), qualidade, custo adequado e não acumular excesso em estoque (evitar imobilização de recursos e desperdícios)."
    },
    {
        id: 40,
        category: "Gestão Patrimonial",
        question: "O que o Passivo representa contabilmente?",
        options: [
            "Valor total de bens",
            "Dinheiro parado em caixa",
            "Obrigações com terceiros (o que a instituição deve)",
            "Apenas dívidas com bancos"
        ],
        correct: 2,
        justification: "Passivo representa todas as obrigações e dívidas da organização com terceiros (fornecedores, credores, empréstimos), refletindo o que a instituição deve a outros."
    }
];

// ===== CONTEÚDO DE ESTUDO =====

const studyContent = {
    gerencia: {
        title: "Gerência em Enfermagem",
        sections: [
            {
                title: "Teorias Administrativas",
                subsections: [
                    {
                        title: "Teoria Científica (Taylor)",
                        content: "Foco na racionalização e otimização do trabalho. Utiliza estudos de tempo e movimento para aumentar produtividade. Princípios: divisão do trabalho, especialização, eficiência e controle científico."
                    },
                    {
                        title: "Teoria Clássica (Fayol)",
                        content: "Define 5 funções essenciais: Prever (antecipar), Organizar (estruturar), Comandar (dirigir), Coordenar (sincronizar) e Controlar (verificar). Enfatiza a hierarquia e organização formal."
                    },
                    {
                        title: "Teoria Burocrática (Weber)",
                        content: "Baseada em regras, normas, hierarquia clara, impessoalidade e documentação formal. Visa máxima eficiência através da estrutura rígida e protocolar."
                    },
                    {
                        title: "Teoria das Relações Humanas (Mayo)",
                        content: "Reconhece a importância das relações informais, motivação, satisfação no trabalho. Foca em aspectos psicossociais e comportamentais não considerados pelas teorias anteriores."
                    },
                    {
                        title: "Teoria Comportamental",
                        content: "Enfatiza tomada de decisão, liderança, comportamentos individuais e grupais. Reconhece a complexidade das motivações humanas e organizacionais."
                    },
                    {
                        title: "Teoria dos Sistemas",
                        content: "Vê a organização como um sistema aberto que interage com o ambiente. Os elementos são interdependentes formando um todo integrado e dinâmico."
                    },
                    {
                        title: "Teoria Contingencial",
                        content: "Propõe que não existe uma melhor maneira; a estrutura deve se adaptar às situações específicas. Flexibilidade conforme contexto e circunstâncias."
                    }
                ]
            },
            {
                title: "Funções Administrativas",
                subsections: [
                    {
                        title: "Planejamento",
                        content: "Definição de objetivos e estratégias. Três níveis: Estratégico (longo prazo), Tático (médio prazo) e Operacional (curto prazo). Princípios: precisão, flexibilidade, continuidade."
                    },
                    {
                        title: "Organização",
                        content: "Define estrutura, autoridade, responsabilidade e recursos. Estabelece hierarquia, departamentos, funções e relacionamentos. Elemento estruturante do sistema."
                    },
                    {
                        title: "Direção",
                        content: "Influencia, motiva e coordena a equipe. Envolve liderança, comunicação, tomada de decisão e orientação para atingir objetivos comuns com eficácia."
                    },
                    {
                        title: "Controle",
                        content: "Verificação contínua de resultados versus padrões predeterminados. Identifica desvios e possibilita correções. Deve ser sistemático, periódico e baseado em dados."
                    }
                ]
            },
            {
                title: "MASP - Método de Análise e Resolução de Problemas",
                subsections: [
                    {
                        title: "Fases do MASP",
                        content: "1. Observação: Coleta de dados sobre o problema. 2. Definição: Clareza sobre o que é o problema. 3. Análise: Identificação das causas raízes. 4. Plano de Ação: Definição de soluções. 5. Ação: Execução. 6. Verificação: Avaliação dos resultados. 7. Conclusão: Padronização e aprendizado."
                    },
                    {
                        title: "Importância para Enfermagem",
                        content: "Contribui para melhoria contínua da qualidade da assistência. Permite identificar problemas sistêmicos e implementar soluções duradouras. Ferramenta essencial para SAE (Sistematização da Assistência) e garantia de qualidade."
                    }
                ]
            },
            {
                title: "Lei do Exercício Profissional de Enfermagem (Lei 7.498/86)",
                subsections: [
                    {
                        title: "Atribuições Privativas do Enfermeiro",
                        content: "Planejamento, organização, direção e controle da assistência de enfermagem. Orientação e supervisão de pessoal. Educação permanente e pesquisa na enfermagem. Avaliação contínua da qualidade."
                    }
                ]
            }
        ]
    },
    patrimonial: {
        title: "Gestão Patrimonial",
        sections: [
            {
                title: "Classificação de Bens",
                subsections: [
                    {
                        title: "Materiais vs Patrimoniais",
                        content: "Materiais (consumo/estocáveis): Vida útil curta, uso rápido, reposição frequente. Ex: medicamentos, seringas. | Patrimoniais (permanentes): Durabilidade longa, geram benefícios contínuos, exigem depreciação. Ex: equipamentos, móveis."
                    },
                    {
                        title: "Móveis vs Imóveis",
                        content: "Móveis: Podem ser transportados/removidos. Ex: equipamentos, veículos. | Imóveis: Não removíveis, fixos no local. Ex: prédios, terrenos, construções."
                    },
                    {
                        title: "Bens Duráveis vs Consumo",
                        content: "Duráveis: Vida útil longa, custos capitalizados, depreciáveis. Ex: tomógrafo, cama hospitalar. | Consumo: Vida útil curta/imediata, custos operacionais, sem depreciação. Ex: medicamentos, copos descartáveis."
                    },
                    {
                        title: "Ativo da Organização",
                        content: "Composto por Bens (recursos tangíveis) + Direitos (créditos, contas correntes). Representa todos os recursos que a organização possui e pode controlar economicamente."
                    }
                ]
            },
            {
                title: "Classificação de Materiais",
                subsections: [
                    {
                        title: "Catalogação",
                        content: "Primeira etapa. Levantamento, identificação e listagem de todos os materiais. Cria-se um catálogo de referência com especificações básicas de cada item."
                    },
                    {
                        title: "Codificação",
                        content: "Atribuição de código único (números, letras ou combinação) a cada item. Facilita identificação, localização, processamento de dados e controle de estoque."
                    },
                    {
                        title: "Padronização",
                        content: "Uniformização do emprego e tipos de materiais. Reduz variedade, facilita compras, estoque e garante qualidade, compatibilidade e segurança."
                    },
                    {
                        title: "Normalização",
                        content: "Estabelecimento de normas técnicas, especificações e características que os materiais devem atender. Garante qualidade, segurança e eficácia dos insumos."
                    },
                    {
                        title: "Atributos da Classificação",
                        content: "Abrangência: Inclui todos os materiais. Praticidade: Simplicidade de aplicação. Flexibilidade: Permite ajustes. Uniformidade: Critérios claros e consistentes."
                    },
                    {
                        title: "Materiais Críticos",
                        content: "Cuja falta compromete a qualidade ou oferece risco. Demanda imprevisível. Exigem estoque de segurança, monitoramento contínuo e planejamento especial."
                    }
                ]
            },
            {
                title: "Depreciação",
                subsections: [
                    {
                        title: "Conceito",
                        content: "Redução gradual do valor de um bem patrimonial devido ao uso, desgaste, ação do tempo ou obsolescência. Reflete contabilmente a perda de capacidade produtiva e valor econômico."
                    },
                    {
                        title: "Vida Útil vs Vida Econômica",
                        content: "Vida Útil: Período estimado de funcionamento técnico. Vida Econômica: Período em que o bem gera benefícios econômicos úteis para a organização."
                    },
                    {
                        title: "Método Linear",
                        content: "Divisão do valor do bem em parcelas iguais pelo período de vida útil. Fórmula: (Valor Original - Valor Residual) / Anos de Vida Útil. Mais simples e utilizado."
                    },
                    {
                        title: "Método de Quotas",
                        content: "Similar ao método linear, dividindo o valor em quotas iguais. Aplicável quando a depreciação é uniforme ao longo do tempo."
                    },
                    {
                        title: "Método de Soma dos Dígitos",
                        content: "Depreciação acelerada nos primeiros anos, reduzindo suavemente depois. Adequado quando o desgaste é maior no início da vida útil do bem. Método mais conservador financeiramente."
                    }
                ]
            },
            {
                title: "Conceitos Contábeis",
                subsections: [
                    {
                        title: "Patrimônio Líquido",
                        content: "Diferença entre Ativos e Passivos. Patrimônio Líquido = Ativos - Passivos. Representa o valor líquido que realmente pertence aos proprietários após descontar obrigações."
                    },
                    {
                        title: "Passivo",
                        content: "Todas as obrigações e dívidas da organização com terceiros. Ex: fornecedores, empréstimos bancários, salários a pagar. Indica o que a instituição deve a outros."
                    }
                ]
            },
            {
                title: "Segurança e Classificação de Perigos",
                subsections: [
                    {
                        title: "Classe de Periculosidade",
                        content: "Classe 1: Explosivos. Classe 2: Gases. Classe 3: Líquidos inflamáveis. Classe 4: Sólidos inflamáveis. Classe 5: Comburentes/Peróxidos. Classe 6: Tóxicos. Classe 7: Radioativos. Classe 8: Corrosivos. Classe 9: Substâncias diversas perigosas."
                    },
                    {
                        title: "Corrosivos (Classe 8)",
                        content: "Substâncias que causam danos severos à pele, corrosão de metais e materiais. Ex: ácidos fortes, bases fortes. Exigem embalagem especial, manuseio cuidadoso e armazenamento apropriado."
                    }
                ]
            },
            {
                title: "Responsabilidades do Administrador de Materiais",
                subsections: [
                    {
                        title: "Objetivos Principais",
                        content: "Garantir disponibilidade de insumos sem falta. Manter qualidade dos materiais. Controlar custos sem excesso de estoque. Evitar imobilização desnecessária de recursos. Implementar sistemas eficientes de controle e organização."
                    }
                ]
            }
        ]
    }
};
