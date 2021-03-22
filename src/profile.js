const Profile = {
    name: "Utkarsh Pant",
    headerDescription: "2020 Computer Engineering graduate with an obsession for simplicity and function. Welcome to my corner of the web.",
    social: {
        linkedin: 'utkarshpant',
        twitter: 'utkarshpant15',
        github: 'utkarshpant',
        email: 'utkarsh.pant@outlook.com'
    },
    work: [
        {
            designation: "Functional Analyst - BTG",
            duration: "Nov 2020 - Present",
            organisation: "HDFC Bank",
            description: "In my current role, I help implement new vendor-driven technology initiatives for the Bank, starting from requirements gathering, all the way to coordinating testing and deployment. Further, I also help support these applications in everyday functioning.",
            tags: ['SQL', 'Oracle FlexCube', 'REST APIs'],
            link: {
                target: "https://www.hdfcbank.com",
                text: "www.hdfcbank.com"
            }
        },
        {
            designation: "Student (B.Tech. CE)",
            duration: "2016 - 2020",
            organisation: "NMIMS Mumbai",
            link: {
                target: "https://www.engineering.nmims.edu",
                text: 'www.engineering.nmims.edu'
            },
            description: "During my college career I worked on a variety of projects across domains including healthcare, data analysis, web development and native application development.",
            tags: ['Data Structures', 'Algorithms', 'Computer Networks', 'Soft Computing', 'Human Computer Interface', 'Research Methodology'],
        }
    ],
    projects: [
        {
            year: 2021,
            name: "The Telemetry Blog",
            link: "https://www.telemetryblog.in/utkarsh",
            shortDesc: "A minimalist blog made to focus on a distraction-free reading and writing experience.",
            longDesc: "After many years of on-and-off writing on Medium, I wanted to try my hand at building my own blog. This would also be a fantastic way to learn new skills across the stack! The result - the Telemetry Blog is a full-stack project, where I built the back-end and front-end for a blog using Node.js and React.js respectively. Some features that I am proud of are the search, the passwordless sign-in, and story autosaving. The back-end and front-end are deployed on Heroku and Netlify respectively!",
            tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Redis', 'Heroku'],
        },
        {
            year: 2019,
            name: "Music Managed",
            link: "https://www.github.com/aadityanaik/musicmanaged",
            shortDesc: "A simple audio-library meant to allow easy management of music - and to stream it anywhere we go.",
            longDesc: "Music Managed is a Node.js/Express based music streaming/library management platform with a REST API to allow 3rd party integrations. Built as part of a team of 4, this project allowed users to upload audio, correct missing/incorrect metadata and stream their music wherever they were.",
            tags: ['Node.js', 'Express', 'MongoDB', 'JQuery', 'Bootstrap', 'Embedded JavaScript templates'],
        },
        {
            year: "2019 - 2020",
            name: "Gilbreth",
            link: "https://github.com/gilbreth-flow/gilbreth",
            shortDesc: "Gilbreth is a system for Extraction of Flowchart Features using Deep Learning. Achieved as high as 99% accuracy in detecting features correctly.",
            longDesc: "The aim of the system is to be a no-code tool for developing solutions to problems, while focusing only on the logical expression of the solution. The output generated by Gilbreth is an Abstract Syntax Tree that may be parsed depending on the end goal.",
            tags: ['Python', 'YOLOv3', 'Darknet', 'Google Cloud Vision API'],
        },
        {
            year: "2020",
            name: "Analysing MovieLens",
            link: "https://drive.google.com/file/d/13IBjPECk0_b52lBeaGshQKAmeyc6c9wv/view?usp=sharing",
            shortDesc: "Analysed the MovieLens dataset to visualise the correlation between viewer demographic and movie ratings.",
            longDesc: "We predicted the favourite genre of a viewer using 100k observations and applying Decision Trees, Support Vector Machines and Logistic Regression to achieve an accuracy of 99.8%, 99.92% and 87.24% respectively.",
            tags: ['Python', 'Pandas', 'scikit-learn', 'Seaborn + Matplotlib'],
        },
        {
            year: "2019",
            name: "Blocks",
            link: "https://github.com/utkarshpant/blocks",
            shortDesc: "A C++ library for data structures and algorithms.",
            longDesc: "With this ongoing project, I am trying to implement all the data structures and algorithms taught in university courses, while trying to mimic the Standard Library as closely as possible. At the same time, I am trying to document the process and answer all the questions I had when I was learning this in college. Think Data Structures for Dummies, by a Dummy.",
            tags: ['C++', 'Templates', 'STL'],
        },
        {
            year: "2017 - 2021",
            name: "Writing on Medium",
            link: "https://www.medium.com/@Utkarsh.pant",
            shortDesc: "A blog about programming where I write about my current projects and learnings.",
            longDesc: "Some of my articles have been featured in prominent publications like Analytics Vidhya. Being able to write with more control on the reading/writing experience was one of my motivations for the Telemetry Blog!",
            tags: ['Software Development', 'C++', 'Web Development', 'Python'],
        }
    ]
};

export default Profile;