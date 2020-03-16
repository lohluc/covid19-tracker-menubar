#!/usr/bin/env /usr/local/bin/node

const country = "Germany"; // CHANGE COUNTRY NAME (e.g. Finland, United Arab Emirates, Philippines ...)

const apiURL = 'https://coronavirus-tracker-api.herokuapp.com/all';
const https = require('https');
https.get(apiURL, res => {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end", () => {
      let apiData = JSON.parse(data);
      let icon = 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAAEhyb7BAAAAAXNSR0IArs4c6QAAAdlJREFUOBGFkzFLHFEQgFeFeBowalAJnB4kIFpIuN+QcEmRziJ10mhpGkGwtEkgfQqv8RdYCkqKgHiNZcQmVa46MCoREaIx3/d8b9nDjQ58O/PmzZudfTObZTfySNUDGp+gAkE2kqFu9PG4ho6xz+BcI4k7U/BARwOq8BnceAJdUiuullkYlY1E4yw59P6G1xCOPMZoQak8xGuKv+DJTfBAEDeVY3BzAUx9CXlGT1qNm6kI3+2BIBZhWh1/otbW/x5KZRhvs3QnOivoCzCTJQTpTUbUH9D9MAhfIQ/EzpZgDn7ARzCT3VGHVy9i7EWHzqfRfht1HZ2NxsU4ej3a81G/QwdZ4WmGL3AAY3AEv2AWgpzyNKhIm/XLsFt4GGjG57AKtwLw3Sl+2DZY+y6YzOE0cd587P+KV/cTirdzxbpYui03YQ1KZQiv978GHvwG3uIheFGTkBJaoT9ILrbfCtwwgU1MwQamVnzHnijseWdBHDDvIM1QqsBJMIHN3gf9HbBlW3HdQnvxbyCMipdooHcwAH5CqiYlcCimwb7ra8MJvIBc7IJDasAOVMGZ9BMcu1SB+w6Pf2ZXAtZBUhvtQkrooYSf4HhawQzcK7UY8QrdjHYdHe4grkvVP0xXjBIOIZS9AAAAAElFTkSuQmCC';

      // Preview in Menu Bar: Icon + Confirmed Cases
      for (i = 0; i < apiData.confirmed.locations.length; i++) {
        if(apiData.confirmed.locations[i].country === country) {
          console.log(`${apiData.confirmed.locations[i].latest} | templateImage=${icon}`);
        }
      }

      console.log('---')

      console.log(`${country + ":"} | color=white`);

      // Confirmed Cases
      for (i = 0; i < apiData.confirmed.locations.length; i++) {
        if(apiData.confirmed.locations[i].country === country) {
          console.log("Confirmed:", apiData.confirmed.locations[i].latest);
        }
      }

      // Recovered Cases
      for (i = 0; i < apiData.recovered.locations.length; i++) {
        if(apiData.recovered.locations[i].country === country) {
          console.log("Recovered:", apiData.recovered.locations[i].latest);
        }
      }

      // Deaths
      for (i = 0; i < apiData.deaths.locations.length; i++) {
        if(apiData.deaths.locations[i].country === country) {
          console.log("Deaths:", apiData.deaths.locations[i].latest);
        }
      }

      console.log("---");

      console.log(`${"Worldwide:"} | color=white`);

      // Confirmed Cases
      for (i = 0; i < apiData.confirmed.locations.length; i++) {
        if(apiData.confirmed.locations[i].country === country) {
          console.log("Confirmed:", apiData.confirmed.latest);
        }
      }

      // Recovered Cases
      for (i = 0; i < apiData.recovered.locations.length; i++) {
        if(apiData.recovered.locations[i].country === country) {
          console.log("Recovered:", apiData.recovered.latest);
        }
      }

      // Deaths
      for (i = 0; i < apiData.deaths.locations.length; i++) {
        if(apiData.deaths.locations[i].country === country) {
          console.log("Deaths:", apiData.deaths.latest);
        }
      }

      console.log("---");

      // Official Helpline
      console.log("Covid-19 FAQ (Federal Ministry of Health) | href=https://www.bundesgesundheitsministerium.de/en/press/2020/coronavirus.html");

      console.log("---");

      // Data Last Update
      var lastUpdate = apiData.confirmed.last_updated
      var timestamp = lastUpdate.split(/[\T,.]+/);
      var day = timestamp[0];
      var time = timestamp[1];
      console.log("Timestamp:", day + ", " + time);

      // Data Source
      console.log("Data Source | href=https://github.com/ExpDev07/coronavirus-tracker-api")
    });
  })
  .on("error", err => {
    reject("Error: " + err.message);
  });
