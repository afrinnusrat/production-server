'use strict';

import { IAbstract } from '../interfaces/abstract.interface';

export class AbstractDto {
    id: number;
    uuid: string;

    constructor(abstract: IAbstract) {
        this.id = abstract.id;
        this.uuid = abstract.uuid;
    }
}
