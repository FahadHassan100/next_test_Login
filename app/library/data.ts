import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async () => {

    try {
        connectToDB();
        const users = await Users.find();
        return users;
    } catch (error) {
        console.log(error);
        
    }

}


export const checkfetchUser = async () => {

    try {
        connectToDB();
        const users = await Users.find({
            username: "admin",
            password: "abc123",
            isActive: true
          });
        return users;
    } catch (error) {
        console.log(error);
        
    }

}