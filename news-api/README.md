<h1 align="center">
  <a href="https://github.com/elkinny">
    <img src="https://raw.githubusercontent.com/elkinny/Curriculum-Vitae/master/ekins_logo.png" alt="Elkin" width="200">
  </a>
  <br>
    NewsAPI project
</h1>

<h4 align="center">Just a small project based on <a href="https://expressjs.com" target="_blank">Express</a> + <a href="https://mongoosejs.com/" target="_blank">Mongoose (MongoDB)</a>.

<p align="center">
    <img src="https://forthebadge.com/images/badges/built-by-codebabes.svg">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
    <img src="https://forthebadge.com/images/badges/powered-by-electricity.svg">
</p>

<h2 align="center"> God bless to: </h2>
<ul>
  <li><a href="https://expressjs.com">Express</a> - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</li>
  <li><a href="https://nodejs.org/en/">Node</a> - designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done, Node will sleep.</li>
  <li><a href="https://docs.npmjs.com/about-npm/index.html">npm</a> - the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.</li>
  <li><a href="https://scrimba.com/g/gintrotoes6">ES6+</a> - JavaScript has grown a lot in the past few years and lot of new features had been added to JavaScript to make it much more powerful and productive programming language</li>
  <li><a href="https://www.mongodb.com/">MongoDB</a> - a document database with the scalability and flexibility that you want with the querying and indexing that you need </li>
  <li><a href="https://mongoosejs.com/">Mongoose</a> - mongodb object modeling for node.js. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
  </li>
  <li><a href="https://jestjs.io">Jest</a> - Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
  </li>
</ul>

<h2>How to</h2>
<h4>First of all:</h4>
<ul>
  <li>Install Mongo & Node</li>
  <li>Create 'NewsAPI' db with news and users collections</li>
  <li>Have fun in Postman</li>
</ul>
<h4>- To sign up:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/users/signup'</li>
  <li>Go to 'Body' tab</li>
  <li>Choose raw and select type from 'text' to 'json'</li>
  <li>Add in textArea
      ```
      {
        "username": "Your login",
        "password": "Your password"
      }
      ```
  </li>
  <li>Send!</li>
</ul>
<h4>- To get all data:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/news'</li>
  <li>Send!</li>
</ul>
<h4>- To get data by id:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/news/<b>your id</b>'</li>
  <li>Send!</li>
</ul>
<h4>- To add data:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/news'</li>
  <li>Go to 'Body' tab</li>
  <li>Choose raw and select type from 'text' to 'json'</li>
  <li>Add in textArea
      ```
      {
        "title": "Your title",
        "author": "Your author",
        "content": "Your text"
      }
      ```
  </li>
  <li>Go to 'Authorization' tab</li>
  <li>Select from Type menu Basic Auth</li>
  <li>Put your Username and Password</li>
  <li>Send!</li>
</ul>
<h4>- To edit data:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/news/<b>your id</b>'</li>
  <li>Go to 'Body' tab</li>
  <li>Choose raw and select type from 'text' to 'json'</li>
  <li>Add in textArea (you can add only field that you want to edit)
      ```
      {
        "title": "Your title",
        "author": "Your author",
        "content": "Your text"
      }
      ```
  </li>
  <li>Go to 'Authorization' tab</li>
  <li>Select from Type menu Basic Auth</li>
  <li>Put your Username and Password</li>
  <li>Send!</li>
</ul>
<h4>- To delete data:</h4>
<ul>
  <li>Open Postman</li>
  <li>Add in reqest field 'http://localhost:3030/news/<b>your id</b>'</li>
  <li>Go to 'Authorization' tab</li>
  <li>Select from Type menu Basic Auth</li>
  <li>Put your Username and Password</li>
  <li>Send!</li>
</ul>
<h4>- To test:</h4>
<ul>
  <li>Run `npm test` in project folder</li>
  <li>Check</li>
</ul>
