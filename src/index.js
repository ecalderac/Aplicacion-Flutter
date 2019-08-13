const app = require('./app');
const { connect } = require('./database')

async function main(){
    //conexion base de datos
    await connect();
    //aplicacion de express
    await app.listen(4000);
    console.log('Server on port 4000:Conectado');
}

main();