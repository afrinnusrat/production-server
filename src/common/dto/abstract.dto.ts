'use strict';

import { AbstractEntity } from '../models/abstract.entity';

export class AbstractDto {
    uuid: string;

    constructor(entity: AbstractEntity) {
        this.uuid = entity.uuid;
    }
}
