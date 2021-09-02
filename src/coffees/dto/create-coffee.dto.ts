import { IsString } from 'class-validator'
import { Flavor } from '../entities/flavor.entity'

export class CreateCoffeeDto {
	@IsString()
	readonly title: string

	@IsString()
	readonly brand: string

	@IsString({ each: true })
	readonly flavors: Flavor[]
}
