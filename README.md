# Starter Kit Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Details on application architecture

### Base

`base` contains all the reusable elements that an application can have like button, input, dropdown, card, toogle, toastr, etc...

But you can to create in the folder your `directive|pipe|guard|interface|enum` if you want.

If you want to create a new base component naming `my-base-component`, you can use the Angular CLI command : `ng g c base/my-base-component`

### Core

`core` is the engine of the application architecture :

* The subfolder `store` is a folder structure for [NgRx](https://ngrx.io/docs). 
  Use the command `ng generate @ngrx/schematics` for generate all the elements that make up NgRx. 
  Please referer to the [documentation](https://ngrx.io/guide/schematics/store) for learn the command
* The subfolder `interfaces` contains all interfaces uses in your application.
  Use the command `ng g i core/interfaces/my-interface`
* The subfolder `technical` contains all services technical in your application. For example, if you need a service for management all your http request, you can create a service like `NetProvider` to manage them.
  Use the command `ng g s core/technical/my-service`

### Feature

`feature` contains all the features defined by your client's user stories. The folder will contain a set of components and subcomponents.

Use the command `ng g c feature/my-beautiful-feature` for generate a new component.

### Shared

`shared` contains all modules you want shared in your application. **You don't generate a new module in the folder** but you can to add a module you want shared in `shared.module.ts`

### View

`view` contains all pages of your application. 

You can create a component for manage a template for your application. 

And base your pages on the template. You can see an example in this [link](https://github.com/GaetanCottrez/example-use-starter-kit-angular)

## Summary of application architecture

```bash
├── app
│  ├── base
│  ├── core
│  │   ├── interfaces
│  │   ├── store
│  │   │   ├── actions
│  │   │   ├── effects
│  │   │   ├── interfaces
│  │   │   ├── reducers
│  │   │   └── selectors
│  │   └── technical
│  ├── feature
│  ├── shared
│  └── view
├── assets
└── environnements
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Fake rest API development

Run `npm run api` for a fake rest api. The url of fake API is `http://localhost:5050/`. The fake data of API is localize in `api/data.json`

## Documentation

The documentation is generated with Compodoc. Run `npm run doc:dashboard`. Navigate to `http://localhost:8080/`

## Example of use of the starter kit

You can see an example of use of the starter kit here : [Todo List with Nebular](https://github.com/GaetanCottrez/example-use-starter-kit-angular)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running code coverage

Run `ng test:cov` to execute the code coverage.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
