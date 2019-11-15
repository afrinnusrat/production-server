'use strict';

import { AbstractEntity } from '../models/abstract.entity';

export class AbstractDto {
    id: number;
    uuid: string;

    constructor(entity: AbstractEntity) {
        this.id = entity.id;
        this.uuid = entity.uuid;
    }
}
