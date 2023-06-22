import { RoleCreatedSeed } from './role.create.seeder';

import { DataSource } from 'typeorm'
import { runSeeder, runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { UserCreateSeed } from './user.create.seeder';



export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		await runSeeders(dataSource,{seeds : [
            RoleCreatedSeed,
			UserCreateSeed
        ]})
		//await runSeeder(dataSource,RoleCreatedSeed),
		//await runSeeder(dataSource, UserCreateSeed)
	}
}

export default MainSeeder;