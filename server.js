app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});
 
app.get("/api/timestamp/:date?", (req, res) => {
 
  //utc date?
  let date = new Date(req.params.date)
  if (date != "Invalid Date") {
   res.json({unix: date.getTime(), utc: date.toUTCString()});
  }
 
  //unix timestamp?
  const dateInt = parseInt(req.params.date);
  date = new Date(dateInt).toUTCString();
  if (date != "Invalid Date") {
    res.json({unix: dateInt, utc: date});
  }
   
  //invalid input
  res.json({ error: date });
});
