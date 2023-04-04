const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// The API
app.get('/api/timestamp/:time', (req, res) => {
  const time = req.params.time;
  let unix = null;
  
  if(time.includes('-')){
    // If there is '-' in the date parse it to UNIX time
    unix = new Date(time).getTime();
  } else {
    // If there is not '-' in the date then it must be UNIX time
    unix = new Date(parseInt(time)).getTime();
  }

  const utc = new Date(unix).toUTCString();

  if(utc !== 'Invalid Date'){
    res.json({unix: unix, utc: utc});
  } else {
    res.json({error: 'Invalid Date'});
  }
});
// Get default current time
app.get('/api/timestamp/', (req, res) => {
  const time = {
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
    mode: 'asdas'
  };
  res.json(time);
})

app.listen(8000);

// 6 hours
