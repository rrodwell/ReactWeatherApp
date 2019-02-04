import OAuth from 'oauth';
import yahoo from '../config/yahoo_weather_creds';

export const getWeatherFromYahoo = (location) =>{
    return new Promise((resolve, reject)=>{
        let header = {"Yahoo-App-Id": yahoo.app_id};

        let request = new OAuth.OAuth(null,null,yahoo.client_id,yahoo.client_secret,'1.0',null,'HMAC-SHA1',null,header);

        request.get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json`,null,null, (err, data, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            }
        );
    });
}
