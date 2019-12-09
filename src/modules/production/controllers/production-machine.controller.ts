'use strict';

import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { RolesGuard } from '../../../guards/roles.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { ProductionMachinesPageOptionsDto } from '../dto/production-machines-page-options.dto';
import { ProductionMachinesPageDto } from '../dto/production-machines-page.dto';
import { ProductionMachineService } from '../services/production-machine.service';
import { ProductionMachinesHistoryPageDto } from '../dto/production-machines-history-page.dto';
import { ProductionMachinesHistoryPageOptionsDto } from '../dto/production-machines-history-page-options.dto';

@Controller('production')
@ApiTags('Production')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class ProductionMachineController {
    constructor(private _productionMachineService: ProductionMachineService) {}

    @Get('machines')
    @Roles(RoleType.Master, RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Get machines list',
        type: ProductionMachinesPageDto,
    })
    productionMachines(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: ProductionMachinesPageOptionsDto,
    ): Promise<ProductionMachinesPageDto> {
        return this._productionMachineService.getMachines(pageOptionsDto);
    }

    @Get('machines/history')
    @Roles(RoleType.Master, RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Get machines history list',
        type: ProductionMachinesHistoryPageDto,
    })
    productionMachinesHistory(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: ProductionMachinesHistoryPageOptionsDto,
    ): Promise<ProductionMachinesHistoryPageDto> {
        return this._productionMachineService.getMachinesHistory(
            pageOptionsDto,
        );
    }
}
