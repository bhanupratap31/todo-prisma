import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            email: username, 
            password, 
            firstName, 
            lastName
        }
    })
    console.log(res);
}




interface UpdateParams{
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams){
    const res = await prisma.user.update({
        where: {email: username}, 
        data: {
            firstName, 
            lastName
        }
    })
    console.log(res);
}



async function deleteUser(username: string){
    const res = await prisma.user.delete({
        where: {email: username}
    })
    console.log(res); 
}


insertUser("bhanups@gmail.com", "bhanu", "Bhanu", "Pratap");
updateUser("bhanups@gmail.com", {firstName: "bhanups", lastName: "prataps"});
deleteUser("bhanups@gmail.com");