import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'add', loadChildren: './add/add.module#AddPageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        IonicStorageModule.forRoot()
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
