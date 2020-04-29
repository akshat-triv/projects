//UI controller
var UIController = (function(){

    var domStrings = {
        username : document.querySelector('.user_name'),
        password : document.querySelector('.password'),
        course : document.querySelector('.options'),
        login_button : document.querySelector('.main-button'),
        login : document.querySelector('.login'),
        main : document.getElementsByTagName('main'),
        body : document.getElementsByTagName('body'),
        login_id : document.querySelector('.login_id'),
        wrapper : document.querySelector('.wrapper'),
        courseName : document.querySelector('.title'),
        courseTime : document.querySelector('.cou-time'),
        courseDescription : document.querySelector('.cou-description'),
        videoFrame : document.querySelector('iframe')
    };

    function changeName(data){
        domStrings.courseName.textContent = data.course_name;
        domStrings.courseTime.textContent = data.course_time;
        domStrings.courseDescription.innerHTML = data.course_description;
        domStrings.videoFrame.src = data.course_video;
    }

    function openCourseUI(username){
        domStrings.login.style.display = 'none';
        
        domStrings.main[0].style.visibility = 'visible';
        domStrings.body[0].style.backgroundColor = '#16151d';

        domStrings.login_id.textContent = username;
    }

    function readLoginValues(){
         
        return {
            username : domStrings.username.value,
            password : domStrings.password.value,
            course : domStrings.course.value
        }
    }

    function renderSections(section){
        let sectionName = section.sectionName;
        let content = section.content;
        let time = section.time;
        let sectionId = section.sectionId;

        let htmlString = `<div class="sections" id="section-${sectionId}"><div class="sections_name" id="section_${sectionId}">Section ${sectionId} : ${sectionName}<span> ${content.length} | ${time}</span><i class="ion-android-arrow-dropdown js--icon"></i></div><div class="sections_contents" id="section_${sectionId}"><ul id="items_${sectionId}"></ul></div></div>`;

        domStrings.wrapper.insertAdjacentHTML('beforeend',htmlString);
    }

    function renderItems(content,sectionId){
        content.forEach(e=>{
            let videoSrc = e.videoSrc;
            let name = e.name;
            let section_ul = document.querySelector(`#items_${sectionId}`);
            let htmlString = `<li class="js--li li-${sectionId}" data-video= "${videoSrc}"><i class="ion-android-checkbox"></i> ${name}</li>`;

        section_ul.insertAdjacentHTML('beforeend',htmlString);
        });
        

    }


    return {
        getDomStrings : ()=>domStrings,

        getOpenCourseUI : (username)=>{
            openCourseUI(username);
        },

        getValues : ()=>{
            let values =  readLoginValues();
            return values;
        },

        renderSection : (section)=>{
            renderSections(section);
        },

        renderItem : (content,sectionId)=>{
            renderItems(content,sectionId);
        },

        changeNames : (name)=>{
            changeName(name)
        }

    }


})();


