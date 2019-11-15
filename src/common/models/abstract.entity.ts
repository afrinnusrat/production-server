'use strict';

import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    Generated,
} from 'typeorm';

import { UtilsService } from '../../providers/services/utils.service';
import { AbstractDto } from '../dto/abstract.dto';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
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
