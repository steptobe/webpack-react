let sub = require('./sub');
require('./main.scss')
let app = document.createElement('div');
app.innerHTML = '<h1>Hello world</h1>';
app.appendChild(sub());
document.body.appendChild(app);