import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';


import { AgriculturaComponent        } from   './pages/agricultura/agricultura.component'             ;
import { AvisoComponent              } from   './pages/aviso/aviso.component'                         ;
import { CarboneraComponent          } from   './pages/carbonera/carbonera.component'                 ;
import { ContactoComponent           } from   './pages/contacto/contacto.component'                   ;
import { DetailagriculturaComponent  } from   './pages/detailagricultura/detailagricultura.component' ;
import { EmbasadoraComponent         } from   './pages/embasadora/embasadora.component'               ;
import { FormganaderiaComponent      } from   './pages/formganaderia/formganaderia.component'         ;
import { GanaderiaComponent          } from   './pages/ganaderia/ganaderia.component'                 ;
import { HomeComponent               } from   './pages/home/home.component'                           ;
import { ProductosComponent          } from   './pages/productos/productos.component'                 ;
import { TerminosComponent           } from   './pages/terminos/terminos.component'                   ;


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  
  { path: 'agricultura'                , loadChildren: ()=> import ('./pages/agricultura/agricultura.module'            ) .then (m => m.AgriculturaModule      ) },
  { path: 'aviso'                      , loadChildren: ()=> import ('./pages/aviso/aviso.module'                        ) .then (m => m.AvisoModule            ) },
  { path: 'contacto'                   , loadChildren: ()=> import ('./pages/contacto/contacto.module'                  ) .then (m => m.ContactoModule         ) },
  { path: 'carbonera'                  , loadChildren: ()=> import ('./pages/carbonera/carbonera.module'                ) .then (m => m.CarboneraModule        ) },
  { path: 'detailagricultura/:servicio', loadChildren: ()=> import ('./pages/detailagricultura/detailagricultura.module') .then (m => m.DetailagriculturaModule) },
  { path: 'embasadora'                 , loadChildren: ()=> import ('./pages/embasadora/embasadora.module'              ) .then (m => m.EmbasadoraModule       ) },  
  { path: 'formganaderia'              , loadChildren: ()=> import ('./pages/formganaderia/formganaderia.module'        ) .then (m => m.FormganaderiaModule    ) }, 
  { path: 'ganaderia'                  , loadChildren: ()=> import ('./pages/ganaderia/ganaderia.module'                ) .then (m => m.GanaderiaModule        ) },
  { path: 'home'                       , loadChildren: ()=> import ('./pages/home/home.module'                          ) .then (m => m.HomeModule             ) },
  { path: 'productos'                  , loadChildren: ()=> import ('./pages/productos/productos.module'                ) .then (m => m.ProductosModule        ) },
  { path: 'terminos'                   , loadChildren: ()=> import ('./pages/terminos/terminos.module'                  ) .then (m => m.TerminosModule         ) },
];

const options: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}