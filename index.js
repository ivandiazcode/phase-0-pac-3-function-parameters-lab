
const name = 'Josh'
function introduction(name) {
    return'Hi, my name is ' + name + '.';
}

function introductionWithLanguage(name, language=Ember.js) {
    return 'Hi, my name is ' + name + ' and I am learning to program in ' + language +'.';
}
const language = 'JavaScript'
function introductionWithLanguageOptional(name = Gracie, language='JavaScript') {
    return 'Hi, my name is ' + name + ' and I am learning to program in ' + language +'.';
}
