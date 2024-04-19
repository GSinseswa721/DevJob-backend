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
import express from "express";
import router from './routes/user';


export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});


const app = express();
const port = 8000;

// async function main(){
//    const users = await prisma.user.findMany()
//    console.log(users) 
// }
const main = async () => {
  app.use(express.json());
  app.use('/api/users', router);

  // Register API routes
  app.use(router);

  // // Catch unregistered routes
  // app.all("*", (req: Request, res: Response) => {
  //   return  responseError(res, 404, `Route ${req.originalUrl} not found`);
  // });

  // app.listen(port, () => {
  //     console.log(`Server is listening on port ${port}`);
  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
}

// main()
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
main()
    .then(async () => {
        await prisma.$connect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
