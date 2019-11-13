'use strict';

import { AbstractEntity } from '../abstract.entity';

export class AbstractDto {
    id: number;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(entity: AbstractEntity) {
        this.id = entity.id;
        this.uuid = entity.uuid;
        this.createdAt = entity.createdAt;
        this.updatedAt = entity.updatedAt;
    }
}
