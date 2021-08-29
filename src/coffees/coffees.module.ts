import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CoffeeController } from './coffee.controller'
import { CoffeesService } from './coffees.service'
import { Coffee } from './entities/coffee.entity'
import { Flavor } from './entities/flavor.entiry'
import { Event } from '../events/entities/event.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
	controllers: [CoffeeController],
	providers: [CoffeesService]
})
export class CoffeesModule {}
