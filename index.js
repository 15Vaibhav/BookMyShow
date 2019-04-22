const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Builder} = require('selenium-webdriver');
var CronJob = require('cron').CronJob;
let o = new chrome.Options();
o.addArguments('--no-sandbox');
// o.addArguments('--headless')
// o.addArguments("--headless")
o.addArguments("--start-maximized");
const accountSid = 'put id';
const authToken = 'put token';
const client = require('twilio')(accountSid, authToken);


   function call (){
    client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: 'no',
         from: 'no'
       })
      .then(call => console.log(call.sid));

      }




  
 
  

new CronJob("0 */1 * * * *",async function() {

    console.log("job running every minute")
    await searchText()
  }, null, true, 'America/Los_Angeles');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function searchText() {

    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();
        // https://in.bookmyshow.com/bengaluru/movies/kalank/ET00074273
        //https://in.bookmyshow.com/movies/avengers-endgame/ET00090482
   var x = driver.get('https://in.bookmyshow.com/movies/avengers-endgame/ET00090482').then(async function () {
        await sleep(1000)
        console.log("after 1 sec")
        var textPromise = driver.findElement(webdriver.By.css(".showtimes.btn._cuatro")).getText();

       await textPromise.then(async (text) => {
            console.log(text)
            if (text === 'BOOK TICKETS') {
                console.log('yuppppppp')
                 await call ()

            }
            else {
                console.log('shit....')
            }
        })
        .catch(err => console.error('not avail yet '))
        .finally(function(){
           driver.quit()
        })
    })
       
}