//Data controller
var DataController = (function(){

    const id = [0];
    
    function idGenerator(){
        //console.log(id[id.length-1]+1)
        id.push(id[id.length - 1]+1);
        return id[id.length - 1];
    }

    let htmlandcss = [{
        username : 'akshat_triv',
        password : 'reymysterio619'
    },{
        username : 'guest',
        password : '1234'
    }];

    let javascript = [{
        username : 'akshat_triv',
        password : 'reymysterio619'
    },{
        username : 'guest',
        password : '1234'
    }];

    let htmlandcssIntro = {
        course_name : 'HTML 5 And CSS 3 : Build responsive websites ',
        course_time : '12hr | Jonas Schmedtmann',
        course_description : '***BEST SELLER***** This is the best course available on udemy and my personal faviourate, even  I learned web designing from this course. If you\'re someone who wanna learn web development this is the best course to start your amazing journey. Compelete beginners can join in, NO prior knowledge of anything is required.',
        course_video : 'https://playhydrax.com/?v=3ysx9b31-'
    };

    let javascriptIntro = {
        course_name : 'Complete JavaScript Course : Build Real Projects!',
        course_time : '28hr | Jonas Schmedtmann',
        course_description : '***BEST SELLER***** Another of my best course I took on udemy. In this course you\'ll learn everything about Javascript and you\'ll be able to call yourself a Javascript developer.<br> Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack',
        course_video : 'https://playhydrax.com/?v=LlY5cu7n8'
    };

    let javascriptContent = [{
        sectionName : 'Course Introduction',
        sectionId : idGenerator(),
        time : '9min ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=LlY5cu7n8',
            name : 'Welcome to the Course!'
        },{
            videoSrc : './docs/javascript/read.html',
            name : 'Read before you start (document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=hYAjlPHu5',
            name : 'Setting up Our Tools'
        }]
    },{
        sectionName : 'JavaScript Language',
        sectionId : idGenerator(),
        time : '4hr ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=PhAJ3ewIM',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the code (document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=Zw03Qjw3n',
            name : 'Let\'s start coding!'
        },{
            videoSrc : 'https://playhydrax.com/?v=igXX42OhC',
            name : 'A Brief Introduction to JavaScript'
        },{
            videoSrc : 'https://playhydrax.com/?v=_T76DC-8t',
            name : 'Variable Mutation and Type Coercion'
        },{
            videoSrc : 'https://playhydrax.com/?v=Q14zPj7pI',
            name : 'Basic Operators'
        },{
            videoSrc : 'https://playhydrax.com/?v=otHxrbJ94',
            name : 'Operator Precedence'
        },{
            videoSrc : 'https://playhydrax.com/?v=xRLcFwixS',
            name : 'Coding Challenge 1 '
        },{
            videoSrc : 'https://playhydrax.com/?v=4J4j4662U',
            name : 'Coding Challenge 1: Solution'
        },{
            videoSrc : 'https://playhydrax.com/?v=sv7Sfw-gH',
            name : 'If / else Statements'
        },{
            videoSrc : 'https://playhydrax.com/?v=OFk8Lo-hf',
            name : 'Boolean Logic'
        },{
            videoSrc : './docs/under.html',
            name : 'The Ternary Operator and Switch'
        },{
            videoSrc : 'https://playhydrax.com/?v=IgkJQP2Y3',
            name : 'Truthy and Falsy Values and Equality Operators'
        },{
            videoSrc : ' https://playhydrax.com/?v=W4flcHOOy',
            name : 'Coding Challenge 2'
        },{
            videoSrc : 'https://playhydrax.com/?v=mBPlKHCFl',
            name : 'Coding Challenge 2: Solution'
        },{
            videoSrc : 'https://playhydrax.com/?v=61ZR8rN5M',
            name : 'Functions'
        },{
            videoSrc : 'https://playhydrax.com/?v=iMe6i7XCl',
            name : 'Function Statements and Expressions'
        },{
            videoSrc : 'https://playhydrax.com/?v=DR0brHE8q',
            name : 'Arrays'
        },{
            videoSrc : 'https://playhydrax.com/?v=J6z1VgAid',
            name : ' Coding Challenge 3 '
        },{
            videoSrc : 'https://playhydrax.com/?v=uRHyMp9OP',
            name : ' Coding Challenge 3: Solution'
        },{
            videoSrc : 'https://playhydrax.com/?v=-AgoRfvMd',
            name : 'Objects and Properties'
        },{
            videoSrc : 'https://playhydrax.com/?v=Rv2zZHBmI',
            name : 'Objects and Methods'
        },{
            videoSrc : 'https://playhydrax.com/?v=S0qK7Dphj2',
            name : 'Coding Challenge 4'
        },{
            videoSrc : 'https://playhydrax.com/?v=jDzFPWuCO',
            name : 'Coding Challenge 4: Solution'
        },{
            videoSrc : 'https://playhydrax.com/?v=Ke7ZdOA-2',
            name : 'Loops and Iteration'
        },{
            videoSrc : 'https://playhydrax.com/?v=zgUI_tcJN',
            name : 'Coding Challenge 5'
        },{
            videoSrc : 'https://playhydrax.com/?v=0lOjBB7Yf',
            name : 'Coding Challenge 5: Solution, Part 1'
        },{
            videoSrc : 'https://playhydrax.com/?v=36cVKEu9N',
            name : 'Coding Challenge 5: Solution, Part 2'
        },{
            videoSrc : 'https://playhydrax.com/?v=STmjLPAtz',
            name : 'JavaScript Versions: ES5, ES6 /ES2015 and ES6+'
        }]
    },{
        sectionName : 'How JavaScript Works Behind the Scenes',
        sectionId : idGenerator(),
        time : '54min ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=CD-O5UTOM',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the Code'
        },{
            videoSrc : 'https://playhydrax.com/?v=H6BIE1C1F',
            name : 'How Our Code Is Executed: JavaScript Parsers and Engines'
        },{
            videoSrc : 'https://playhydrax.com/?v=FEnuL2_XS',
            name : 'Execution Contexts and the Execution Stack'
        },{
            videoSrc : 'https://playhydrax.com/?v=QEcnCNmBp',
            name : 'Execution Contexts in Detail : Creation and Execution Phases and Hoisting'
        },{
            videoSrc : 'https://playhydrax.com/?v=N3XLx48Pm',
            name : 'Hoisting in Practice'
        },{
            videoSrc : 'https://playhydrax.com/?v=GIIuckduO',
            name : 'Scoping and the Scope Chain'
        },{
            videoSrc : 'https://playhydrax.com/?v=ZtnaCLR1p',
            name : 'The \'this\' Keyword'
        },{
            videoSrc : 'https://playhydrax.com/?v=QtQrzHPhu',
            name : 'The \'this\' Keyword in Practice'
        }]
    },{
        sectionName : 'JavaScript in the Browser: DOM Manipulation and Events',
        sectionId : idGenerator(),
        time : '2hr 8min',
        content : [{
            videoSrc : './docs/under.html',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the Code (Document)'
        },{
            videoSrc : './docs/under.html',
            name : 'The DOM and DOM Manipulation'
        },{
            videoSrc : './docs/under.html',
            name : '5-Minute HTML and CSS Crash Course'
        },{
            videoSrc : './docs/under.html',
            name : 'Project Setup and Details'
        },{
            videoSrc : 'https://playhydrax.com/?v=VXUYB0QhM',
            name : 'First DOM Access and Manipulation'
        },{
            videoSrc : 'https://playhydrax.com/?v=jEgrNRNfd',
            name : 'Events and Event Handling: Rolling the Dice'
        },{
            videoSrc : 'https://playhydrax.com/?v=psUnevx5m',
            name : 'Updating Scores and Changing the Active Player'
        },{
            videoSrc : 'https://playhydrax.com/?v=o8LipL_qV',
            name : 'Creating a Game Initialization Function'
        },{
            videoSrc : 'https://playhydrax.com/?v=iAbSiHxgR',
            name : 'Finishing Touches: State Variables'
        },{
            videoSrc : './docs/under.html',
            name : 'Coding Challenge 6'
        },{
            videoSrc : 'https://playhydrax.com/?v=il7xmtPrn',
            name : 'Coding Challenge 6: Solution, Part 1'
        },{
            videoSrc : 'https://playhydrax.com/?v=MiFBvyciI',
            name : 'Coding Challenge 6: Solution, Part 2'
        },{
            videoSrc : 'https://playhydrax.com/?v=nWXfLytWk',
            name : 'Coding Challenge 6: Solution, Part 3'
        }]
    },{
        sectionName : 'Advanced JavaScript: Objects and Functions',
        sectionId : idGenerator(),
        time : '2hr 37min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=bQ448PIJs',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the Code (Document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=OY_wuPhT-',
            name : 'Everything Is an Object: Inheritance and the Prototype Chain'
        },{
            videoSrc : 'https://playhydrax.com/?v=bafU0G3k2',
            name : 'Creating Objects: Function Constructors'
        },{
            videoSrc : 'https://playhydrax.com/?v=4OE8ie0wy',
            name : 'The Prototype Chain in the Console'
        },{
            videoSrc : 'https://playhydrax.com/?v=lwNmhaEui',
            name : 'Creating Objects: Object.create'
        },{
            videoSrc : 'https://playhydrax.com/?v=jj0eOrWM4',
            name : 'Primitives vs. Objects'
        },{
            videoSrc : 'https://playhydrax.com/?v=9MfxDlXPJ',
            name : 'First Class Functions: Passing Finctions as Argumemnts'
        },{
            videoSrc : 'https://playhydrax.com/?v=BGigV2TPy',
            name : 'First Class Functions: Functions Returning Functions'
        },{
            videoSrc : 'https://playhydrax.com/?v=i50fySmlR',
            name : 'Immediately Invoked Function Expressions (IIFE)'
        },{
            videoSrc : 'https://playhydrax.com/?v=nUcF7N4El',
            name : 'Closures'
        },{
            videoSrc : 'https://playhydrax.com/?v=6h_lyXxcU',
            name : 'Bind, Call and Apply'
        },{
            videoSrc : 'https://playhydrax.com/?v=UTyge0eHr',
            name : 'Coding Challenge 7'
        },{
            videoSrc : 'https://playhydrax.com/?v=8PoVBU4Dz',
            name : 'Coding Challenge 7: Solution, Part 1'
        },{
            videoSrc : 'https://playhydrax.com/?v=DwtIB7pdj',
            name : 'Coding Challenge 7: Solution, Part 2'
        }]
    },{
        sectionName : 'Putting It All Together: The Budget App Project',
        sectionId : idGenerator(),
        time : '4hr 55min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=fuEdQo0t1',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the code (document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=M03Z95Wq5',
            name : 'Project Setup and Details'
        },{
            videoSrc : 'https://playhydrax.com/?v=UQJFrrCD2',
            name : 'Project Planning and Architecture: Step 1'
        },{
            videoSrc : 'https://playhydrax.com/?v=0CX8V2JEl',
            name : 'Implementing the Module Pattern'
        },{
            videoSrc : 'https://playhydrax.com/?v=H5O1-bNsg',
            name : 'Setting up the First Event Listeners'
        },{
            videoSrc : 'https://playhydrax.com/?v=5lSX-bK6b',
            name : 'Reading Input Data'
        },{
            videoSrc : 'https://playhydrax.com/?v=FTGb58K5g',
            name : 'Creating an Initialization Function'
        },{
            videoSrc : 'https://playhydrax.com/?v=Msvxd-DO9',
            name : 'Creating Income and Expense Function Constructors'
        },{
            videoSrc : 'https://playhydrax.com/?v=MgD5XYhIZ',
            name : 'Adding a New Item to Our Budget Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=KIskVCBTu',
            name : 'Adding a New Item to the UI'
        },{
            videoSrc : 'https://playhydrax.com/?v=SiTMcwMZP',
            name : 'Clearing Our Input Fields'
        },{
            videoSrc : 'https://playhydrax.com/?v=MlACCekum',
            name : 'Updating the Budget: Controller'
        },{
            videoSrc : './docs/under.html',
            name : 'Updating the Budget: Budget Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=_mSgWQNuw',
            name : 'Updating the Budget: UI Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=qAeGftEyy',
            name : 'Project Planning and Architecture: Step 2'
        },{
            videoSrc : 'https://playhydrax.com/?v=tFbVr5x7O',
            name : 'Event Delegation'
        },{
            videoSrc : './docs/under.html',
            name : 'Setting up the Delete Event Listener Using Event Delegation'
        },{
            videoSrc : 'https://playhydrax.com/?v=-_D4PslAB',
            name : 'Deleting an Item from Our Budget Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=7rA4OSvHs',
            name : 'Deleting an Item from the UI'
        },{
            videoSrc : 'https://playhydrax.com/?v=1liwDgtyH',
            name : 'Project Planning and Architecture: Step 3'
        },{
            videoSrc : './docs/under.html',
            name : 'Updating the Percentages: Controller'
        },{
            videoSrc : './docs/under.html',
            name : 'Updating the Percentages: Budget Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=6aR3Y9PuA',
            name : 'Updating the Percentages: UI Controller'
        },{
            videoSrc : 'https://playhydrax.com/?v=PzwLNJyxz',
            name : 'Formatting Our Budget Numbers: String Manipulation'
        },{
            videoSrc : 'https://playhydrax.com/?v=smIc-8LCp',
            name : 'Displaying the Current Month and Year'
        },{
            videoSrc : './docs/under.html',
            name : 'Finishing Touches: Improving the UX'
        },{
            videoSrc : './docs/under.html',
            name : 'We\'ve Made It! Final Considerations'
        }]
    },{
        sectionName : 'Next Generation JavaScript: Intro to ES6 / ES2015',
        sectionId : idGenerator(),
        time : '3hr 21min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=jy67j-sba',
            name : 'Section Intro'
        },{
            videoSrc : './docs/javascript/downloadthecode.html',
            name : 'Download the Code (Document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=YjElOEbuR',
            name : 'What\'s new in ES6 / ES2015'
        },{
            videoSrc : 'https://playhydrax.com/?v=DwSf4zi11',
            name : 'Variable Declarations with let and const'
        },{
            videoSrc : 'https://playhydrax.com/?v=3e96nd9i0',
            name : 'Blocks and IIFEs'
        },{
            videoSrc : 'https://playhydrax.com/?v=ldeO1ztv7',
            name : 'Strings in ES6 / ES2015'
        },{
            videoSrc : 'https://playhydrax.com/?v=6y6CkLtzg',
            name : 'Arrow Functions: Basics'
        },{
            videoSrc : 'https://playhydrax.com/?v=bK8F8rn8C',
            name : 'Arrow Functions: Lexical \'this\' Keyword'
        },{
            videoSrc : 'https://playhydrax.com/?v=IPqFo62Bz',
            name : 'Destructuring'
        },{
            videoSrc : 'https://playhydrax.com/?v=IjENCWQyR',
            name : 'Arrays in ES6 / ES2015'
        },{
            videoSrc : 'https://playhydrax.com/?v=MxrOQaEjl',
            name : 'The Spread Operator'
        },{
            videoSrc : 'https://playhydrax.com/?v=gBiCc04pd',
            name : 'Rest Parameters'
        },{
            videoSrc : 'https://playhydrax.com/?v=f6HxGWehH',
            name : 'Default Parameters'
        },{
            videoSrc : 'https://playhydrax.com/?v=qIUUVPp7S',
            name : 'Maps'
        },{
            videoSrc : 'https://playhydrax.com/?v=FLS3BMl_l',
            name : 'Classes'
        },{
            videoSrc : 'https://playhydrax.com/?v=I7aGp8VV_',
            name : 'Classes with Subclasses'
        },{
            videoSrc : 'https://playhydrax.com/?v=gm-XfwMxU',
            name : 'Coding Challenge 8'
        },{
            videoSrc : './docs/under.html',
            name : 'Coding Challenge 8: Solution'
        }]
    },{
        sectionName : 'Asynchronous JavaScript: Promises, Async/Await and AJAX',
        sectionId : idGenerator(),
        time : '1hr 29min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=4cptLO1_r',
            name : 'Section Intro'
        },{
            name : 'An Example of Asynchronous Javascript',
            videoSrc : 'https://playhydrax.com/?v=DW2B_hyp6'
        },{
            videoSrc : 'https://playhydrax.com/?v=RrJ_0CMua',
            name : 'Understanding Asynchronous Javascript: The Event Loop'
        },{
            videoSrc : 'https://playhydrax.com/?v=vwlktfIb5',
            name : 'The Old Way: Asynchronous Javascript Callbacks'
        },{
            videoSrc : 'https://playhydrax.com/?v=b1l6tUMn5',
            name : 'From Callback Hell to Promises'
        },{
            videoSrc : 'https://playhydrax.com/?v=BDZ5kLj_I',
            name : 'From Promises to Async/Await'
        },{
            videoSrc : 'https://playhydrax.com/?v=xJ7s088Ck',
            name : 'AJAX and APIs'
        },{
            videoSrc : './docs/under.html',
            name : 'Making AJAX Calls with Fetch and Promises'
        },{
            videoSrc : './docs/under.html',
            name : 'Making AJAX Calls with Fetch and  Async/Await'
        }]
    },{
        sectionName : 'Modern Javascript Using ES6, NPM, Babel and Webpack(Coming Soon)',
        sectionId : idGenerator(),
        time : '7hr 4min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=CeAEBSWf8',
            name : 'Secrion Intro'
        },{
            videoSrc : './docs/under.html',
            name : 'Read please'
        }]
    }]

    let htmlandcssContent = [{
        sectionName : 'Course Introduction',
        sectionId : idGenerator(),
        time : '8min ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=3ysx9b31-',
            name : 'Let\'s start this amazing jorney'
        },{
            videoSrc : './docs/doctest.html',
            name : 'Read before you start (document)'
        },{
            videoSrc : './docs/Ebook.html',
            name : 'My E-Book resources for HTML and CSS (document)'
        }]
    },{
        sectionName : 'Dive into HTML',
        sectionId : idGenerator(),
        time : '29min',
        content : [{
            videoSrc : './docs/downloadthecode.html',
            name : 'Download the code (link)'
        },{
            videoSrc : 'https://playhydrax.com/?v=X3XqQDn_4',
            name : 'Our main tool: Brackets text editor'
        },{
            videoSrc : 'https://playhydrax.com/?v=TGRXQexhr',
            name : 'What is HTML?'
        },{
            videoSrc : 'https://playhydrax.com/?v=6drt5Odnr',
            name : 'The structure of an HTML document '
        },{
            videoSrc : 'https://playhydrax.com/?v=bzlbhG8_E',
            name : 'Starting to fill the structure'
        },{
            videoSrc : 'https://playhydrax.com/?v=NdToEfuJy',
            name : 'Images and attributes'
        },{
            videoSrc : 'https://playhydrax.com/?v=twA7NGZCH',
            name : 'One more thing: links'
        }]
    },{
        sectionName : 'Formatting with CSS',
        sectionId : idGenerator(),
        time : '1hr 12min ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=D8sI6Fxz7',
            name : 'Getting started with CSS'
        },{
            videoSrc : 'https://playhydrax.com/?v=TuPwxpg0B',
            name : 'Starting to make our webpage pretty: text'
        },{
            videoSrc : 'https://playhydrax.com/?v=4N3_5hILO',
            name : 'Colors'
        },{
            videoSrc : 'https://playhydrax.com/?v=h6EWF2H2D',
            name : 'Classes and ID\'s'
        },{
            videoSrc : 'https://playhydrax.com/?v=aFnkFCv0c',
            name : 'The CSS box model'
        },{
            videoSrc : 'https://playhydrax.com/?v=htf4RMItM',
            name : 'Building a simple layout'
        },{
            videoSrc : 'https://playhydrax.com/?v=fw_sZIUGb',
            name : 'Polishing our Blog post'
        },{
            videoSrc : 'https://playhydrax.com/?v=6IanBZmoV',
            name : 'Relative v/s Absolute'
        },{
            videoSrc : 'https://playhydrax.com/?v=9T_6MsTUH',
            name : 'Getting startted with the Chrome Development tools'
        }]
    },{
        sectionName : 'Web Design Basics',
        sectionId : idGenerator(),
        time : '40min ',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=k_SfX798O',
            name : 'Introduction to web design'
        },{
            videoSrc : 'https://playhydrax.com/?v=BOZ3zusKk',
            name : 'Beautiful tyography'
        },{
            videoSrc : 'https://playhydrax.com/?v=GC2q5Zwix',
            name : 'Using colors like a pro'
        },{
            videoSrc : '',
            name : 'The meaning of colors in web design'
        },{
            videoSrc : 'https://playhydrax.com/?v=OMZwMIGyk',
            name : 'Working with Images'
        },{
            videoSrc : 'https://playhydrax.com/?v=LSzPU2VNo',
            name : 'Working with icons'
        },{
            videoSrc : 'https://playhydrax.com/?v=tHwCw9v__',
            name : 'Spacing and layout'
        },{
            videoSrc : 'https://playhydrax.com/?v=mc4JRGYTq',
            name : 'Introduction to User Experience'
        },{
            videoSrc : 'https://playhydrax.com/?v=MjqQm6Vaf',
            name : 'Getting Inspired: The secret ingredient for stunning web design'
        },{
            videoSrc : '#',
            name : 'Wrapping up what we\'ve learned in this section '
        }]
    },{
        sectionName : 'The killer website project',
        sectionId : idGenerator(),
        time : '5hr 24min',
        content : [{
            videoSrc : './docs/downloadthecode.html',
            name : 'Download the code (link)'
        },{
            videoSrc : 'https://playhydrax.com/?v=sYunvHtPW',
            name : 'The 7 real world steps to a fully functional website'
        },{
            videoSrc : './docs/Ebook.html',
            name : 'Download the 7 steps here (link)'
        },{
            videoSrc : './docs/Ebook.html',
            name : 'Omnifood project - READ BEFORE YOU START (document)'
        },{
            videoSrc : 'https://playhydrax.com/?v=49EsxZfHJ',
            name : 'Starting to put the 7 steps into action'
        },{
            videoSrc : 'https://playhydrax.com/?v=XTxOnC7OS',
            name : 'First development steps'
        },{
            videoSrc : 'https://playhydrax.com/?v=dN4IrfIvP',
            name : 'Setting up the fluid grid for responsive webdesign'
        },{
            videoSrc : 'https://playhydrax.com/?v=TuxarcLUy',
            name : 'Building the header - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=Wd7bElsGIN',
            name : 'Building the header - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=OOBMhYlbX',
            name : 'Building the header - part III'
        },{
            videoSrc : 'https://playhydrax.com/?v=QJ7o7Cgu3',
            name : 'Building the features section - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=mz16i0cli',
            name : 'Building the features section - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=SvsdNbLaW',
            name : 'Building the favourite meals - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=j_OrhAvAz',
            name : 'Building the favourite meals - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=p3Ms3c8dd',
            name : 'Building the how-it-works section - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=Ko108QlbL',
            name : 'Building the how-it-works section - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=yq1oazDrL',
            name : 'Building the cities section - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=fqVJ10dRR',
            name : 'Building the cities section - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=sdO9hx-LO',
            name : 'Building the customer testimonials section - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=sh42U0Hz_',
            name : 'Building the customer testimonials section - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=eMydFf8zT',
            name : 'Building the sign-up section - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=it-e0UF3Q',
            name : 'Building the sign-up section - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=Q4BqKhtYv',
            name : 'Building the contact-form form - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=jvSW1wdDe',
            name : 'Building the contact-form form - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=poSMApATo',
            name : 'Building the footer - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=4ibujH_x9',
            name : 'Building the footer - part II'
        }]
    },{
        sectionName : 'Responsive web design with media queries',
        sectionId : idGenerator(),
        time : '54min',
        content : [{
            videoSrc : 'https://playhydrax.com/?v=dGCmmy6dr',
            name : 'Makiing the web page responsive - part I'
        },{
            videoSrc : 'https://playhydrax.com/?v=IxIQQnlrG',
            name : 'Making the web page responsive - part II'
        },{
            videoSrc : 'https://playhydrax.com/?v=sVSS-7wWL',
            name : 'A note about web browsers'
        }]

    },{
        sectionName : 'Let\'s add some cool effects',
        sectionId : idGenerator(),
        time : '1hr 19min',
        content : [{
                videoSrc : './docs/downloadthecode.html',
                name : 'Download the code'
            },{
                videoSrc : 'https://playhydrax.com/?v=7wfDhBjmH',
                name : 'Introduction to Jquery'
            },{
                videoSrc : 'https://playhydrax.com/?v=p8usk4FPm',
                name : 'Building a sticky navigation - part I'
            },{
                videoSrc : 'https://playhydrax.com/?v=eJ15uZiEA',
                name : 'Building a sticky navigation - part II'
            },{
                videoSrc : 'https://playhydrax.com/?v=JZPM0Xuqv',
                name : 'Scrolling to elements'
            },{
                videoSrc : 'https://playhydrax.com/?v=b0eyI53Na',
                name : 'Adding animations on scroll'
            },{
                videoSrc : 'https://playhydrax.com/?v=Whd-EJy6o',
                name : 'Making the navigation responsive'
            }]
    },{
        sectionName : 'Optimizing and launching our website',
        sectionId : idGenerator(),
        time : '41min',
        content : [{
                videoSrc : 'https://playhydrax.com/?v=X0G2cO6BB',
                name : 'Final touch: creating a favicon'
            },{
                videoSrc : 'https://playhydrax.com/?v=KxGbzA4U6',
                name : 'Performance optimization - site speed'
            },{
                videoSrc : 'https://playhydrax.com/?v=-_H0O3Mdr',
                name : 'Basic search engine optimization - SEO'
            },{
                videoSrc : 'https://playhydrax.com/?v=qis9yl5WW',
                name : 'Let\'s launch our webpage'
            },{
                videoSrc : 'https://playhydrax.com/?v=VKxWRxqOA',
                name : 'Google Analytics'
            }]
    },{
        sectionName : 'Conclusion',
        sectionId : idGenerator(),
        time : '5min',
        content : [{
                videoSrc : 'https://playhydrax.com/?v=jaTB4uoxu',
                name : 'You made it! congratulations'
            }]
    },{
        sectionName : 'Bonus:lectures',
        sectionId : idGenerator(),
        time : '4hr 30min',
        content : [{
                videoSrc : 'https://playhydrax.com/?v=T6Hg4bGN1',
                name : 'What\'s new in CSS : FlexBox introduction - part I'
            },{
                videoSrc : 'https://playhydrax.com/?v=XrJvQ3R6Q',
                name : 'What\'s new in CSS : FlexBox introduction - part II'
            },{
                videoSrc : 'https://playhydrax.com/?v=k3Xpsy9Eh',
                name : 'Using php to make our form work'
            },{
                videoSrc : 'https://playhydrax.com/?v=wip1X1Zc0',
                name : 'Super effective ways to improve your website\'s conversion'
            }]
    }]    
    



    return {
        htmlandcss : ()=>htmlandcss,

        htmlandcssContent : ()=>htmlandcssContent,

        htmlandcssIntro : ()=>htmlandcssIntro,

        javascript : ()=>javascript,

        javascriptContent : ()=>javascriptContent,

        javascriptIntro : ()=>javascriptIntro
    }


})();

