import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ProductionMachineEntity } from '../models/production-machine.entity';

@EntityRepository(ProductionMachineEntity)
export class ProductionMachineRepository extends Repository<
    ProductionMachineEntity
> {}
