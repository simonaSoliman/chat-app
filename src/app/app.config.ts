import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

    private config: Object = null;
    private env: Object = null;

    constructor(private http: Http) {

    }

    /**
     * Use to get the data found in the second file (config file)
     */
    public getConfig(key: any) {

        return this.config[key];
        // return "http://41.39.42.158/Augmania_BackEnd";
    }

    /**
     * Use to get the data found in the first file (env file)
     */

    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        return new Promise((resolve, reject) => {

            let request: any = null;

            request = this.http.get('assets/development.json');
            if (request) {
                request
                    .map(res => res.json())
                    .catch((error: any) => {
                        console.log(error);
                        console.error('Error reading development configuration file');
                        resolve(error);
                        return Observable.throw(error.json().error || 'Server error');
                    })
                    .subscribe((responseData) => {
                        this.config = responseData;
                        resolve(true);
                    });
            } else {
                console.error('Env config file "env.json" is not valid');
                resolve(true);
            }
        });
    }
}