import mongoose from "mongoose";

export const connectToDB = async () => {

    const connection:any = {};

    try {

        if(connection.isConnected) return 

        const db = await mongoose.connect('mongodb://127.0.0.1:27017/TestingPro1');
        connection.isConnected = db.connections[0].readyState;
      } catch (error:any) {
        console.log("error in connections")
        throw new Error(error);

      }

}