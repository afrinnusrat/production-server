import { Injectable } from '@nestjs/common';
import { ProductionMachineRepository } from '../repositories/production-machine.repository';
import { PageMetaDto } from 'common/dto/page-meta.dto';
import { ProductionMachinesPageOptionsDto } from '../dto/production-machines-page-options.dto';
import { ProductionMachinesPageDto } from '../dto/production-machines-page.dto';
import { ProductionMachinesHistoryPageOptionsDto } from '../dto/production-machines-history-page-options.dto';
import { ProductionMachinesHistoryPageDto } from '../dto/production-machines-history-page.dto';
import { ProductionMachineHistoryRepository } from '../repositories/production-machine-history.repository';

@Injectable()
export class ProductionMachineService {
    constructor(
        public readonly productionMachineRepository: ProductionMachineRepository,
        public readonly productionMachineHistoryRepository: ProductionMachineHistoryRepository,
    ) {}

    async getMachines(
        pageOptionsDto: ProductionMachinesPageOptionsDto,
    ): Promise<ProductionMachinesPageDto> {
        const queryBuilder = this.productionMachineRepository.createQueryBuilder(
            'productionMachine',
        );
        const [productionMachines, productionMachinesCount] = await queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)
            .getManyAndCount();

        const pageMetaDto = new PageMetaDto({
            pageOptionsDto,
            itemCount: productionMachinesCount,
        });
        return new ProductionMachinesPageDto(
            productionMachines.toDtos(),
            pageMetaDto,
        );
    }

    async getMachinesHistory(
        pageOptionsDto: ProductionMachinesHistoryPageOptionsDto,
    ): Promise<ProductionMachinesHistoryPageDto> {
        const queryBuilder = this.productionMachineHistoryRepository.createQueryBuilder(
            'productionMachinesHistory',
        );
        const [
            productionMachinesHistory,
            productionMachinesHistoryCount,
        ] = await queryBuilder
            .leftJoinAndSelect('productionMachinesHistory.user', 'user')
            .leftJoinAndSelect(
                'productionMachinesHistory.productionTask',
                'productionTask',
            )
            .leftJoinAndSelect(
                'productionMachinesHistory.productionMachine',
                'productionMachine',
            )
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)
            .getManyAndCount();

        const pageMetaDto = new PageMetaDto({
            pageOptionsDto,
            itemCount: productionMachinesHistoryCount,
        });
        return new ProductionMachinesHistoryPageDto(
            productionMachinesHistory.toDtos(),
            pageMetaDto,
        );
    }
}
