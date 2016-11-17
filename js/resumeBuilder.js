let bio = {
    'name': 'Tim Handy', 
    'role': 'Web Developer', 
    'contacts': {
        'mobile': '0787878787878',
        'email': 'tjhandy@gmail.com',
        'github': 'TimHandy',
        'twitter': '@twitterhandle',
        'location': 'Bristol, UK'
    }, 
    'welcomeMessage': 'Hi, this is a welcome message!',
    'skills': [
        'Javascript', 'Front-end', 'Back-end', 'Procrastinating', 'Mountain biking', 'Surfing', 'Lounging'
    ],
    'image': 'images/fry.jpg'
}

let education = {
    'schools': [
        {
            'name': 'Sheffield Hallam University',
            'dates': '2000-2003',
            'location': 'Sheffield, UK',
            'degree': 'BSC(Hons) 1st Class, Sport & Exercise Science',
            'majors': 'Web Dev, Multimedia',
            'url': 'https://www.shu.ac.uk/'
        },
        {
            'name': 'Sheffield Hallam University',
            'dates': '2003-2004',
            'location': 'Sheffield, UK',
            'degree': 'Post Graduate Certificate of Education',
            'majors': 'Teaching',
            'url': 'https://www.shu.ac.uk/'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Full Stack Javascript Web Development',
            'dates': '2016-present',
            'school': 'Free Code Camp',
            'url': 'https://www.freecodecamp.com'
        },
        {
            'title': 'webstuffs',
            'dates': '2016-present',
            'school': 'Udacity',
            'url': 'https://www.webstuffs.com'
        },
        {
            'title': 'Mongo',
            'dates': '2016-present',
            'school': 'Net Ninja',
            'url': 'https://www.youtube.com'
        }
    ]
}

let work = {
    'jobs': [
        {
            'title': 'Web Development Student',
            'employer': 'Freelance Student',
            'dates': '2016-07 - Present',
            'description': 'Breaking some webs',
            'location': 'Bristol, UK'
        },
        {
            'title': 'Operations and Projects Manager',
            'employer': 'Chorus',
            'dates': '2014-2016',
            'description': 'Loads of stuff, project managing, team managing, barely managing',
            'location': 'Portishead, Bristol, UK'
        },
        {
            'title': '2nd Line IT Infrastructure Engineer',
            'employer': 'Chorus',
            'dates': '2016-07 - Present',
            'description': 'Breaking some webs',
            'location': 'Portishead, Bristol, UK'
        },
        {
            'title': 'Water ski/wakeboard instructor and boat driver',
            'employer': 'USA, USA!',
            'dates': '2000 - 2003',
            'description': 'Summer Camp Counsellor',
            'location': 'Adirondack Mountains, NY, USA'
        },
        {
            'title': 'Water ski/wakeboard instructor and boat driver',
            'employer': 'USA, USA!',
            'dates': '2003',
            'description': 'Summer Camp Counsellor',
            'location': 'Poland Spring, Maine, USA'
        }
    ]
}

let projects = {
    'project': [
        {
            'title': 'Project 1',
            'dates': '2016-10',
            'description': 'project description',
            'images': ['images/197x148.gif', 'images/197x148.gif']
        },
        {
            'title': 'Project 2',
            'dates': '2016-10',
            'description': 'project description',
            'images': ['images/197x148.gif', 'images/197x148.gif']
        }
    ]
}
    

bio.display = function() {
    let formattedName = HTMLheaderName.replace('%data%', bio.name)
    let formattedRole = HTMLheaderRole.replace('%data%', bio.role)
    let formattedImage = HTMLbioPic.replace('%data%', bio.image)
    let formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)

    $('#header').prepend(formattedRole).prepend(formattedName)
    $('#header').append(formattedMessage)
    $('#header').append(formattedImage)
    $('#header').append(HTMLskillsStart)

    bio.skills.forEach(function(skill) {
        let formattedSkills = HTMLskills.replace('%data%', skill)
        $('#skills').append(formattedSkills)
    })


    let formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
    let formattedEmail = HTMLemail.replace('%data%', bio.contacts.email)
    let formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github)
    let formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter)
    let formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location)
    $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation)
    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation)
}


education.display = function() {
    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart)
		
        let formattedName = HTMLschoolName.replace('%data%', school.name)
        let formattedDegree = HTMLschoolDegree.replace('%data%', school.degree)
        let formattedDates = HTMLschoolDates.replace('%data%', school.dates)
        let formattedLocation = HTMLschoolLocation.replace('%data%', school.location)
        let formattedMajor = HTMLschoolMajor.replace('%data%', school.majors)
        $('.education-entry:last').append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor)        
    })

    $('#education').append(HTMLonlineClasses)
    education.onlineCourses.forEach(function(onlineCourse) {
        let formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title)
        let formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school)
        let formattedOnlineDates = HTMLonlineDates.replace('%data%', onlineCourse.dates)
        let formattedOnlineURL = HTMLonlineURL.replace('%data%', onlineCourse.url)
        
        $('#education').append(HTMLschoolStart)
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL)
    })
}

work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart)
		
        let formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer)
        let formattedTitle = HTMLworkTitle.replace('%data%', job.title)
        let formattedDates = HTMLworkDates.replace('%data%', job.dates)
        let formattedLocation = HTMLworkLocation.replace('%data%', job.location)
        let formattedDescription = HTMLworkDescription.replace('%data%', job.description)

        $('.work-entry:last').append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription)
    })
}

projects.display = function() {
    projects.project.forEach(function(project) {
        $('#projects').append(HTMLprojectStart)
        let formattedTitle = HTMLprojectTitle.replace('%data%', project.title)
        let formattedDates = HTMLprojectDates.replace('%data%', project.dates)
        let formattedDescription = HTMLprojectDescription.replace('%data%', project.description)
		
        $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription)
        project.images.forEach(function(image) {
            let formattedImage = HTMLprojectImage.replace('%data%', image)
            $('.project-entry:last').append(formattedImage)
        })
    })
}


bio.display()
work.display()
projects.display()
education.display()

$('#mapDiv').append(googleMap)
