import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// below one is the line where our app will get started.
// we can change the bootstrapModule if we want to start our app with different module
// by default it is APPModule. so our appwill start with AppModule i.e, app.Module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//  if we change the module then we need to change test.ts
// whenever we do ng serve/build/test, it compiles your ts code into js code. this is known as (transpiling). also generate belo files
      // main.js
      // polifills.js
      // vendor.js
      // style.js
      // runtime.js



// what is the starting point of angular ? (ans: main.js)
// can we add more scripts to package.json ? (ans: yes. sea through start:port in package.json file scripts)
// what are dependencies ?
//    all modules/libraries we must have to run app in prod env.
// what are devDependencies ?
//    all modules/libraries we must have to develop app.
// package.json & package-lock.json are related. 
// in package.json dependencies we are having just the names of packages that are needed.
// but, in package-lock.json we will have the same packages with details.

// Angular CLI - Command Line Interface :
// `````````````````````````````````````
//     - schematics -> angular.json / package.json 
//         ng serve 
//         ng build
//         ng test 
//         ng lint 
//         ng e2e 
//     - commands 
//         ng new <project_name>
//         ng generate/g component <component_name>
//         ng generate/g module <module_name>
//         ng generate/g pipe <pipe_name>
//         ng generate/g service <service_name>
//         ng generate/g directive

// Angular App Architecture :
// ``````````````````````````
// Modular based architecture (a module is a base where we group multiple components together)
// Components mapped inside modules
// we will have multiple apps inside a repo (monoRepo)
// and those apps might share common libs and shared components
 
// Angular Modules :
// `````````````````
// What are some of the built-in modules ??
// 1. there are lot of built-in modules in angular.
//    ex:     BrowserModule, AppRoutingModule, MatButtonModule, BrowserAnimationsModule
// 2. all the code and functionality is grouped in a module.
// 3. @NgModule is a decorator which is used to define a module
// 4.  Modules consist of :
//     - declarations
//         - this is where we will add all the components of the module 
//     - imports 
//         - we can import modules inside a module 
//     - providers 
//         - services that we need will be injected here 
//     - Bootstrap 
//         - what is the first component, the module should load 
//     - exports   
//         - is to export and expose the component outside of the module
// 5. Every Angular application should have atleast 1 module 
// 6. By default, the Angular framework provides us with AppModule 
// 7. The AppModule will have a component by the name 
//     - AppComponent     
// 8. Whenever we are building Angular applications We will always think of Modules first 
//     Ex: Contacts, Users, Leads, Opportunites, Settings, Profile, Authenctication
//    why are they modules ??
//     let's say we have 3 plans and we want to provide specific features based on plan.
//     - Free User : Contacts,  Users
//     - Premium User : Contacts, Users, Leads, Opportunites
//     - Enterprise Users : Contacts, Users, Leads, Opportunites, Settings, Profile, Authenctication
// 9. Feature Modules 
//     - You can turn on or off the modules based on conditions 
// 10. Modules - Grouping 
//     - components 
//     - services 
//     - pipes
//     - directives 
// 11. Create a custom Modules to start building crm app
//     ng generate module contacts
//     ng generate module leads
//     ng generate module settings
//     ng generate module Opportunites
//     ng generate module authentication 

// Angular Components :
// ````````````````````
// 1. Components are the most important and basic building blocks of Angular apps 
// 2. Authentication Module 
//     - new-user 
//     - login 
//     - forgot-password
//     - reset-password 
// 3. Component is a smallest functionality that you will implement in your application 
// 4. When we group multiple Components it becomes a module 
// 5. We can have paren-child relationship of components 
// 6. We can have components inside components 
// 7. Tree-herirachy of components 
//     Dashboard 
//         display-contact-list 
//             contact-grid
//                 contact-import 
//                 contact-export  
//             contact-options
// 8. lets create some custom components 
//     ng g component add-contact 
//     ng g component edit-contact
//     ng g component list-contacts 
//     ng g component delete-contact 
// 9. Every component has 4 files auto-generated with it 
//     - component.html -> view or html or template file -> UI 
//     - component.ts -> it will be a class file which will have methods -> Logic 
//     - component.spec.ts -> It will have the unit test script for component 
//     - component.scss -> stylesheet of the component 
// 10. Component decorator inside the component.ts file 
//     selector -> unique identifier for the component(or) id of the component 
//         -> using this selector we will use the component  
//     templateUrl -> your HTML code 
//         - component.html file 
//     styleURLS -> for linking your component stylesheet 
//         - component.scss 

// component lifecycle hooks :
// ```````````````````````````
// we arehaving 8 component lifecycle hooks in angular. out of them 4 are frequently used.
//    - ngOnChanges()
//    - ngInInit()
//    - ngAfterViewInit()
//    - ngOnDestroy()

// 1. By default we have ngonit 
// 2. Whichever lifecycle hooks we want to use
//     - import it in the class 
//     - Extend the implements interface 
//     - Implement the method  
// 3. We can have any number of lifecycle hooks implemented 
// 4. Its too early for us to implement all of them today
//     - We will revisit this topic again component communication 
//     - Component Communication means communicating Between components 
//        - Parent to Child 
//        - Child to Parent 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 