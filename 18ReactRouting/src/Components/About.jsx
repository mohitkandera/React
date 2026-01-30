import React from 'react'

function About() {
  return (
    <div class="container flex items-center">
        <h1  class="text-3xl font-bold bg-amber-200 h-130 m-5 p-10 ">React Basic Information......</h1>
        <p class="text-2xl bg-amber-100 p-5 ">
           React is an open-source JavaScript library for building user interfaces (UI), maintained by 
           Meta and a community of individual developers. It uses a
            component-based architecture and a Virtual DOM to efficiently update web and mobile applications. 
            Component-Based Architecture: UIs in React are built from small, reusable, self-contained pieces of code called components.
             This modular approach simplifies development, testing, and maintenance.
             Virtual DOM: Instead of directly manipulating the browser's Document Object Model (DOM), 
             React creates a lightweight, in-memory copy of the DOM. When data changes,
              React calculates the most efficient way to update the actual DOM,
              leading to better performance and faster rendering.
   
        </p>
         </div>
    
  )
}

export default About