import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultDropDownListComponent } from './default.component';
import { GroupAndIconDropDownListComponent } from './grouping-icon.component';
import { DataBindingDropDownListComponent } from './data-binding.component';
import { TemplateDropDownListComponent } from './template.component';
import { CascadingDropDownListComponent } from './cascading.component';
import { FilteringDropDownListComponent } from './filtering.component';
import { DiacriticsFilteringDropDownListComponent } from './diacritics-filtering.component';
import { InlineDropDownListComponent } from './inline.component';
import { SharedModule } from '../common/shared.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TemplateDrivenDropDownListComponent } from './template-driven.component';
import { ReactiveFormDropDownListComponent } from './reactive-form.component';
import { BrowserModule } from '@angular/platform-browser';
export const dropdownlistAppRoutes: Object[] = [
    { path: ':theme/drop-down-list/default', component: DefaultDropDownListComponent, name: 'Default Functionalities', description: 'This demo for Syncfusion angular drop-down list component shows the default rendering with minimum configuration.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/grouping-icon', component: GroupAndIconDropDownListComponent, name: 'Grouping and Icons', description: 'This demo shows the grouping based on different categories with individual header and icon support in the Syncfusion angular drop-down list component.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/data-binding', component: DataBindingDropDownListComponent, name: 'Data Binding', description: 'This demo for Syncfusion angular drop-down list component shows how to bind with  local data source and how to fetch data from remote data service.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/template', component: TemplateDropDownListComponent, name: 'Template', description: 'This demo explains on how to customize the appearance of each item in the pop-up list using template option in Syncfusion angular drop-down list component.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/filtering', component: FilteringDropDownListComponent, name: 'Filtering', description: 'This demo explains the filtering functionalities of the Syncfusion angular drop-down list component.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/cascading', component: CascadingDropDownListComponent, name: 'Cascading', description: 'This demo for Syncfusion angular drop-down list component shows the cascadin support.', order: '01',
		category: 'Dropdown List' },
    { path: ':theme/drop-down-list/inline', component: InlineDropDownListComponent, name: 'Inline', category: 'Dropdown List', description: 'This demo for Syncfusion angular drop-down list component demonstrates to render the DropDownList component in line with other content.', order: '01' },
    {
        path: ':theme/drop-down-list/diacritics-filtering', component: DiacriticsFilteringDropDownListComponent, description: 'This demo explains the diacritics filter functionality of the Syncfusion angular drop-down list component.', order: '01',
        name: 'Diacritics Filtering', category: 'Dropdown List'
    },
    { path: ':theme/drop-down-list/template-driven', component: TemplateDrivenDropDownListComponent, name: 'Template Driven', description: 'This demo explains the template-driven forms support of the Syncfusion angular drop-down list component.', order: '02',
      category: 'Form Support' },
    { path: ':theme/drop-down-list/reactive-form', component: ReactiveFormDropDownListComponent, name: 'Reactive Form', description: 'This demo explains the reactive forms support of the Syncfusion angular drop-down list component.', order: '02',
		category: 'Form Support' }

];

export const DropDownListRouter: ModuleWithProviders = RouterModule.forChild(dropdownlistAppRoutes);

@NgModule({
    imports: [DropDownListRouter, SharedModule, FormsModule, ReactiveFormsModule,BrowserModule],
    declarations: [
        DefaultDropDownListComponent,
        GroupAndIconDropDownListComponent,
        DataBindingDropDownListComponent,
        TemplateDropDownListComponent,
        CascadingDropDownListComponent,
        FilteringDropDownListComponent,
        InlineDropDownListComponent,
        DiacriticsFilteringDropDownListComponent,
        TemplateDrivenDropDownListComponent,
        ReactiveFormDropDownListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropDownListSampleModule {
}