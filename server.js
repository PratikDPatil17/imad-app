var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= { 
    
         articleOne: {
        title : 'Article-One | Pratik Patil',
        heading:'Article-One',
        date: '8 Aug 2017',
        content:`<p>
            This is the content for my article This is the content for my articleThis is the content for my articleThis is the content for my articleThis is the content for my articleThis is the content for my article
         </p>
         <p>
         This is the content for my article This is the content for my articleThis is the content for my art icleThis is the content for my articleThis is the content for my articleThis is the content for my article
         </p>
         <p>
         This is the content for my article This is the content for my articleThis is the content for my articleThis is the content for my articleThis is the content for my articleThis is the content for my article
         </p>`
        },

    
         articleTwo:{
        title : 'Article-two | Pratik Patil',
        heading:'Article-Two',
        date: '8 Aug 2017',
        content:  ` <p>This is the content for my second article </p>  `,
    
        },

         articleThree:{
        title : 'Article-three | Pratik Patil',
        heading:'Article-Three',
        date: '8 Aug 2017',
        content:  ` <p>This is the content for my third article </p>  `,    
        },
};
function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head> 
    
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
            <hr/>
            <h3> ${heading} </h3>
            <div>${date}</div>
            <div>
            ${content}
            </div>
        </div>
     </div>   
    </body>
</html>


`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.send(cretateTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
    res.send(createTemplate(articleThree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
