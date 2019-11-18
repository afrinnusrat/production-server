import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ProductionMachineHistoryEntity } from '../models/production-machine-history.entity';

@EntityRepository(ProductionMachineHistoryEntity)
export class ProductionMachineHistoryRepository extends Repository<
    ProductionMachineHistoryEntity
> {}
