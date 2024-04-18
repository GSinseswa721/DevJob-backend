// import { PrismaClient } from '@prisma/client/edge'
// const prisma = new PrismaClient()


// async function main(){
//    const user = await prisma.user.create({data: {name: "Gogo"}})
//    console.log(user) 
// }

// main()
//    .catch(e =>{
//      console.error(e.message)
//    })
//    .finally(async () => {
//     await prisma.$disconnect()
//    })
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
   const users = await prisma.user.findMany()
   console.log(users) 
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
