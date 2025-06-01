document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('start-btn');
    const supportForm = document.getElementById('support-form');
    const resultSection = document.getElementById('result-section');
    const generatedPrompt = document.getElementById('generated-prompt');
    const newRequestBtn = document.getElementById('new-request-btn');
    const dailyQuote = document.getElementById('daily-quote');
    
    // Frases del día
    const quotes = [
        '"La vida es 10% lo que te ocurre y 90% cómo reaccionas a ello." - Charles R. Swindoll',
        '"Nunca es demasiado tarde para ser lo que podrías haber sido." - George Eliot',
        '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
        '"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito." - Albert Schweitzer',
        '"No cuentes los días, haz que los días cuenten." - Muhammad Ali',
        '"Lo que piensas, te conviertes. Lo que sientes, lo atraes. Lo que imaginas, lo creas." - Buda',
        '"La mejor manera de predecir el futuro es crearlo." - Abraham Lincoln',
        '"El cambio no vendrá si esperamos a otra persona o algún otro momento. Nosotros somos los que hemos estado esperando." - Barack Obama',
        '"No importa lo lento que vayas mientras no te detengas." - Confucio',
        '"La vida es lo que pasa mientras estás ocupado haciendo otros planes." - John Lennon'
    ];
    
    // Mostrar frase aleatoria del día
    dailyQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Evento para comenzar
    startBtn.addEventListener('click', function() {
        welcomeScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
    
    // Evento para enviar el formulario
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const mood = document.getElementById('mood').value;
        const energy = document.getElementById('energy').value;
        const sleep = document.getElementById('sleep').value;
        const stress = document.getElementById('stress').value;
        const support = document.getElementById('support').value;
        const challenge = document.getElementById('challenge').value;
        const message = document.getElementById('message').value;
        
        // Generar el prompt
        const prompt = generatePrompt(mood, energy, sleep, stress, support, challenge, message);
        generatedPrompt.value = prompt;
        
        // Mostrar la sección de resultados
        supportForm.classList.add('hidden');
        resultSection.classList.remove('hidden');
        
        // Desplazarse a la sección de resultados
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Evento para nueva consulta
    newRequestBtn.addEventListener('click', function() {
        resultSection.classList.add('hidden');
        supportForm.classList.remove('hidden');
        supportForm.reset();
        supportForm.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Función para generar el prompt
    function generatePrompt(mood, energy, sleep, stress, support, challenge, message) {
        const moodMap = {
            'excelente': 'excelente',
            'bien': 'bueno',
            'regular': 'regular',
            'mal': 'malo',
            'terrible': 'terrible'
        };
        
        const energyMap = {
            'alta': 'alta energía',
            'normal': 'energía normal',
            'baja': 'baja energía',
            'agotado': 'agotamiento'
        };
        
        const sleepMap = {
            'muy_bien': 'muy bien',
            'bien': 'bien',
            'regular': 'regular',
            'mal': 'mal',
            'poco': 'muy poco'
        };
        
        const stressMap = {
            'nada': 'nada de estrés',
            'poco': 'poco estrés',
            'moderado': 'estrés moderado',
            'mucho': 'mucho estrés',
            'extremo': 'estrés extremo'
        };
        
        const supportMap = {
            'mucho': 'mucho apoyo',
            'algo': 'algo de apoyo',
            'poco': 'poco apoyo',
            'nada': 'ningún apoyo'
        };
        
        const challengeMap = {
            'trabajo': 'desafíos laborales/académicos',
            'relaciones': 'problemas en las relaciones',
            'salud': 'problemas de salud',
            'finanzas': 'dificultades financieras',
            'autoestima': 'problemas de autoestima',
            'otro': 'otros desafíos'
        };
        
        return `Actúa como un consejero compasivo y experto en salud mental. Voy a compartir contigo cómo me siento y me gustaría que me des un mensaje de apoyo, ánimo y aliento personalizado basado en lo que comparto.

Esta es mi situación:
- Estado de ánimo: ${moodMap[mood]}
- Nivel de energía: ${energyMap[energy]}
- Calidad del sueño: ${sleepMap[sleep]}
- Nivel de estrés: ${stressMap[stress]}
- Apoyo social: ${supportMap[support]}
- Desafío principal: ${challengeMap[challenge]}

Esto es lo que quiero compartir contigo:
"${message}"

Por favor, proporcióname:
1. Un mensaje de validación y empatía que muestre que entiendes cómo me siento.
2. Palabras de aliento y apoyo adaptadas a mi situación específica.
3. Un consejo breve pero útil para manejar lo que estoy enfrentando.
4. Una perspectiva positiva o alentadora para ayudarme a ver las cosas de manera diferente si es apropiado.
5. Una frase final motivadora.

Por favor, mantén el tono cálido, compasivo y profesional. Evita clichés y sé genuino en tu respuesta. El mensaje debe ser de aproximadamente 2-3 párrafos.`;
    }
});