//Controller

var Controller = (function(UICtrl,DataCtrl){

    let domStrings = UICtrl.getDomStrings();

    //console.log(domStrings);

    //checking local storage

    let luser = localStorage.getItem('username');
    let lpass = localStorage.getItem('password');
    let lcour = localStorage.getItem('course');

    if(luser!=null && lpass!=null && lcour!=null){
        login(luser,lpass,lcour);
    }

    //login function

    function login(username,password,course){
        
        let i = 0,courseFullName;

        let courseUsers = DataCtrl[course]();
        let courseContent = DataCtrl[course+'Content']();

        let data = DataCtrl[course+'Intro']();   

        UICtrl.changeNames(data);

        courseUsers.forEach(e => {
            if(e.username == username && e.password == password){
                i++;
                openCourse(username,password,course);
            }
        });

        //rendering the sections
        courseContent.forEach(e =>{
            UICtrl.renderSection(e);
            UICtrl.renderItem(e.content,e.sectionId);
        });

        if(i==0)
        alert('Incorret username or password');
    }

    //openCourse function

    function openCourse(username,password,course){
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        localStorage.setItem('course',course);

        UICtrl.getOpenCourseUI(username);

    }
    
    //Event Listener

    domStrings.login_button.addEventListener('click',()=>{
        values = UICtrl.getValues();
        login(values.username,values.password,values.course);
    });

    document.addEventListener('keypress',function(e){
        if(e.keycode===13 || e.which===13){
            values = UICtrl.getValues();
            login(values.username,values.password,values.course);
        }
    });



})(UIController,DataController);