import React from 'react';

import {useMediaQuery} from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media',media);
    
    return (
    <div>
        { media.lg && <SunAndMoon /> }
    
        <br></br>
        <br></br>
        <h1>HOMEWORK</h1>
        <Essay
         number = {1}
         question= 'What is the difference between Git, Github and Heroku?'
        >
           
           <p>
           Personally, I don't have any previous knowledge in coding. Even though I get the basic definition from Google, I still not quite understand what these definitions mean. So far, my understanding is Git is a coding system that manage files and projects, So different people can work on the same Code together. Git can make the codes working in different versions and deploy the codes from history. Github is an online platform that put the codes together. It is a place to save repositories and share. Github can manage through Git and make everyone able to see and access to each other's codes. Heroku is a web-host that use git as revision system. When you push your Git code to Heroku server it becomes a website so everyone can see. Heroku also focuses more on building applications rather than managing servers or deployment. So I think Github is a Git code share platform and Heroku is Git application building server. 
           </p>


        </Essay>
        <Essay
         number = {2}
         question= 'Explain the difference between HTML, CSS and JS.'
        >
           <p>Html is Hyper-Test Markup Language. It can present texts and documents to a web browser. But its function is very limited. With only HTML, we can't build up a fansy website.</p>
           <p>CSS is cascading style sheets. It is a design language that support Html to make the website more appealing. Although by only using Html can make some appealing effects too, CSS makes the code more oragnized and contains more functions to make the website visually looks good. </p>
           <p>Javascript is more like a functional program to make the website actually works. It can take some imput and return some output. It can make the website looks more advanced and interactive. In real world, a lot of functions require Javascript usage to store data and give feedbacks. In short saying, Javascript requires logic, while HTML is basic structure and CSS serves as a visual appealing tool.</p>


        </Essay>
        <Essay
         number = {3}
         question= 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
        >
           <p>SPA is an application that only loads a single page web document. The javascript inside it updates based on user's interaction. MPA loads entire pages and new pages when users interact. </p>
           <p>SPAs runs faster than traditional multi-pages websites. They operates logic on websites rather on servers. So not every command needs to be sent back and forth to the server, but only the data. For example, Github and Facebook are SPAs. However, MPAs is more budget friendly and more easier to build technologically. Many website with reader-only functions are MPAs. </p>
            <p> SEO: Common myth is that serc</p>
        </Essay>
        <Essay
        number = {4}
         question= 'What is the difference between Web Designer, front-end developer and back-end developer?'
        >
            <p>Web Designer is more focused on the visual effect of a website. He/She may or maynot have programming experience. Their job is to design a useful and pretty interface and hand the prototype to developers.</p>
            <p>Front-end developers is about making sites and web applications render on the client-side. With front-end only, the site is static and will not storage any data. The language they commonly use are HTML, CSS, and Javascript.</p>
            <p>Back-end developers is about making sites and web applications render on the server-side. Back-end developers also work with software stacks that include operating systems, web servers, frameworks, languages, programming APIs and more. The language they use will contain more logic and not limited to C, C++, Java, Python etc. </p>



        </Essay>
        <Essay
        number = {5}
         question= 'Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
        >
            <p>Site relative path is the path from the site’s root folder to a document. It is commonly used on a large website that uses several servers, or one server that hosts several sites.</p>
            <p>Document relative path is hierarchical path that locates a file starting from the current working territory. They are used one current working file and the linked file are in the same folder and are not gonna ever be separate in the future. It can also link a file from another folder using folder hierachy. </p>
            <p>An absolute path is a path that describes the location of a file or folder regardless of the current working directory. It contains the complete location of a file since the root. </p>
        </Essay>
        <Essay
        number = {6}
         question= ' What is the difference between jpg gif png svg images? '
        >
            <p>Jpg takes very little storage space. It is fast to upload and fast to download. Jpg contains millions of colors and is most commonly use in web n mobile browsers. It is a lose file format which means when compressed, some useless data are permanently deleted from the file causing the image to be blur in some cases.</p>
            <p>Gif is smaller than JPG and thus can support smaller bandwidth. It only contains up to 256 colors. It is use for small simple graphics but it can animated. It is a loseless file format which means they don't lose data during compression.</p>
            <p>PNG is ideal when size of file is not restricted. It can also be animated and contain millions of colors. When using a highly detailed image, PNG works the best. It also supports transparency. It is also a loseless file format.</p>
            <p>SVG is the only vector file of the four formats, which means it is clear at any resolution or size. SVG can also support animation, transparency and gradients but they tend to become large file. It is also a loseless file format.</p>
        </Essay>
        <Essay
        number = {7}
         question= ' Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps. '
        >
            <li>Project Manager: Project managers are responsible for plan and distribute the project. They make sure the project is executing correctly.  It is also their jobs to define the start of the project and the finish of the project.</li>
            <li>Business Analyst:  He or she analyzes the market environment, and system of businesses. It is important to determine the direction of a business i.e. products, locations, services, programs through data analysis.  </li>
            <li>Scrum Master: It is a role to ensure the team follows the principles and disciplines of projects. This person is responsible for clearing obstacles and protecting the team from outside interruptions and distractions.</li>
            <li>UX designer: Their work focuses on a user's interaction with a product, and finds out possible business opportunities. Their work often includes design, usability, functionality, and even development and branding of the product. </li>
            <li>Web Developer/Engineer: They create and maintain websites. They also keep track of a website's performance and capacity for further  updates and optimizations. </li>
            <li>Quality Assurance Tester: They examine newly developed applications to make sure they perform as intended. They also take responsible for computer-automated quality assurance programs function properly. </li>
            <li>Dev OPS: A DevOps engineer connects between the development team and the operation team. He/She create programs and tools to help the development process run.  </li>
        </Essay>
        <Essay
        number = {8}
         question= 'What is considered the right size for an image or video asset?'
        >
            <p>Different purpose of images have different sizes. For example, banner images which appear at top of the webpage, should be 1920x768 pixels. Featured images in main area would be 735x490 pixels. Gallery images can be large, which can up to 200MB size. But larger files take more time to load. People block or profile images are usually 340x340 pixels. </p>
            <p>For videos, it is determined by its purpose as well. 16:9 is the widescreen format for most social media videos and streams. While 21:9 usually used in movies.</p>
        </Essay>
        <Essay
        number = {9}
         question= 'What does it mean for a company to be Agile? What are the pros and cons of being agile?'
        >
            <p>A company being agile means the company responds rapidly and flexibly to customer demands. In this way the company remains competitive in the business.</p>
            <li>Pros: The company might have better costomer satisfaction. It might have competitive products or outputs. It has quite a bit flexibility and the business continues to improve. </li>
            <li>Cons: If a team is not well managed enough, being agile can be a waste of money and time. It can also lead to fragmented output and no end for the project. The planning can be clueless because of this. </li>
        </Essay>
        <Essay
        number = {10}
         question= 'What are testing environments? What is the difference between Local, Dev, QA and Production?'
        >
        <p>Test Environments are spaces for a particular test to make sure the final deployment are free of bugs and errors. A test environment for a system can be browsers or applications. Usually, test environments meet the minimum requirements for the application to function.</p>
        <li>Local: Local environment is to test internal servers and local folders on the BrowserStack cloud. It tests internal servers and private folders on major operating systems and a wide range of browsers through virtual machine. </li>
        <li>Dev: Development environments may contain several different versions of a product. The developer tests code and checks whether the application runs successfully. Then the developers hand in a upgraded version to the next stage.</li>
        <li>QA: A QA environment tests the upgraded version of the application to make sure the new features not breaking the existing functions. It also allows certains users to test the anticipated application. </li>
        <li>Production: A production environment contains just the final version of the product. Once the test is done, the application becomes part of the server. </li>
        </Essay>
        <Essay
        number = {11}
         question= 'Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS) ?'
        >
        <p>An image in HTML provides a visual meaning in context like an identity logo or photo. It also has a text fall-back. It will have a relationship  with the link and rest of the code.</p>
        <p>An CSS image is only for decorative purpose. The web page content still makes sense if the picture is being removed. </p>
        </Essay>
        <Essay
        number = {12}
         question= ' What is the difference between IDs, classes and Tags? How does Specificity play an role in the selection of HTML elements (both in CSS and JS)? '
        >
        <li> ID applies a style to one unique element. ID uses a special URL linked directly to one element. </li>
        <li> Class applies a style to multiple elements. </li>
        <li> Tags are keywords which defines how web browser will display the content. </li>
        <p> Specificity is when there are two or more conflicting CSS rules that point to the same element, the browser follows certain rules to determine which one is most specific and therefore wins out. When the two CSS rules are same specific, the later one wins out. </p>
        </Essay>
        <Essay
        number = {13}
         question= ' What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns? '
        >
        <p>A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. i.e. Mixin, nesting selector, inheritance selector. managing CSS in a more dynamic way using scripts.</p> 
        <p>Styled Components is a library that allows you to use component-level styles in the application. It is written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.</p>
        <p>Separate of concerns is to  to separate the code that accesses the database from the business logic on the backend. However, in this case it put CSS/HTML into a single component. </p>
        </Essay>
    </div>
);


}

export default Homework;