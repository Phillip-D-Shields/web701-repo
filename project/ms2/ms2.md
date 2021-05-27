# Milestone 2 Evaluate

## Framework Purpose

Front-end frameworks are packages containing standardized code that makes the development of a UI much more effecient and slightly simplified at the same time. Modern web development has a wide variety of frameworks available that serve different purposes. The frameworks discussed in this report concern JavaScript frameworks used to create stable and effecient user-interfaces used on the website.   

### Vue

Vue is an open-source MVVM JavaScript framework. The MVVM pattern used in Vue make it popular for UI development, especially with single-page applications (SPAs). It is often referred to as "the progressive framework" because of the ease in which developers can remove and add features. Vues most unique feature is directives, which are used to manipulate the DOM via HTML attribute bindings.

### Angular

Angular is an open-source MVC TypeScript framework developed by Google in 2010. A major feature of Angular is its use of static typing. Static typing makes sure that errors are caught earlier in the development process by checking them at  compile time, as opposed to dynamic typing which can lead to errors during runtime. 

## Framework Features

### Vue

There are many features in Vue giving it a clear advantage in certain use-cases. The first and most noticeable feature is the file size of Vue. The whole framework is considered very lightweight at just around 20 kilobytes. This means smaller projects can be setup in very little time. Another useful feature is its native CLI. Vues small size combined with a well documented CLI let developers get started with just a simple CLI configuration wizard. This makes developing with Vue very friendly and accessible for developers of all levels. Vue also comes with some community maintained advanced features that help with state management and routing.

### Angular

Angular is feature rich framework that utlises the MVC architecture. The use of MVC architecture is wildly popular amongst developers, especially because of its ability to utilise two-way data binding between the model and view. Another major feature of Angular is that is cross-platform, you can use it to build a UI for pretty much any system. Angular has a very useful and well documented CLI. Many developers prefer the CLI has it helps alleviate some common frustrations with component creation, webpack, and other tedious tasks that allow developers to focus on the right kind of code. Angular has very notable and consistent contributions from Microsoft and Google, giving it strong credibility among developers. 

## INSTALLATION

### Vue

There are a number ways to install or add Vue to a project. There is an [official CLI tool](https://cli.vuejs.org/) that provides a number of useful options when starting a new project. Vue can also be added via CDN, NPM, and downloaded and added directly to the project root. The most effecient way is to use the CLI because it automatically creates the correct project directory and adds template files to create a simple working app upon completion. The CLI has two options to create a new project, either by CLI or by a UI. This project will use the Vue CLI to ensure the creation is simple and direct.

<!-- screenshots -->

### Angular

An [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) is used to create projects. The installation and use is similar to that of Vue, with some distinct differences regarding the list of possible commands and options available. A majority of an Angualar project, including components and various smaller elements can be generated via CLI. 

<!-- screenshots -->

### PROOF OF CONCEPT

Since maneuvering between multiple frameworks can

#### REGISTER, LOGIN, ADMIN

A common solution to registering, logging in, and creating administrative rights is to use a third-party library or service. Having the dedveloper create their own system can be time consuming, and depending on the developer, could lead to lots of buggy elements. For both Vue and Angular, this website will incorporate [Auth0 services](https://auth0.com/). Using Auth0 in combination with the framework will ensure the latest and safest protocols will be used. Auth0 offers free services to small projects, and has a large and demanding enterprise cliental. Using Auth0 will give our project and its users the same security and features that fortune 500 companies use.

Another feature of Auth0 is that it has already established framework specific solutions, so both Vue and Angular have support "out-of-the-box". Auth0 also contains thourough instructions on how to configure features for each framework, as well as a "roles" feature that can distinguish between normal users and admins. Since Auth0 can provide registration, login, and admin services for both Vue and Angular, it is an easy choice for this project.

<!-- screenshot of auth0 -->

#### TOKEN DISTRIBUTION

Token distribution to users will be done via their user profiles. For each user profile a wallet will be included, this wallet will be used to record the users activity with the Open Source Kitchen. This wallet will be an array that accepts json objects with relavant info regarding the users activity. If the array contains enough objects, aka tokens, then the user can then apply for positions with more responsibilities in the kitchen. 

<!-- screenshot of user profile with wallet array -->

#### INTERACTIVE ELEMENTS

Interactive elements on the website will be limited. An emphasis will be put on clean design and UI simplicity. This will make sure users with different technical abilities will be able to access our services easily. More of a focus should be placed on the website being responsive since a lot of users will access the website via a tablet or mobile device. [The CSS framework Bulma](https://bulma.io/) will be used to make styling and responsive design much easier to implement and will help enforce styling consistency across the project.

#### TOKEN INTERFACE

The token interface will be a button located on an event card that states the user will attend as a volunteer. When the button is pressed, a JSON event specific object will be added to the users profile wallet array. The JSON object will contain a key value pair ``` hasAttended: false ```, after the users attendance at the event is confirmed an admin will update the key value pair to ``` true ```. Since this event is handled via a button click it can be easily implemented the same way in both frameworks. 

A user will also be able to view the contents of their wallet via their profile page. Tokens that have not been confirmed by an admin will be shown in a separate section from the tokens that are confirmed.

#### SERVER-SIDE API

All MongoDB interactions can be controlled within the Express backend. Both frameworks can essentially "plug and play" with the Express backend. 

## FINAL RECOMMENDATION

The final recommendation for this project is the framework Vue. It's simple implementation and lightweight are perfect for an SPA(single-page app) like ours. It contains all the basic features the website requires including routing and state management. Vue is well documented and its powerful integration with Auth0 services provide the exact features required to register, login, logout, support admin roles, and distribute volunteer based tokens to its users.
