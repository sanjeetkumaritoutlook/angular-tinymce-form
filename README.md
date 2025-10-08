# AngularTinymceForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## for error 'error:03000086:digital envelope routines::initialization error',

Run in node Terminal-> set NODE_OPTIONS=--openssl-legacy-provider

to check source code repo on github ui:-> git remote show origin

why not JSX for Angular:-> https://medium.com/@azizaidi1900/why-jsx-wont-work-in-angular-a4a4843b2220

## AI course
https://github.com/microsoft/AI-For-Beginners


## GST 2.0
Honda's Activa range, covering both 110cc and 125cc 

https://www.ndtvprofit.com/amp/auto/honda-activa-to-become-cheaper-by-rs-7000-with-gst-price-cut-check-latest-rates-here

https://www.ndtv.com/india-news/mahindra-honda-toyota-cars-and-bikes-that-will-see-a-price-cut-under-gst-2-0-9316729


Tata Nexon in Hyderabad starts around ₹8 Lakh

Tata Harrier. Ex-Showroom ( in Hyderabad ) Rs. 15 - 26.69 Lakh

Hyundai Creta in Hyderabad ranges from Rs. 13.38 Lakh

Toyota Fortuner price in New Delhi start at ₹33.65 Lakh.

voltas dish washer machine

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## CI / GitHub Pages deployment and TinyMCE API key

This repository's GitHub Actions workflow injects the TinyMCE API key at build time from a repository secret named `TINYMCE_API_KEY`.

To set it up:

- Go to your repository Settings -> Secrets -> Actions -> New repository secret
- Name: `TINYMCE_API_KEY`
- Value: your TinyMCE API key

When the workflow runs on push to `main`, it writes `src/environments/environment.prod.ts` containing the key, builds the app, and deploys the `dist/angular-tinymce-form` output to GitHub Pages.

Locally you can set the key in `src/environments/environment.ts` for development if needed (not recommended for public repos).

## ag-grid
AG Grid is a very popular and powerful data grid/table library that works well with Angular. It gives you features like sorting, filtering, pagination, row grouping, editing, exporting, etc., out of the box.

AG Grid (Advanced Data Grid) is a powerful and versatile JavaScript data grid component. It's designed for developers who need to display and manipulate large datasets in a tabular format within their web applications. It's often compared to Excel, but it's rendered in the browser and tightly integrated with JavaScript frameworks like React, Angular, Vue.js, and JavaScript itself.

https://www.ag-grid.com/angular-data-grid/getting-started/

for angular v12 and node v16 setup

npm install ag-grid-angular@28 ag-grid-community@28

You should see:

A fully styled AG Grid table

Sorting on columns

Filtering in each column

Pagination with 5 rows per page

Data fetched from a real API (jsonplaceholder.typicode.com/users)

a real-world Angular 12 project uses AG Grid:
•	Data fetched from an API
•	Pagination
•	Sorting & filtering
•	External quick search
•	Row selection
•	Action buttons per row
•	Export to CSV

AG Grid: As of v27, the property cellRendererFramework is deprecated. The property cellRenderer can now be used for JavaScript AND Framework Components

## angular material in angular 12
```
npm install @angular/material@12 @angular/cdk@12
ng add @angular/material@12
```
Pick a theme (e.g., Indigo/Pink), enable animations.
```
Choose:

Theme: Indigo/Pink (or any)

Add global typography: ✅ Yes

Add animations: ✅ Yes
```
## Two separate app: main angular app and web components

ng build web-components --configuration production

ng build

web component has separate main.ts, app.module.ts ,tsconfig.app.json (its mentioned separately under projects in angular.json)
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
