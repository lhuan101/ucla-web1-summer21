import React from 'react';
import Essay from './Essay.jsx';
const Homework = () => {
return (
    <div>
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
           

        </Essay>
    </div>
);


}

export default Homework;