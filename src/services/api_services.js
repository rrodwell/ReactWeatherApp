import OAuth from 'oauth';
import Unsplash,{ toJson } from 'unsplash-js';
import yahoo from '../config/yahoo_weather_creds';
import unsplashKeys from '../config/unsplash_creds';

const unsplash = new Unsplash({
    applicationId: unsplashKeys.applicationId,
    secret: unsplashKeys.secret,
    callbackUrl: unsplashKeys.callbackUrl
});

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

export const getUnsplashImage = (weatherDesc) => {
    return new Promise((resolve,reject) => {
        unsplash.photos.getRandomPhoto({ query:weatherDesc, height:800})
        .then(toJson)
        .then(json => {
            resolve(json)
        }).catch(err => {
            console.error('Unsplash request failed.',err);
            reject(err);
        });
    })
}
