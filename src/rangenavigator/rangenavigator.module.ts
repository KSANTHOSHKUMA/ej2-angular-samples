/**
 * Range Navigator Control
 */
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartAllModule, RangeNavigatorAllModule, ChartAnnotationService } from '@syncfusion/ej2-angular-charts';
import { ButtonAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DefaultComponent } from './default.component';
import { LightWeightComponent } from './light-weight.component';
import { DateTimeComponent } from './date-time.component';
import { DoubleComponent } from './double.component';
import { LogarthmicComponent } from './logarithmic.component';
import { MultilevelComponent } from './multilevel.component';
import { FilterComponent } from './filter.component';
import { RTLComponent } from './rtl.component';
import { RangeNavigatorExportComponent } from './export.component';
import { RangeNavigatorEmptyPointComponent } from './emptydata.component';
import { PeriodicSelectorRNComponent } from './period-default.component';
import { StockChartRNComponent } from './stock-chart.component';

export const rangeNavigatorAppRoutes: Object[] = [
    { path: ':theme/rangenavigator/default', component: DefaultComponent, name: 'Default', order: '01', category: 'Range Selector' },
    {
        path: ':theme/rangenavigator/light-weight', component: LightWeightComponent,
        name: 'Lightweight', order: '01', category: 'Range Selector'
    },
    { path: ':theme/rangenavigator/date-time', component: DateTimeComponent, name: 'Date Time', order: '02', category: 'Axis' },
    { path: ':theme/rangenavigator/double', component: DoubleComponent, name: 'Numeric Axis', order: '02', category: 'Axis' },
    { path: ':theme/rangenavigator/logarithmic', component: LogarthmicComponent, name: 'Logarithmic Axis', order: '02', category: 'Axis' },
    { path: ':theme/rangenavigator/multilevel', component: MultilevelComponent, name: 'Multilevel Labels', order: '02', category: 'Axis' },
    {
        path: ':theme/rangenavigator/period-default', component: PeriodicSelectorRNComponent,
        name: 'Default', order: '03', category: 'Period Selector'
    },
    {
        path: ':theme/rangenavigator/stock-chart', component: StockChartRNComponent,
        name: 'Stock Chart', order: '03', category: 'Period Selector'
    },
    {
        path: ':theme/rangenavigator/emptydata', component: RangeNavigatorEmptyPointComponent,
        name: 'Empty Points', order: '04', category: 'Customization'
    },
    {
        path: ':theme/rangenavigator/filter', component: FilterComponent, name: 'Filter',
        order: '04', category: 'Customization'
    },
    {
        path: ':theme/rangenavigator/export', component: RangeNavigatorExportComponent,
        name: 'Print and Export', order: '05', category: 'Print and Export'
    },
    { path: ':theme/rangenavigator/rtl', component: RTLComponent, name: 'RTL', order: '06', category: 'RTL' }
];

export const rangeNavigatorRouter: ModuleWithProviders = RouterModule.forChild(rangeNavigatorAppRoutes);

let declarations: Type<Object>[] = [DefaultComponent, LightWeightComponent, DateTimeComponent, DoubleComponent, LogarthmicComponent,
    MultilevelComponent, FilterComponent, RTLComponent, RangeNavigatorExportComponent,
    RangeNavigatorEmptyPointComponent, PeriodicSelectorRNComponent, StockChartRNComponent];
@NgModule({
    imports: [
        rangeNavigatorRouter, ChartAllModule, RangeNavigatorAllModule, GridAllModule,
        ButtonAllModule, SwitchAllModule
    ],
    exports: [],
    declarations: declarations,
    providers: [ChartAnnotationService]
})
export class RangeNavigatorSampleModule {
}