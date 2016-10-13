const workExperience = [
    {
        name: 'Oakland Police Department',
        title: 'Police Officer',
        startDate: 'Sep, 2012',
        endDate: 'Present',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'
    },
    {
        name: 'San Benito County Probation',
        title: 'Probation Intern',
        startDate: 'Jan, 2012',
        endDate: 'Jun, 2012',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'
    },
    {
        name: 'Waiter.com',
        title: 'Supervisor/ Dispatcher',
        startDate: 'Mar, 2008',
        endDate: 'Sep, 2012',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'
    }
];
const technicalSkills = [
    {
        name: 'JavaScript',
        percentage: '80',
        description: 'Lightweight, interpreted and object-oriented language'
    },
    {
        name: 'HTML5/CSS3',
        percentage: '90',
        description: 'Hypertext Markup symbols intended for display in a browser.'
    },
    {
        name: 'JQUERY',
        percentage: '85',
        description: 'The most popular JavaScript library used in web development.'
    },
    {
        name: 'REACT.JS',
        percentage: '80',
        description: 'A library for building composable user interfaces.'
    },
    {
        name: 'METEOR.JS',
        percentage: '80',
        description: 'A complete platform for building web and mobile apps in pure JavaScript.'
    },
    {
        name: 'MONGO DB',
        percentage: '70',
        description: 'An open source database that uses a document-oriented data model.'
    }
];
const education = [
    {
        name: 'Police Academy',
        facility: 'Oakland Police Department',
        date: 'Mar, 2013',
        description: 'Police Officer Standards and Training Certificate'
    },
    {
        name: 'Justice Studies',
        facility: 'San Jose State University',
        date: 'May, 2012',
        description: 'Bachelor of Science Degree'
    }
];
const courses = [
    {
        name: "Advanced Javascript",
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: "JavaScript: Understanding the Weird Parts",
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: "ES6 Javascript: The Complete Developer's Guide",
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: "Meteor and React for Realtime Apps",
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: 'Modern React with Redux',
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: 'The Complete React Native and Redux Course',
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: 'Build Apps with React Native',
        platform: 'Udemy',
        year: '2016'
    },
    {
        name: 'Introduction to Computer Science and Programming Using Python',
        platform: 'MIT Course via EDX',
        year: '2016'
    },
    {
        name: 'Swift programming for iOS with Parse.',
        platform: 'Udemy',
        year: '2015'
    },
]
const projects = [
    {
        id: 'p1',
        technology: ['meteor', 'react'],
        url: 'http://cpabucket.meteorapp.com/',
        img: 'images/cpaBucketImage.png',
        title: 'CPA Bucket',
        description: 'Social study platform. After registering, users can take practice tests in all 4 CPA sections, track their progress, add thier own questions and much more. Created with Meteor and React. Database is managed via Mongo DB'
    },
    {
        id: 'p2',
        technology: ['meteor', 'react'],
        url: '#',
        img: 'images/battleship.png',
        title: 'Battleship Game',
        description: 'Computerized version of the popular board game. After registering a user can play against computer or another human opponent. Created with Meteor and React. Database is managed via Mongo DB'
    },
    {
        id: 'p3',
        technology: ['javascript'],
        url: 'projects/restaurant-menu/index.html',
        img: 'images/restaurant.png',
        title: 'Restaurant Menu',
        description: 'Basic ordering and payment system. Created with JavaScript and jQuery'
    },
    {
        id: 'p4',
        technology: ['javascript'],
        url: 'projects/foreign-exchange-rates/index.html',
        img: 'images/currency-exchange.png',
        title: 'Currency Exchange',
        description: 'Basic application that makes an API request to get the current currency exchange rates. The app then builds a list of available rates. Created with JavaScript and jQuery'
    },
    {
        id: 'p5',
        technology: ['javascript'],
        url: 'projects/calculator-jquery/index.html',
        img: 'images/calculator.png',
        title: 'Calculator',
        description: 'Simple calculator that can evaluate basic mathematic expressions. Created with JavaScript and jQuery'
    },
    {
        id: 'p6',
        technology: ['meteor', 'react'],
        url: '#',
        img: 'images/todos.png',
        title: 'Todos Organizer',
        description: 'Cool todos aorganizer. After registering a user can add tasks, select who can view the tasks, delete tasks and complete tasks. Created with Meteor and React. Database is managed via Mongo DB'
    },
]

$(document).ready(function() {
    // loop through technical skills
    technicalSkills.forEach(({name, percentage, description}) => {
        // Append education to the page
        $('#techSkillsHeading').append(`
            <div class=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                    <span class="chart skilBg" data-percent="${percentage}">
                    <span class="percent"></span>
                    </span>
                    <h4>${name}</h4>
                    <p>${description}</p>
                </div>
            </div>
        `);
    });
    
    // loop through work experience
    workExperience.forEach( ({name, title, startDate, endDate, description}) => {
        // append work experience to the page
        $('#experienceHeading').append(`
            <div class="row workDetails">
                <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                    <div class="workYear">${startDate}<br>${endDate}</div>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
                    <div class="arrowpart"></div>
                    <div class="exCon">
                    <h4>${name}</h4>
                    <h5>${title}</h5>
                    <p>${description}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // loop through education
    education.forEach(({name, date, facility, description}) => {
        // append the education to the page
        $('#educationHeading').append(`
            <div class="row workDetails">
                <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                    <div class="workYear">${date}</div>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
                    <div class="arrowpart"></div>
                    <div class="exCon">
                        <h4>${name}</h4>
                        <h5>${facility}</h5>
                        <p>${description}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // loop over courses
    courses.forEach(({name, platform, year}) => {
        // append courses to the page
        $('#educationHeadingCert').append(`
            <div class="row workDetails">
                <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                    <div class="courseYear">${year}</div>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
                    <div class="arrowpart"></div>
                    <div class="exCon">
                        <h4>${name}</h4>
                        <h5>${platform}</h5>
                    </div>
                </div>
            </div>
        `);
    });

    // get the projects
    getProjects(projects);

    $(".portfolioNav a").click(function(e){
        e.preventDefault();
        let tech = this.id;
        $('.portfolioNav a').removeClass('current');
        $( this ).addClass( "current" );
        if (tech !== "all") {
            techArray = projects.filter(({technology}) => {
                return technology.some( current => current === tech)
            });
            $('.portfolioWrapper').empty();
            getProjects(techArray);
        } else {
            $('.portfolioWrapper').empty();
            getProjects(projects);
        }
    });

});

function getProjects(projectsArray){
    // loop through projects
    projectsArray.forEach(({id, technology, url, img, title, description}) => {
        // append the projects to the page
        $('.portfolioWrapper').append(`
            <div class="flip" id="${id}"> 
                <div class="card"> 
                    <div class="face front">
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </div>
                    <div class="face back">
                        <img src="${img}" class="portfolioImage" alt="${title} image">
                        <div class="demoLinkWrapper">
                            <a href="${url}" target="_blank" class="demoLink">Demo</a>
                        </div>
                    </div> 
                </div> 
            </div>
        `).hide().show('fast');
        // append the technologie classes for filtering
        technology.forEach( tech => $(`#${id}`).addClass(`${tech}`));
    });

    /* card flip */
    $(".flip").hover(function(){
        $(this).find(".card").toggleClass("flipped");
        return false;
    });
}
