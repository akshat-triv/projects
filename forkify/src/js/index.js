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
        courseDescription : document.querySelector('.cou-description')
    };

    function changeName(data){
        domStrings.courseName.textContent = data.course_name;
        domStrings.courseTime.textContent = data.course_time;
        domStrings.courseDescription.textContent = data.course_description;
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

    let htmlandcssIntro = {
        course_name : 'HTML 5 And CSS 3 : Build responsive websites ',
        course_time : '12hr | Jonas Schmedtmann',
        course_description : '***BEST SELLER***** This is the best course available on udemy and my personal faviourate, even  I learned web designing from this course. If you\'re someone who wanna learn web development this is the best course to start your amazing journey. Compelete beginners can join in, NO prior knowledge of anything is required.'
    };

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

        htmlandcssIntro : ()=>htmlandcssIntro
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