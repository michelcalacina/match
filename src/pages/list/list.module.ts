import { NgModule } from '@angular/core';
import { List } from './list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [List],
    imports: [IonicPageModule.forChild(List)]
})
export class ListPageModule {}