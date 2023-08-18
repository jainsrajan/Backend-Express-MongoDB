const mongoose = require('mongoose')
const connect_to_db = async = () =>{
 mongoose.connect(process.env.MongoURL)

 .then((conn)=>{
    console.log(`Connect to database ${conn.connection.host}`)
 })

 .catch((err)=>{
     console.log(err)
     process.exit(1)
 })
}

module.exports = connect_to_db