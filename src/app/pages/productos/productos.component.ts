import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public products:any [] = [
    { img: './assets/imgs/ACHIOTE-100GR.webp'                 ,product: 'ACHIOTE-100GR'                 },
    { img: './assets/imgs/AJONJOLI-100GR.webp'                ,product: 'AJONJOLI-100GR'                },
    { img: './assets/imgs/ALPISTE.webp'                       ,product: 'ALPISTE'                       },
    { img: './assets/imgs/ANIS-300GR.webp'                    ,product: 'ANIS-300GR'                    },
    { img: './assets/imgs/ARROZ.webp'                         ,product: 'ARROZ'                         },
    { img: './assets/imgs/AZUCAR-GLASS.webp'                  ,product: 'AZUCAR-GLASS'                  },
    { img: './assets/imgs/CACAHUATE-CRUDO-CUTICULA-125GR.webp',product: 'CACAHUATE-CRUDO-CUTICULA-125GR'},
    { img: './assets/imgs/CAMARON-MOLIDO-100GR.webp'          ,product: 'CAMARON-MOLIDO-100GR'          },
    { img: './assets/imgs/CANELA-30GR.webp'                   ,product: 'CANELA-30GR'                   },
    { img: './assets/imgs/CANELA-50GR.webp'                   ,product: 'CANELA-50GR'                   },
    { img: './assets/imgs/CANELA-100GR.webp'                  ,product: 'CANELA-100GR'                  },
    { img: './assets/imgs/CANELA-250-GR.webp'                 ,product: 'CANELA-250GR'                  },
    { img: './assets/imgs/CANELA-EN-PEDAZOS.webp'             ,product: 'CANELA-EN-PEDAZOS'             },
    { img: './assets/imgs/CANELA-MOLIDA-100-GR.webp'          ,product: 'CANELA-MOLIDA-100-GR'          },
    { img: './assets/imgs/CEBOLLA-MOLIDA-100GR.webp'          ,product: 'CEBOLLA-MOLIDA-100GR'          },
    { img: './assets/imgs/CEREAL1.webp'                       ,product: 'CEREAL1'                       },
    { img: './assets/imgs/CEREAL2.webp'                       ,product: 'CEREAL2'                       },
    { img: './assets/imgs/CEREAL3.webp'                       ,product: 'CEREAL3'                       },
    { img: './assets/imgs/CEREAL4.webp'                       ,product: 'CEREAL4'                       },
    { img: './assets/imgs/CEREAL5.webp'                       ,product: 'CEREAL5'                       },
    { img: './assets/imgs/CEREAL6.webp'                       ,product: 'CEREAL6'                       },
    { img: './assets/imgs/CHIA-125GR.webp'                    ,product: 'CHIA-125GR'                    },
    { img: './assets/imgs/CHILE-MARTAJADO-100GR.webp'         ,product: 'CHILE-MARTAJADO-100GR'         },
    { img: './assets/imgs/CHILE-MOLIDO-PICOSO-100-GR.webp'    ,product: 'CHILE-MOLIDO-PICOSO-100-GR'    },
    { img: './assets/imgs/CHILE-MOLIDO-TAJIN-100GR.webp'      ,product: 'CHILE-MOLIDO-TAJIN-100GR'      },
    { img: './assets/imgs/CHILE-PREPARADO-100GR.webp'         ,product: 'CHILE-PREPARADO-100GR'         },
    { img: './assets/imgs/CLAVOS-ENTEROS-20GR.webp'           ,product: 'CLAVOS-ENTEROS-20GR'           },
    { img: './assets/imgs/COMINOS-ENTEROS-20-GR.webp'         ,product: 'COMINOS-ENTEROS-20-GR'         },
    { img: './assets/imgs/CONSOMATE-100GR.webp'               ,product: 'CONSOMATE-100GR'               },
    { img: './assets/imgs/CURCUMA-MOLIDA-50GR.webp'           ,product: 'CURCUMA-MOLIDA-50GR'           },
    { img: './assets/imgs/ESCAMAS-100GR.webp'                 ,product: 'ESCAMAS-100GR'                 },
    { img: './assets/imgs/FRIJOL1.webp'                       ,product: 'FRIJOL1'                       },
    { img: './assets/imgs/FRIJOL2.webp'                       ,product: 'FRIJOL2'                       },
    { img: './assets/imgs/FRIJOL3.webp'                       ,product: 'FRIJOL3'                       },
    { img: './assets/imgs/GENGIBRE-50GR.webp'                 ,product: 'GENGIBRE-50GR'                 },
    { img: './assets/imgs/GRENETINA-MOLIDA-100GR.webp'        ,product: 'GRENETINA-MOLIDA-100GR'        },
    { img: './assets/imgs/LAUREL-20GR.webp'                   ,product: 'LAUREL-20GR'                   },
    { img: './assets/imgs/LINAZA-ENTERA-125GR.webp'           ,product: 'LINAZA-ENTERA-125GR'           },
    { img: './assets/imgs/LINAZA-MOLIDA-100GR.webp'           ,product: 'LINAZA-MOLIDA-100GR'           },
    { img: './assets/imgs/MAIZ-PALOMERO.webp'                 ,product: 'MAIZ-PALOMERO'                 },
    { img: './assets/imgs/MEJORANA-ENTERA-30GR.webp'          ,product: 'MEJORANA-ENTERA-30GR'          },
    { img: './assets/imgs/OREGANO-ENTERO-300GR.webp'          ,product: 'OREGANO-ENTERO-300GR'          },
    { img: './assets/imgs/PEPITA-PELADA-125GR.webp'           ,product: 'PEPITA-PELADA-125GR'           },
    { img: './assets/imgs/PILONCILLO.webp'                    ,product: 'PILONCILLO'                    },
    { img: './assets/imgs/PIMIENTA-CHICA-30GR.webp'           ,product: 'PIMIENTA-CHICA-30GR'           },
    { img: './assets/imgs/PIMIENTA-GRANDE-30GR.webp'          ,product: 'PIMIENTA-GRANDE-30GR'          },
    { img: './assets/imgs/PIMIENTA-NEGRA-MOLIDA-400GR.webp'   ,product: 'PIMIENTA-NEGRA-MOLIDA-400GR'   },
    { img: './assets/imgs/SAL-CON-AJO-MOLIDO-100GR.webp'      ,product: 'SAL-CON-AJO-MOLIDO-100GR'      },
    { img: './assets/imgs/SAL-DE-GRANO.webp'                  ,product: 'SAL-DE-GRANO'                  },
    { img: './assets/imgs/TAPIOCA-PERLA-125GR.webp'           ,product: 'TAPIOCA-PERLA-125GR'           },
    { img: './assets/imgs/TOMILLO-ENTERO-30GR.webp'           ,product: 'TOMILLO-ENTERO-30GR'           },
    //{ img: './assets/imgs/SEMILLA.webp'                       ,product: 'SEMILLA'                       },
    //{ img: './assets/imgs/SOYA.webp'                          ,product: 'SOYA'                          },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
