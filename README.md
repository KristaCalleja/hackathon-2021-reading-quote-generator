# GreatReader - Solution submitted for the SheSharp and Troopl Hackathon Oct 2021

In October 2021 I attended my first hackathon, organised by [SheSharp](https://www.shesharp.co/) and [Troopl](https://troopl.com/). Together with tens of other coders from around the globe we met up online through Slack, Google Meets and YouTube live videos to discuss the challenge, and our coding experiences.  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The Guidelines of the Hackathon stated as follows:
A successful project should:
- Generate supportive and/or inspirational messages (e.g. "You've got this!" or "All our dreams can come true, if we have the courage to pursue them.") Please note that all messages should follow our Hackathon Code of Conduct.
- Display messages either on-demand (e.g. via button click, Twitter reply) or at timed intervals (e.g. daily reminder bot)

### Links

- Landing page URL: [Greatreader Landing Page](https://kristacalleja.io/hackathon-2021-web-app-landing-page)
- Web app live site URL: [Greatreader live site](https://kristacalleja.github.io/hackathon-2021-reading-quote-generator/)
- Greatreader JavaScript Code: [Github repository](https://github.com/KristaCalleja/hackathon-2021-reading-quote-generator/blob/master/index.js)

## My process

I wanted my web app to display the messages following the termination of a user action, so I came up with the idea of the user setting 'a commitment'. I then settled for a commitment to a reading goal (similar to what is found on Goodreads website (hence the name GreatReader, lol!)). The GreatReader app cheers for you as you go through the month reading up to your reading commitment. 

At first I was confused as to whether I had to have multiple HTML pages with links between them, or if I should use divs which are in/visible according to the user actions. Ultimately, I chose the latter otherwise it would have overloaded the site with a lot of repeated HTML code. I am not yet fluent in React but my heart tells me that this app would have worked in a jiffy with React.js.

As usual, I get carried away designing and positioning my elements. The rose background theme came to me as I stumbled upon [Annie Spratt's](https://unsplash.com/@anniespratt) evocative photo collection on Unsplash. I knew I wanted to see a lot of these pictures so I tried to work around using them and her palette of colours. I think it paired well with the idea of supportive/inspirational messages, kind of, showing self-care, being considerate, taking time for oneself.

I also decided to add a landing page, because, although definitely not necessary for this project, I have been working so many months on my front-end CSS skills, I might as well showcase them, and that is mainly because I just find it to be F.U.N.

### Built with

- Vanilla JavaScript
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

First and foremost, I learned how much I can get done when I have a deadline hanging over my head. :grinning smile:

Jokes apart. My main achievement was putting together all the JS knowledge I've been working on since mid-2021 when I decided I had to take this seriously. DOM manipulation, event handling, arrays, loops, iterations, image sourcing, JS methods and modals. That all happens in just 2 clicks and less than 100 lines of JS code. I also threw in some HTML5 elements, some accessibility, a couple of pseudo-elements and a touch of animations CSS. What fun! 

The main learning point for me was figuring out the loop for creating the 'book reading tracks'. Tristan Vinay and Michael Siega mentored me in the right direction, and I'm happy to finally have the following (mind blowing) code to carry out the action I wanted: 

```js
while (timesToCreateTracks > 0){
  createTracks();
  timesToCreateTracks--;
}
```

Another thing I learned, although I kind of knew it already: these kind of projects never end, that is, I can keep adding more and more features until Hackathon 2022. And that brings me to the next section.

### Continued development

I could have added more features to this app, such as, addressing the case if user inputs more than 4 books in his commitment. Another modal could be created, but I was hesitant to create more HTML and CSS. Ultimately, I want to perfect my JS skills so that I can take it to another level, such as 'React', since I know that is in high demand at the moment. 

### Useful resources

- [Wes Bos Beginner JavaScript](https://wesbos.com/javascript/) - This is the best course in JavaScript I have taken in the past years, I keep returning to the notes time and time again. 

## Author

- Website - [Krista Calleja](https://kristacalleja.github.io/)

## Acknowledgments

A big thank you to Alex Siega and all the other very kind members of SheSharp and Troopl who organised this fun and didactic activity. It was a pleasure! You are an inspiration. Thank you for making us feel part of the community.