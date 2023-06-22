import { Connection, DataSource, getManager } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../entities/user";
import { userDto } from "../dto/user.dto";
import { hash } from "../../utils/encryption";
import { Role } from "../entities/role";



export class UserCreateSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {

    const userRepository = dataSource.getRepository(User);
    const roleRepository = dataSource.getRepository(Role);

    const role =  await roleRepository.findOneBy({
      flag : 1
    });

    
    if(!!role) {

      const userData : userDto = {
        firstName: "PaymeTrust",
        lastName: "Will",
        email: "user@gmail.com",
        password: hash("1234"),
        role: role.id,
      };
  
      const userExists = await userRepository.findOneBy({
        email: userData.email,
      });
  
      if (!userExists) {
        const newUser = userRepository.create(userData as any);
        await userRepository.save(newUser);
      }
    }
   
  }
}