import { MongoClient  } from "mongodb";
import 'dotenv/config'


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017"


const client = new MongoClient(MONGO_URI)


try{
    await client.connect()
    console.log("mongodb connect...");
    

}catch(err){
    console.log(err)
    process.exit(1)
}


const db = client.db("auth_exam")


export default db
