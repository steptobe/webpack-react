function generateText(){
    let element = document.createElement('h2');
    element.innerHTML = 'Hello h2 world';
    return element;
}

module.exports = generateText;