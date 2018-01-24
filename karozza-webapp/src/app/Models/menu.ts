export class MenuOptions {
menu = {
   userMenu: [ 
        {"item":"Update Address",routerPath:"updateAddress",
         "submenu":[{"item":"item1"},{"item":"item2"}]
        },
        {"item":"Cab Service",routerPath:""}
            ],
    manager : [ 
        {"item":"Update Address",routerPath:"updateAddress"},
        {"item":"Cab Service",routerPath:""}
             ],
    Admin : [
        {"item":"Update Address",routerPath:"updateAddress"},
        {"item":"Cab Service",routerPath:""},
        {"item":"Groups",routerPath:""},
        {"item":"Users",routerPath:""},
        {"item":"Config",routerPath:""},
        {"item":"Cab Request",routerPath:""}
    ]  
}
}
