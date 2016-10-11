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
        name: 'Justice Studies',
        facility: 'San Jose State University',
        date: 'May, 2012',
        description: 'Bachelor of Science Degree'
    },
    {
        name: 'Police Academy',
        facility: 'Oakland Police Department',
        date: 'Mar, 2013',
        description: 'Police Officer Standards and Training Certificate'
    }
];
const projects = [
    {
        technology: 'meteor',
        url: 'http://cpabucket.meteorapp.com/',
        img: 'images/cpaBucketImage.png',
        title: 'CPA Bucket',
        description: 'Social study platform. Created with Meteor and React. Database is managed via Mongo DB'
    }
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
});