# Appchiever

##Introduction:

While working at Emma, LLC, I represented the company at Converge 2014, a higher education marketing conference. There I learned that most universities are relying on email lists from testing services to do their recruiting. Educational institutions should be able to take advantage of the fact that most teenagers are online today. They have social media profiles for their photos, chats, etc. Why not have one for their college and career aspirations?

With Appchiever, I strive to give young aspiring professionals an avenue to express their interests in Universities and build an online professional presence. This will also allow them to aggregate their personal data in one place for a time when they are ready to start applying for college.

As a mother of 2 teenage sons, I know that teenagers love to use apps. My kids are competitive and very active in extracurricular activities. This app must retain the interest of teenagers and be geared towards their style of use.

## API Information:

### NoSQL Database
* Firebase https://appchiever.firebaseio.com/
* AngularFire https://www.firebase.com/docs/web/libraries/angular/

### College Information
* Need a list of colleges for the user to choose from to express interest.
* Currently researching sources for this information. The most comprehensive seems to be IPEDS. They have a data center at nces.ed.gov. Download the information as a csv and convert to json data.
* Sent a request to matchcollege.com to use their api. Sent request to api_usage@matchcollege.com.

### Career Information
* Need a list of careers/occupations for the user to choose from to express interest.
* dev.optimalresume.com/apps has a pretty decent resource. Need to look further into making the api call. Looks like I must do a POST to receive a token and then do the GET.
* ONET Resource Center

## Data Structure:

```

users - simplelogin - user  - activities [{level: 'Freshman', name: 'Soccer Team Captain', type: 'Sports'}]
                            - classes [{grade: 'B', hours: '3', level: 'Sophomore', name: 'Spanish 1'}]
                            - profile [{firstname: 'bob', gradcity: 'Nashville', gradstate: 'Year', gradyear: '2016', lastname: 'Smith', picurl: 'someurl', schoolmascot: 'acorn trees', schoolname: 'tree university'}]
```

## Technologies:

### Config
* Gulp
* Bower for front-end dependencies
* Node/NPM for additional dependencies

### Style
* Sass
* Bootstrap
* Font-Awesome

### MV*
* Jade
* Angular
* Angular-UI-Router
* AngularFire

## Features:
* AngularFire Databinding
* Google OAuth
* ONet Interest Profiler

### What is coming next
* live reload
* deploy script
* autoprefixer? Something for IE support
* confirm password matches to show register button
* OAuth, social login - put in trouble ticket
* GPA rounded to 2 decimals on the page
* calculate GPA without button
* move GPA calculation to a factory??
* style GPA

## To Use:

Clone the project, then from the root directory use the following console commands:
```
npm install
bower install
gulp
```
In separate terminal window use

```
python -m SimpleHTTPServer
```
