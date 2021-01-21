const EXPRESS = require('express');
const PORT = 3000;

APP.set('view engine', 'ejs');

APP.use(EXPRESS.static('public'));
APP.use(BODY_PARSER.urlencoded({extended:false}));
APP.use(BODY_PARSER.json());

APP.get("/", function(req,res){
    res.send('ok');
});

APP.listen(PORT,function(erro){
    console.log(`Servidor rodando na porta ${PORT}`);
});