/**
 * Deezer API
 * Deezer API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: bishoymelekwadie@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/// <reference path="../../src/custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface Credentials
 */
export interface Credentials {
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    login?: string;
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    password?: string;
}
/**
 * GenreApi - fetch parameter creator
 * @export
 */
export declare const GenreApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGenresList(options?: any): FetchArgs;
};
/**
 * GenreApi - functional programming interface
 * @export
 */
export declare const GenreApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGenresList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * GenreApi - factory interface
 * @export
 */
export declare const GenreApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGenresList(options?: any): Promise<Response>;
};
/**
 * GenreApi - object-oriented interface
 * @export
 * @class GenreApi
 * @extends {BaseAPI}
 */
export declare class GenreApi extends BaseAPI {
    /**
     *
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenreApi
     */
    getGenresList(options?: any): Promise<Response>;
}
/**
 * UserApi - fetch parameter creator
 * @export
 */
export declare const UserApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Logs user into the system
     * @param {Credentials} credentials The user name for login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginUser(credentials: Credentials, options?: any): FetchArgs;
};
/**
 * UserApi - functional programming interface
 * @export
 */
export declare const UserApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Logs user into the system
     * @param {Credentials} credentials The user name for login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginUser(credentials: Credentials, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * UserApi - factory interface
 * @export
 */
export declare const UserApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Logs user into the system
     * @param {Credentials} credentials The user name for login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginUser(credentials: Credentials, options?: any): Promise<Response>;
};
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export declare class UserApi extends BaseAPI {
    /**
     *
     * @summary Logs user into the system
     * @param {Credentials} credentials The user name for login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    loginUser(credentials: Credentials, options?: any): Promise<Response>;
}
