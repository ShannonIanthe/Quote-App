var quotes = [
    '\"Me no se.\"\n',
    '\"Qué hay que hacer?!\"\n',
    '\"No he traído el worbú.\"\n',
    '\"Qué ha dicho?\"\n',
    '\"Teacher! I finish!\"\n',
    '\"Dios no existe!.\"\n',
    '\"Profé, do you espeak espanish?\"\n',
    '\"HOMBRRREEEE!\"\n',
    '\"Tomaaaaaa!!!!!\"\n',
    '\"En qué página estamos?\"\n',
    '\"No entiendo nada.\"\n',
    '\"Cuánto falta para ir al patio/recreo?\"\n',
    '\"Qué os calleís!\"\n',
    '\"I\'m fine thank you and you.\"\n',
    '\"No sé cómo decirlo en inglesss.\"\n',
    '\"CALLAOS!\"\n',
    '\"¿Qué ha dicho?\"\n',
    '\"Hostía el worbu!!\"\n',
    '\"¿Wow Pero que es ésto?\"\n',
    '\"JUAN ME DAS LA AGENDA Y TE VAS FUERA!\"\n',
    '\"JAVI PARAAAA TIOOOOO!\"\n',
    '\"Teacher ahora que hago?\"\n',
    '\"Can I go to the bathroom, pis?\"\n',
    '\"You very face.\"\n',
    '\"Tengo cacas\"\n'
]

Math.floor(Math.random() * (max - min + 1)) + min;
var randomNumber = Math.floor(Math.random()*quotes.length);
document.getElementById('quotes').innerHTML = quotes[randomNumber];
function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

