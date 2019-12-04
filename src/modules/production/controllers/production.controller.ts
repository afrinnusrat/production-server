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
    Post,
    Body,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiResponse,
    ApiTags,
    ApiOkResponse,
} from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { RolesGuard } from '../../../guards/roles.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { ProductionMachinesPageOptionsDto } from '../dto/production-machines-page-options.dto';
import { ProductionMachinesPageDto } from '../dto/production-machines-page.dto';
import { ProductionService } from '../services/production.service';
import { ProductionTasksPageDto } from '../dto/production-tasks-page.dto';
import { ProductionTasksPageOptionsDto } from '../dto/production-tasks-page-options.dto';
import { ProductionMachinesHistoryPageDto } from '../dto/production-machines-history-page.dto';
import { ProductionMachinesHistoryPageOptionsDto } from '../dto/production-machines-history-page-options.dto';

@Controller('production')
@ApiTags('Production')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class ProductionController {
    constructor(private _productionService: ProductionService) {}

    @Get('/machines')
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
        return this._productionService.getMachines(pageOptionsDto);
    }

    @Get('/machines/history')
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
        return this._productionService.getMachinesHistory(pageOptionsDto);
    }

    @Get('/tasks')
    @Roles(RoleType.Master, RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Get tasks list',
        type: ProductionTasksPageDto,
    })
    productionTasks(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: ProductionTasksPageOptionsDto,
    ): Promise<ProductionTasksPageDto> {
        return this._productionService.getTasks(pageOptionsDto);
    }

    //todo: make create task controller
    // @Post('/tasks')
    // @Roles(RoleType.Master, RoleType.Admin)
    // @HttpCode(HttpStatus.OK)
    // @ApiOkResponse({
    //     // type: CreateProductionTaskPayloadDto,
    //     description: 'Successfully created',
    // })
    // productionTaskCreate(
    //     @Body() productionTaskDto: NewProductionTaskDto,
    // ): Promise<CreateTaskPayloadDto> {
    //     return this._productionService.createTask(productionTaskCreateDto);
    // }
}
