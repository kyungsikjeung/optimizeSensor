const express = require('express')
const app = express()

const port = 3000


app.get('/', (req, res) => {
  res.sendFile('/client/index.html',{root:".."}); 
})

app.get('/sensor', function(req, res) {
     res.send('알고리즘 평가');
});

app.get('/client/javascript/textreader.js', function(req, res) {
  res.sendFile('sensor/client/javascript/textreader.js',{root:".."});  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// util.js 가져오기
app.get('/util.js',(req,res,next)=>{
  res.sendFile(__dirname+'/util.js');
});

// util.js 가져오기
app.get('/Chart.min.js',(req,res,next)=>{
  res.sendFile(__dirname+'/Chart.min.js');
});


