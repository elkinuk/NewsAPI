<h1 align="center">
  <br>
  <a href="https://github.com/elkinny">
    <img src="https://raw.githubusercontent.com/elkinny/Curriculum-Vitae/master/ekins_logo.png" alt="Elkin" width="200">
  </a>
  <br>
    FrontCamp
  <br>
</h1>

<h4 align="center"> A few small project regarding to the <a href="https://www.epam.com">EPAM</a> FrontEnd cources</h4>

<br>
<br>
<p align="center">
    <img src="https://forthebadge.com/images/badges/built-by-codebabes.svg">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
    <img src="https://forthebadge.com/images/badges/powered-by-electricity.svg">
</p>

<h2>Tasks</h2>
<ol>
  <li><h3>ES6 features + NewsAPP</h3> - <a href="https://elkinny.github.io/NewsAPI/index.html">Try it</a></li>
  <li>
    <h3>Express + Mongo</h3>
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
  </li>
</ol>
