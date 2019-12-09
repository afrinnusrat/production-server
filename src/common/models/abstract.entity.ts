'use strict';

import { PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

import { UtilsService } from '../../providers/services/utils.service';
import { AbstractDto } from '../dto/abstract.dto';
import { IAbstract } from '../interfaces/abstract.interface';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto>
    implements IAbstract {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @Generated('uuid')
    uuid: string;

    abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;

    toDto(options?: any) {
        return UtilsService.toDto(this.dtoClass, this, options);
    }
}
