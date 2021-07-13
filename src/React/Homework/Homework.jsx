import React from 'react';
import Essay from './Essay.jsx';
const Homework = () => {
return (
    <div>HOMEWORK
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
           My answer is as follows


        </Essay>
    </div>
);


}

export default Homework;