# 📚 Simulado de Enfermagem - Gerência e Gestão Patrimonial

Um Web App educativo em HTML5, CSS3 e JavaScript Vanilla para estudar e testar conhecimentos sobre Gerência em Enfermagem e Gestão Patrimonial.

## ✨ Características Principais

### 🎨 Design e Interface
- **Identidade Visual**: Cores em tons pastéis rosa (#FFF0F5, #FFB6C1, #DB7093)
- **Favicon**: Ícone profissional de educação
- **Botões Arredondados**: Design moderno e intuitivo
- **Responsivo**: Funciona em desktop, tablet e mobile
- **SPA (Single Page Application)**: Navegação fluida sem recarregar a página

### 📖 Conteúdo de Estudo

#### **Gerência em Enfermagem (20 questões)**
- Teorias Administrativas (Científica até Contingencial)
- 5 Funções Administrativas (Planejamento, Organização, Direção e Controle)
- MASP - Método de Análise e Resolução de Problemas
- Lei 7.498/86 - Exercício Profissional de Enfermagem

#### **Gestão Patrimonial (20 questões)**
- Classificação de Materiais vs Patrimoniais
- Diferença entre Consumo e Bens Duráveis
- Métodos de Depreciação (Linear, Quotas, Soma dos Dígitos)
- Conceitos Contábeis (Ativo, Passivo, Patrimônio Líquido)

### 🎯 Funcionalidades do Simulado

✅ **40 Questões Universitárias**
- 20 sobre Gerência em Enfermagem
- 20 sobre Gestão Patrimonial

✅ **Feedback Visual Inteligente**
- Botões **verdes** para respostas corretas
- Botões **vermelhos** para respostas incorretas
- Justificativa técnica para cada questão

✅ **Histórico Completo**
- Salva automaticamente no localStorage
- Persiste entre sessões do navegador
- Mostra data/hora de cada tentativa

✅ **Gráfico de Desempenho**
- Visualiza progresso em todas as tentativas
- Linha de tendência de aprendizado
- Comparável em tempo real

✅ **Navegação Intuitiva**
- Botão "Voltar" em todas as telas internas
- Menu principal com opções claras
- Progresso visual durante o simulado

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Extraia os arquivos em uma pasta
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! A aplicação está funcionando

### Opção 2: Usar um Servidor Local (Recomendado)
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```
Acesse: `http://localhost:8000`

## 📱 Estrutura de Arquivos

```
mainha-simulado/
├── index.html          # Estrutura principal da SPA
├── styles.css          # Estilo visual (cores, layout, responsivo)
├── app.js              # Lógica da aplicação
├── quiz-data.js        # 40 questões e conteúdo de estudo
└── README.md           # Este arquivo
```

## 🎓 Uso Educativo

### Tela Inicial
Acesse o menu principal com as opções:
- 📚 **Conteúdo: Gerência** - Estude as teorias e funções administrativas
- 📦 **Conteúdo: Gestão Patrimonial** - Aprenda sobre classificação de bens e depreciação
- 🎯 **Iniciar Simulado** - Teste seus conhecimentos com 40 questões
- 📊 **Ver Histórico** - Acompanha seu progresso

### Durante o Simulado
- Leia a questão com atenção
- Selecione uma das 4 alternativas
- Receba feedback imediato com justificativa técnica
- Navegue entre questões com os botões Anterior/Próxima
- Acompanhe progresso na barra superior

### Resultado Final
- Score total e percentual
- Desempenho por categoria
- Gráfico com histórico de tentativas
- Botão para refazer o simulado

## 💾 Dados Persistentes

O histórico de tentativas é salvo automaticamente em **localStorage**:
```javascript
// Cada tentativa contém:
- Data e hora
- Score (acertos/total)
- Percentual de acerto
- Desempenho por categoria
- Respostas dadas
```

Para **limpar o histórico**, use o console do navegador:
```javascript
localStorage.removeItem('quizHistor');
```

## 🎨 Paleta de Cores

| Uso | Cor | Código |
|-----|-----|--------|
| Fundo Principal | Rosa Claro | #FFF0F5 |
| Componentes | Rosa Médio | #FFB6C1 |
| Destaque | Rosa Escuro | #DB7093 |
| Correto | Verde | #90EE90 |
| Incorreto | Vermelho | #FF6B6B |
| Informação | Azul | #87CEEB |

## 📊 Conteúdo das Questões

### Gerência em Enfermagem
1. Teoria Científica de Taylor
2. Função de Organização
3. Planejamento Estratégico
4. Lei 7.498/86
5. Teoria das Relações Humanas
6. Funções de Fayol
... e mais 14 questões

### Gestão Patrimonial
21. Composição do Ativo
22. Classificação de Medicamentos
23. Classificação de Equipamento
24. Depreciação
25. Atributo de Praticidade
... e mais 15 questões

Cada questão contém:
- ✓ Quatro alternativas
- ✓ Resposta correta
- ✓ Justificativa técnica detalhada

## 🌐 Compatibilidade

- ✅ Chrome/Chromium (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Navegadores móveis (iOS/Android)

## 📚 Referências Utilizadas

- Lei 7.498/86 - Lei do Exercício Profissional de Enfermagem
- Theorias Administrativas (Taylor, Fayol, Weber, Mayo)
- Gestão Patrimonial e Contabilidade
- Resolução 509/16 COFEN
- MASP - Método de Análise e Resolução de Problemas

## 💡 Dicas de Estudo

1. **Comece pelo Conteúdo**: Estude as seções antes de fazer o simulado
2. **Primeiro Simulado**: Não se preocupe com erros, é parte do aprendizado
3. **Revise os Erros**: Leia a justificativa de cada resposta incorreta
4. **Refaça Regularmente**: Compare seu progresso com tentativas anteriores
5. **Use o Histórico**: Monitore melhorias no gráfico de desempenho

## 🔧 Desenvolvimento

Desenvolvido com **tecnologias web padrão**:
- HTML5 para semântica
- CSS3 para design responsivo
- JavaScript Vanilla (sem frameworks)
- Chart.js para gráficos
- LocalStorage para persistência

## 📝 Licença

Recurso educativo criado para fins de aprendizado em Enfermagem.

## ✉️ Feedback

Se encontrar erros nas questões ou tiver sugestões, sinta-se livre para reportar!

---

**Boa sorte nos estudos! 🎓**
