import React from 'react';
import BlogCart from './BlogCart';

const Blog = () => {

    const blogs = [{
        id: 1,
        title: 'What are the different ways to manage a state in a React application?',
        description: "There are four main types of state you need to properly manage in your React apps: Local state Global state Server state URL state Let's cover each of these in detail: Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or totrack values for a form component, such as form submission, when the form isdisabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in ourapp, or in multiple components at least.A common example of global state is authenticated user state. If a user islogged into our app, it is necessary to get and change their data throughout ourapplication. Sometimes state we think should be local might become global. Server state – Data that comes from an external server that must be integratedwith our UI state. Server state is a simple concept, but can be hard to manage alongside all of ourlocal and global UI state. There are several pieces of state that must be managed every time you fetch orupdate data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managingserver state much easier.URL state – Data that exists on our URLs, including the pathname and queryparameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URLstate. Try to imagine building a blog without being able to fetch a post basedoff of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these arethe major categories worth focusing on for most applications you build."
    },
    {
        id: 2,
        title: 'How does prototypical inheritance work?',
        description: "Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__."
    },
    {
        id: 3,
        title: 'What is a unit test? Why should we write unit tests?',
        description: "Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing."
    },
    {
        id: 4,
        title: 'React vs. Angular vs. Vue?',
        description: "Undoubtedly, today web applications have become an integral part of everyone's lives. Right from ticket booking to food ordering, cab booking to online shopping, apps are clearly dominating the business world. In fact, technological advancement and mobility have brought about a great change in customer behaviour. As the impact of mobility continues to increase and transform industries globally, therefore, businesses are eagerly looking forward to creating an online presence in 2022.With the availability of thousands of app development, creating an application is not a challenging job but at the same time, if you are assuming that breaking into the mobile app market is the key to success, then you are mistaken. To succeed in this thriving market, it includes in-depth planning, unique strategy, extensive planning and access to top-rated technologies to create an enterprise-level app.However, when it comes to creating an app, what technologies are ruling the app development market?Now, most of you answer — JAVASCRIPT! Undoubtedly, many programming languages come and go, but JavaScript has maintained its position as the one such prominent choice of programming language. Now the question is which framework should you consider for app development in 2022? JavaScript is a type of programming language that offers a wide range of functionality and a plethora of development environments. While each of its frameworks offers unique features and benefits, when it comes to choosing the best framework for the app development, many programmers get consumed finding which one is more convenient and better option to consider in 2022. If you are in the dilemma of which web app development frameworks of JavaScript are considered in 2022, then you need to consider the below survey reports.According to the NPM trends, React, Angular and Vue.js are the most downloaded frameworks of JavaScript but the battle between these frameworks will continue in 2022. If you estimate the downloads of all three web development frameworks from the last 2 years, undoubtedly React is leading while Vue.js downloads prove to be higher than Angular."
    }
    ]
    return (
        <div>

            {
                blogs.map(blog => <BlogCart key={blog.id} blog={blog}></BlogCart>)
            }

        </div>
    );
};

export default Blog;