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
    const answeredAll = appState.userAnswers.every(answer => answer !== null);
    const selectedAnswer = appState.userAnswers[questionIndex];
    const isLastQuestion = questionIndex === appState.quizQuestions.length - 1;
    
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
            <button type="button" class="option-btn" onclick="selectAnswer(${index})" ${selectedAnswer !== null ? 'disabled' : ''}>${option}</button>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="question-number">Questão ${questionIndex + 1}</div>
        <div class="question-text">${question.question}</div>
        <div class="options">${optionsHTML}</div>
        <div class="quiz-navigation">
            <button type="button" class="btn btn-small" onclick="previousQuestion()" ${questionIndex === 0 ? 'disabled' : ''}>Anterior</button>
            <button type="button" class="btn btn-small" onclick="nextQuestion()" ${questionIndex === appState.quizQuestions.length - 1 ? 'disabled' : ''}>Próxima</button>
            ${isLastQuestion ? `<button type="button" class="btn btn-success" onclick="finishQuiz()" ${answeredAll ? '' : 'disabled'}>Salvar tentativa</button>` : ''}
        </div>
    `;
    
    if (selectedAnswer !== null) {
        const isCorrect = selectedAnswer === question.correct;
        const feedbackTitle = isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta';
        const feedbackIcon = isCorrect ? '[✓]' : '[✗]';

        feedbackArea.classList.remove('hidden', 'correct', 'incorrect');
        feedbackArea.classList.add(isCorrect ? 'correct' : 'incorrect');
        feedbackArea.innerHTML = `
            <div class="feedback-title">${feedbackIcon} ${feedbackTitle}</div>
            <div class="feedback-text"><strong>Justificativa:</strong> ${question.justification}</div>
        `;

        const optionBtns = quizContent.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }
}

function selectAnswer(answerIndex) {
    const questionIndex = appState.currentQuestionIndex;
    appState.userAnswers[questionIndex] = answerIndex;
    renderQuizQuestion();
}

function nextQuestion() {
    if (appState.userAnswers[appState.currentQuestionIndex] === null) {
        alert('Selecione uma resposta antes de prosseguir.');
        return;
    }

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
    const unansweredIndex = appState.userAnswers.findIndex(answer => answer === null);
    if (unansweredIndex !== -1) {
        alert(`Responda todas as questões antes de salvar. Questão ${unansweredIndex + 1} está sem resposta.`);
        appState.currentQuestionIndex = unansweredIndex;
        renderQuizQuestion();
        return;
    }

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
    const resultsReport = document.getElementById('results-report');
    const recommendationText = document.getElementById('recommendation-text');
    
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
    
    const report = generatePerformanceReport(attempt);
    resultsReport.innerHTML = report.summaryHTML;
    recommendationText.innerHTML = report.recommendationHTML;
    
    // Renderizar gráfico
    renderAttemptsChart();
}

function generatePerformanceReport(attempt) {
    const incorrectCount = attempt.total - attempt.score;
    const categoryPerformance = Object.entries(attempt.categoryScores).map(([category, scores]) => ({
        category,
        correct: scores.correct,
        total: scores.total,
        accuracy: Math.round((scores.correct / scores.total) * 100)
    }));
    
    const bestCategory = categoryPerformance.reduce((best, current) => current.accuracy > best.accuracy ? current : best, categoryPerformance[0]);
    const worstCategory = categoryPerformance.reduce((worst, current) => current.accuracy < worst.accuracy ? current : worst, categoryPerformance[0]);
    
    const subjectSuggestions = {
        'Gerência': 'Reveja as Teorias Administrativas, Funções de Planejamento/Organização/Direção/Controle, MASP e a Lei 7.498/86.',
        'Gestão Patrimonial': 'Reforce Classificação de Bens, Depreciação, Controle de Materiais, Codificação e Patrimônio Líquido.'
    };
    
    const lowPerformance = categoryPerformance.filter(subject => subject.accuracy < 70);
    const improvementLines = lowPerformance.length > 0
        ? lowPerformance.map(subject => `
            <div class="improvement-item">
                <strong>${subject.category}:</strong> ${subject.accuracy}% de acertos. ${subjectSuggestions[subject.category] || 'Revise os principais conceitos dessa matéria.'}
            </div>
        `).join('')
        : '<div class="improvement-item">Ótimo! Mantenha seus estudos e revisite os principais pontos para consolidar o conhecimento.</div>';
    
    const overallMessage = attempt.percentage >= 80
        ? 'Excelente desempenho! Você está muito bem nos conteúdos do simulado.'
        : attempt.percentage >= 60
            ? 'Bom resultado! Concentre-se nos temas com menor aproveitamento para melhorar ainda mais.'
            : 'Precisa melhorar: foque especialmente nas matérias com menor acerto para subir sua nota.';
    
    const summaryHTML = `
        <div class="report-card">
            <div class="report-line"><strong>Acertos:</strong> ${attempt.score}</div>
            <div class="report-line"><strong>Erros:</strong> ${incorrectCount}</div>
            <div class="report-line"><strong>Melhor matéria:</strong> ${bestCategory.category} (${bestCategory.accuracy}%)</div>
            <div class="report-line"><strong>Mais atenção:</strong> ${worstCategory.category} (${worstCategory.accuracy}%)</div>
        </div>
        <div class="improvement-list">
            <h4>O que melhorar por assunto</h4>
            ${improvementLines}
        </div>
    `;

    return {
        summaryHTML,
        recommendationHTML: `<p><strong>Recomendação:</strong> ${overallMessage}</p>`
    };
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
                <div class="history-actions">
                    <button type="button" class="btn btn-danger btn-small" onclick="deleteAttempt(${index})">Excluir</button>
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
window.deleteAttempt = deleteAttempt;

// ===== RESET DE DADOS (OPCIONAL) =====

function deleteAttempt(index) {
    if (confirm('Deseja excluir esta tentativa do histórico? Esta ação não pode ser desfeita.')) {
        appState.quizHistor.splice(index, 1);
        saveQuizHistory();
        renderHistoryScreen();
    }
}

function clearHistory() {
    if (confirm('Deseja limpar todo o histórico de tentativas? Esta ação não pode ser desfeita.')) {
        appState.quizHistor = [];
        saveQuizHistory();
        renderHistoryScreen();
    }
}
