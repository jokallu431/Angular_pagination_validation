import { Routes } from "@angular/router";
const routeConfig : Routes =[
    {
        path:'',
        loadComponent:()=> import ('./form/form.component').then((c)=>c.FormComponent),
        title:'Form_Page'
    },
    {
        path:'table',
        loadComponent:()=> import ('./table/table.component').then((c)=>c.TableComponent),
        title:'Table_Page'
    }
];

export default routeConfig;