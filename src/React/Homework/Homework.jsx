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
    </div>
);


}

export default Homework;