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