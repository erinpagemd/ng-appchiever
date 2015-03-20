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

user  - profile
                  - array of objects {image: value, name: value, highschool: value, graddate: value, location: value}

      - careers
                  - array of objects {career: value, description: value}

      - colleges
                  - array of objects {university: value, url: value, location: value, latlong: value, onlineApp: value}

      - points
                  - curriculum
                      - array of objects {className: value, classScore: number}
                  - activities
                      - array of objects {activityType: value, activityScore: number}

      - badges
                  - curriculum
                      - array of objects {badgeName: value}
                  - activities
                      - array of objects {badgeName: value}

      - freshman
                  - curriculum
                      - array of objects {className: value, classGrade: floating point number}
                  - activities
                      - array of objects {activityName: value, activityType: value}

      - sophomore
                  - curriculum
                      - array of objects {className: value, classGrade: floating point number}
                  - activities
                      - array of objects {activityName: value, activityType: value}

      - junior
                  - curriculum
                      - array of objects {className: value, classGrade: floating point number}
                  - activities
                      - array of objects {activityName: value, activityType: value}

      - senior
                  - curriculum
                      - array of objects {className: value, classGrade: floating point number}
                  - activities
                      - array of objects {activityName: value, activityType: value}

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
* AngularFire
* Firebase Login


### What is coming next
* live reload
* deploy script
* autoprefixer? Something for IE support
* do i use a service for a constructor in angular
* display based on login
* clean up controller functions
* creating user also logs in user

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
