const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async register(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = {
          email,
          password: hashedPassword
        }

        const user = await prisma.user.create({
          data: userData
        });
        return user;
      },

      async login(email, password){
        const user = prisma.user.findUniqueOrThrow({
          where: { email },
        });
        const credentialsValid = await bcrypt.compare(password, user.password);
        if (!credentialsValid) throw Error('Invalid Credentials');
        return user;
      }
    }
  }
});

module.exports = prisma;