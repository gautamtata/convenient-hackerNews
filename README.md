## Convenient Hacker News
A clone of hacker-news that implements a pane in the middle of screen. A user gets to read the news on the same screen after clicking a news article. The screen size is adjustable.

[![Hackernews clone](https://github.com/gautamtata/convenient-hackerNews/blob/master/hackernews.gif)]

## Motivation
Hackernews is an amazing platform to get the best news articles for CS and entrepreneurship. It has an extremely simplistic design and is very easy to navigate. One problem I was facing as a user was that whenever I click a news article a new webpage enters. I don't get the ability to look at the titles of other news articles and instead have to "go back" to the main-website. This solves that UI problem by presenting the news article on the same page alongside with the main news page.


## Code style
- [Airbnb-React-JSX](https://github.com/airbnb/javascript/tree/master/react)
 
## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
<b>Built with</b>
- [React.js](https://reactjs.org)

- [React-Bootstrap](https://react-bootstrap.github.io/)

- [Axios](https://github.com/axios/axios)

- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

- [Netlify](https://www.netlify.com/)


## Features
Different from other hackernews clones, this web application lets the user view news articles on the same screen as the hackernews main page.


## Installation
```sh
npm install
```

```sh
npm start
```

## API Reference

[HackerNews API](https://github.com/HackerNews/API)


## How to use?
- Landing on the Homepage, it's the same interface as the news.ycombinator.com

- Click on one of the news articles that you are interested in reading.

- Clicking on of the articles renders the webpage onto right side of the screen.

- The Pane is draggable which allows you to resize the screen as needed.

- Clicking on another news article will render that webpage.

## Problems
- Currently, Embedding a webpage on your website is hard. Using iFrame, many websites block your request because of the Content-Security-Policy[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy]. Due to this reason, many websites don't work and this limits what can/cannot be opened in the side pane.

- Another alternative would be to fetch the data using AJAX and then display the response. But the issue I faced with this is, only getting the HTML response really limits the websites that use extensive JS/CSS.


## Credits
- [Inspiration :
What I learned building a hackernews clone](https://codeburst.io/what-i-learned-writing-a-hacker-news-clone-494c8d49a9ae)

- [Vue.js Hackernews clone](https://vuejs.org/v2/examples/hackernews.html)

- [redux based hackernews](https://gitconnected.com/courses/learn-react-redux-tutorial-build-a-hacker-news-clone)

- [Hacker News](https://news.ycombinator.com/)


## License
MIT © [Gautam Tata](https://www.github.com/gautamtata)
