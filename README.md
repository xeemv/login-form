<div id="top"></div>

# Project Title: Login-form

<!--  https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/README.md ===> website where I found this template.
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#Introduction">Introduction About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <!--<li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>-->
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!--<li><a href="#roadmap">Roadmap</a></li>-->
    <!--<li><a href="#contributing">Contributing</a></li>-->
   <!-- <li><a href="#license">License</a></li>-->
    <li><a href="#motivation">Motivation</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- Introduction ABOUT THE PROJECT -->
# Introduction:
This is a landing page that requires users to login or register in order to proceed using standard HTML, CSS, and a small JavaScript file (to assist with the toggle switch from Login to Register). 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [HTML]
* [CSS]
* [JavaScript]


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED 
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
<p align="right">(<a href="#top">back to top</a>)</p> -->



<!--USAGE EXAMPLES-->
## Usage
What worked and things to remember: 
-
    < button type="button" class="toggle-btn" onclick="Login()">Login< /button> 
> This function allows the toggle to switch between Login and Register via the "onclick" element. Will need to set up JS file with functions and vars.
-
    < script language="javascript" type="text/javascript" src="./login.js">< /script> 
> How to link the .js file to your .html file.
- 
    .form-box{ 
    width: 350px;
    height: 680px;
    position: relative;
    margin: 6% auto;
    background: #fff;
    padding: 5px;
   overflow: hidden;
   }
> CSS style to adjust the height if you add more lines to either the Login form or Register form. This is the box will store all the user information required to access your future page.






<p align="right">(<a href="#top">back to top</a>)</p> 



<!-- ROADMAP 
## Roadmap

- [] Feature 1
- [] Feature 2
- [] Feature 3
    - [] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>-->



<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>-->

<!-- Motivation and Learning
 What was your motivation?
 Why did you build this project?
 What problem does it solve?
 What did you learn?
 What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here.-->
 
<!--Motivation -->
## Motivation
I am starting week 1 of my Front End Software Development boot camp program at <a href="https://www.promineotech.com/">Promineo Tech</a>. We are focusing on JavaScript for the next few weeks. Since I worked ahead on this week's material, I wanted to challenge myself to build a simple Login and Registration form as a personal project.  
<p>I came across a tutorial on YouTube created in September 2019, by Easy Tutorial, (<a href="https://lnkd.in/eSmvp9Hc">How To Make Login & Registration Form Using HTML And CSS Step By Step</a>) that caught my attention due to the UI appearance. I wanted something that looked pleasant to the user and not simple or plain; this content creator provided me with that while keeping the tutorial under 20 minutes.</p> 

<p>I have learned my lesson not to start a "simple" project at 10PM going forward. I was up until 2:30AM trying to figure out what I was doing wrong via Googling. And spent most of today weeding through my code and the tutorial slowly.</p>

What I had to figure out during this challenge was: how to place my background image to correctly match up with the video, figure out where I went wrong since my toggle switch was not shifting from Login to Register, and to link my JavaScript file to my HTML correctly.
<p>Attention to details is so important; that was how I realized I made an error using both "Login" and "Log In" in two different areas of my HTML file or not capitalizing "register". All these little things are still a good reminder to be extra careful and double check my work going forward in my boot camp.</p>
<p>The toggle button really helped me to understand how JavaScript plays an important role with websites and applications. As well as how JavaScript helps with data structure and the interactive response of websites, games, or when building web/mobile applications.</p>
<p>I included a few more form ID element code line to the Register section vs what the content creator had on his video. Icons are hyperlink to their own social media home pages. Registeration form does not save data at this time as a new project will need to be created for that form and linked back to this project. </p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Xee M. V. - xeeyang08@gmail.com

Project Link: [https://xeemv.github.io/login-form/](https://xeemv.github.io/login-form/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()<a href="https://lnkd.in/eSmvp9Hc">How To Make Login & Registration Form Using HTML And CSS Step By Step</a>
* []()<a href="https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp">How to Toggle Between Hiding and Showing an element</a>
* []()

<p align="right">(<a href="#top">back to top</a>)</p>

