import fetch from 'node-fetch';
import { Method, Methods } from './types';
import { Url } from './url';

interface HttpOptions {

}

interface FetchOptions {

}

export class Http {

    private _options: HttpOptions;
    private _url: Url;

    constructor(options: HttpOptions) {
        this._options = options;
        this._url = new Url({

        });
    }

    get<T>(options: FetchOptions) {
        return this._buildMethod(Methods.GET, options);
    }

    post<T>(options: FetchOptions) {
        return this._buildMethod(Methods.POST, options);
    }

    patch<T>(options: FetchOptions) {
        return this._buildMethod(Methods.PATCH, options);
    }

    put<T>(options: FetchOptions) {
        return this._buildMethod(Methods.PUT, options);
    }

    delete<T>(options: FetchOptions) {
        return this._buildMethod(Methods.DELETE, options);
    }

    private _buildMethod(method: Method, options: FetchOptions) {
        return null;
    }
}
