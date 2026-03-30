// ===== GERENCIAMENTO DE ESTADO =====

let appState = {
    currentScreen: 'home',
    currentContentType: null,
    quizStarted: false,
    currentQuestionIndex: 0,
    userAnswers: [],
    quizHistor: [],
    chart: null,
    quizCategory: null,
    quizQuestions: [],
    navigationHistory: ['home']
};

// ===== INICIALIZAÇÃO =====

document.addEventListener('DOMContentLoaded', () => {
    loadQuizHistory();
    renderHome();
    
    // Listener para botão back do navegador
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.screen) {
            showScreenDirect(e.state.screen, e.state.contentType);
        }
    });
});

// ===== NAVEGAÇÃO ENTRE TELAS =====

function showScreen(screenId, contentType = null) {
    // Adicionar ao histórico do navegador
    const state = { screen: screenId, contentType: contentType };
    window.history.pushState(state, '', window.location.href);
    
    showScreenDirect(screenId, contentType);
}

function showScreenDirect(screenId, contentType = null) {
    // Ocultar todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Mostrar a tela específica
    const targetScreen = document.getElementById(screenId);
    if (!targetScreen) {
        console.error(`Tela não encontrada: ${screenId}`);
        return;
    }

    targetScreen.classList.add('active');
    appState.currentScreen = screenId;
    appState.currentContentType = contentType;
    
    // Renderizar conteúdo específico
    if (screenId === 'content-screen' && contentType) {
        renderContent(contentType);
    } else if (screenId === 'history-screen') {
        renderHistoryScreen();
    }
}


function backToHome() {
    showScreen('home-screen');
}

function exitQuiz() {
    if (appState.quizStarted) {
        if (confirm('Deseja sair do simulado? Seu progresso será perdido!')) {
            appState.quizStarted = false;
            showScreen('quiz-select-screen');
        }
    } else {
        showScreen('quiz-select-screen');
    }
}

// ===== HOME SCREEN =====

function renderHome() {
    showScreen('home-screen');
}

// ===== CONTENT SCREEN (ESTUDO) =====

function renderContent(contentType) {
    const content = studyContent[contentType];
    const contentBody = document.getElementById('content-body');
    const contentTitle = document.getElementById('content-title');

    if (!content) {
        console.error('Conteúdo não encontrado:', contentType);
        contentTitle.textContent = 'Conteúdo indisponível';
        contentBody.innerHTML = '<p>Não foi possível carregar o conteúdo solicitado.</p>';
        return;
    }

    contentTitle.textContent = content.title;
    
    let html = '';
    
    content.sections.forEach(section => {
        html += `
            <div class="content-section">
                <h2>${section.title}</h2>
        `;
        
        if (section.subsections) {
            section.subsections.forEach(sub => {
                html += `
                    <h3>${sub.title}</h3>
                    <p>${sub.content}</p>
                `;
            });
        } else if (section.content) {
            html += `<p>${section.content}</p>`;
        }
        
        html += `</div>`;
    });
    
    contentBody.innerHTML = html;
}

// ===== QUIZ SCREEN =====

