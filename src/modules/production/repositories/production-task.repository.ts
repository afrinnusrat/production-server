import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ProductionTaskEntity } from '../models/production-task.entity';

@EntityRepository(ProductionTaskEntity)
export class ProductionTaskRepository extends Repository<
    ProductionTaskEntity
> {}
