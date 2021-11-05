const port = process.env.PORT || 3000;
const app = require('./app');

const init = async () => {
    try{
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(error){
        console.log(error);
    }
}

init();