function startQuizByCategory(category) {
    appState.quizCategory = category;
    
    if (category === 'Ambas') {
        appState.quizQuestions = quizData;
    } else if (category === 'Gerência') {
        appState.quizQuestions = quizData.filter(q => q.category === 'Gerência');
    } else if (category === 'Gestão Patrimonial') {
        appState.quizQuestions = quizData.filter(q => q.category === 'Gestão Patrimonial');
    }
    
    appState.quizStarted = true;
    appState.currentQuestionIndex = 0;
    appState.userAnswers = new Array(appState.quizQuestions.length).fill(null);
    
    showScreen('quiz-screen');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const questionIndex = appState.currentQuestionIndex;
    const question = appState.quizQuestions[questionIndex];
    
    // Atualizar progresso
    const progressPercentage = ((questionIndex + 1) / appState.quizQuestions.length) * 100;
    document.getElementById('quiz-counter').textContent = `Questão ${questionIndex + 1} de ${appState.quizQuestions.length}`;
    document.getElementById('progress-fill').style.width = progressPercentage + '%';
    
    // Renderizar questão
    const quizContent = document.getElementById('quiz-content');
    const feedbackArea = document.getElementById('feedback-area');
    
    feedbackArea.classList.add('hidden');
    feedbackArea.innerHTML = '';
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" onclick="selectAnswer(${index})">${option}</button>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="question-number">Questão ${questionIndex + 1}</div>
        <div class="question-text">${question.question}</div>
        <div class="options">${optionsHTML}</div>
        <div class="quiz-navigation">
            <button class="btn btn-small" onclick="previousQuestion()" ${questionIndex === 0 ? 'disabled' : ''}>Anterior</button>
            <button class="btn btn-small" onclick="nextQuestion()" ${questionIndex === appState.quizQuestions.length - 1 ? 'disabled' : ''}>Próxima</button>
        </div>
    `;
}

function selectAnswer(answerIndex) {
    const questionIndex = appState.currentQuestionIndex;
    const question = appState.quizQuestions[questionIndex];
    
    appState.userAnswers[questionIndex] = answerIndex;
    
    // Mostrar feedback
    const feedbackArea = document.getElementById('feedback-area');
    const isCorrect = answerIndex === question.correct;
    
    feedbackArea.classList.remove('hidden', 'correct', 'incorrect');
    feedbackArea.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    const feedbackTitle = isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta';
    const feedbackIcon = isCorrect ? '[✓]' : '[✗]';
    
    feedbackArea.innerHTML = `
        <div class="feedback-title">${feedbackIcon} ${feedbackTitle}</div>
        <div class="feedback-text"><strong>Justificativa:</strong> ${question.justification}</div>
    `;
    
    // Desabilitar botões de opção
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Scroll para feedback
    feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
    if (appState.currentQuestionIndex < appState.quizQuestions.length - 1) {
        appState.currentQuestionIndex++;
        renderQuizQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        renderQuizQuestion();
    }
}

function finishQuiz() {
    // Calcular score
    let correctAnswers = 0;
    let categoryScores = {};
    
    appState.quizQuestions.forEach((question, index) => {
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = { correct: 0, total: 0 };
        }
        
        categoryScores[question.category].total++;
        
        if (appState.userAnswers[index] === question.correct) {
            correctAnswers++;
            categoryScores[question.category].correct++;
        }
    });
    
    // Salvar tentativa no histórico
    const attempt = {
        date: new Date().toLocaleString('pt-BR'),
        category: appState.quizCategory,
        score: correctAnswers,
        total: appState.quizQuestions.length,
        percentage: Math.round((correctAnswers / appState.quizQuestions.length) * 100),
        categoryScores: categoryScores,
        answers: [...appState.userAnswers]
    };
    
    appState.quizHistor.push(attempt);
    saveQuizHistory();
    
    // Mostrar resultados
    showResultsScreen(attempt);
}

// ===== RESULTS SCREEN =====

function showResultsScreen(attempt) {
    showScreen('results-screen');
    
    const finalScore = document.getElementById('final-score');
    const scorePercentage = document.getElementById('score-percentage');
    const resultsStats = document.getElementById('results-stats');
    
    finalScore.textContent = `${attempt.score}/${attempt.total}`;
    scorePercentage.textContent = `${attempt.percentage}%`;
    
    let statsHTML = '';
    
    Object.entries(attempt.categoryScores).forEach(([category, scores]) => {
        statsHTML += `
            <div class="stat-item">
                <span class="stat-label">${category}</span>
                <span class="stat-value">${scores.correct}/${scores.total}</span>
            </div>
        `;
    });
    
    resultsStats.innerHTML = statsHTML;
    
    // Renderizar gráfico
    renderAttemptsChart();
}

// ===== GRÁFICO DE TENTATIVAS =====

function renderAttemptsChart() {
    const ctx = document.getElementById('attempts-chart').getContext('2d');
    
    if (appState.chart) {
        appState.chart.destroy();
    }
    
    const labels = appState.quizHistor.map((attempt, index) => `Tentativa ${index + 1}`);
    const data = appState.quizHistor.map(attempt => attempt.percentage);
    
    appState.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Desempenho (%)',
                    data: data,
                    borderColor: '#DB7093',
                    backgroundColor: 'rgba(219, 112, 147, 0.1)',
                    fills: true,
                    tension: 0.4,
                    pointBackgroundColor: '#DB7093',
                    pointBorderColor: '#FFB6C1',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#5a5a5a'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(219, 112, 147, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(219, 112, 147, 0.1)'
                    }
                }
            }
        }
    });
}

// ===== HISTORY SCREEN =====

function renderHistoryScreen() {
    const historyContent = document.getElementById('history-content');
    
    if (appState.quizHistor.length === 0) {
        historyContent.innerHTML = `
            <div class="history-empty">
                <p>Nenhuma tentativa registrada ainda.</p>
                <p>Complete o simulado para ver seu histórico aqui!</p>
            </div>
        `;
        return;
    }
    
    let historyHTML = '<div class="history-list">';
    
    appState.quizHistor.forEach((attempt, index) => {
        const performance = attempt.percentage >= 70 ? '[ Bom ]' : attempt.percentage >= 50 ? '[ Médio ]' : '[ Precisa melhorar ]';
        
        historyHTML += `
            <div class="history-item">
                <div class="history-info">
                    <div class="history-date">Tentativa ${index + 1} - ${attempt.date}</div>
                    <div class="history-category">${attempt.category || 'Completo'}</div>
                    <div class="history-score">Score: ${attempt.score}/${attempt.total}</div>
                    <div class="history-percentage">${attempt.percentage}% - ${performance}</div>
                </div>
            </div>
        `;
    });
    
    historyHTML += '</div>';
    historyContent.innerHTML = historyHTML;
}

// ===== LOCALSTORAGE =====

function saveQuizHistory() {
    localStorage.setItem('quizHistor', JSON.stringify(appState.quizHistor));
}

function loadQuizHistory() {
    const saved = localStorage.getItem('quizHistor');
    if (saved) {
        try {
            appState.quizHistor = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar histórico:', e);
            appState.quizHistor = [];
        }
    }
}

// Expor funções globais para handlers inline em HTML
window.showScreen = showScreen;
window.backToHome = backToHome;
window.exitQuiz = exitQuiz;
window.startQuizByCategory = startQuizByCategory;
window.selectAnswer = selectAnswer;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;

// ===== RESET DE DADOS (OPCIONAL) =====

function clearHistory() {
    if (confirm('Deseja limpar todo o histórico de tentativas? Esta ação não pode ser desfeita.')) {
        appState.quizHistor = [];
        saveQuizHistory();
        renderHistoryScreen();
    }
}
