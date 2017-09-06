import { Api, Params, Query } from './types';

interface UrlOptions {

}

export class Url {

    private _options: UrlOptions;

    constructor(options: UrlOptions) {
        this._options = options;
    }

    create(api: Api, params: Params, query: Query) {
        return '';
    }
}
