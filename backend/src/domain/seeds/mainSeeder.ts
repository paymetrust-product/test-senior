
import { DataSource } from 'typeorm'
import { runSeeder, runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension'



export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		await runSeeders(dataSource,{seeds : [
            
        ]})
		//await runSeeder(dataSource,RoleCreatedSeed),
		//await runSeeder(dataSource, UserCreateSeed)
	}
}

export default MainSeeder;