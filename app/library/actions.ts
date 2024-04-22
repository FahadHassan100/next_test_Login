'use server'
import { redirect } from "next/navigation";
import { signIn } from "../auth"
import { isRedirectError } from "next/dist/client/components/redirect";

export const authentacate = async (formData:any) => {

    const {username, password} = Object.fromEntries(formData)
    //console.log(username, password);

    try {        
        await signIn("credentials", {username, password});
    } catch (error) {
        console.log(error)
        throw error
    }

}


export const register = async (formData:any) => {

    const {client_name, email, password} = Object.fromEntries(formData);

    console.log(client_name, email, password);

    redirect('/');
    //redirect(`/dashboard/clients/${Client_ID}`);

}