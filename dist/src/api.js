"use strict";
/// <reference path="./custom.d.ts" />
// tslint:disable
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var url = require("url");
var portableFetch = require("portable-fetch");
var BASE_PATH = "http://api.deezer.com".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(configuration, basePath, fetch) {
        if (basePath === void 0) { basePath = BASE_PATH; }
        if (fetch === void 0) { fetch = portableFetch; }
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
/**
 * GenreApi - fetch parameter creator
 * @export
 */
exports.GenreApiFetchParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenresList: function (options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/genre/";
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * GenreApi - functional programming interface
 * @export
 */
exports.GenreApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenresList: function (options) {
            var localVarFetchArgs = exports.GenreApiFetchParamCreator(configuration).getGenresList(options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * GenreApi - factory interface
 * @export
 */
exports.GenreApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         *
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenresList: function (options) {
            return exports.GenreApiFp(configuration).getGenresList(options)(fetch, basePath);
        },
    };
};
/**
 * GenreApi - object-oriented interface
 * @export
 * @class GenreApi
 * @extends {BaseAPI}
 */
var GenreApi = /** @class */ (function (_super) {
    __extends(GenreApi, _super);
    function GenreApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenreApi
     */
    GenreApi.prototype.getGenresList = function (options) {
        return exports.GenreApiFp(this.configuration).getGenresList(options)(this.fetch, this.basePath);
    };
    return GenreApi;
}(BaseAPI));
exports.GenreApi = GenreApi;
/**
 * UserApi - fetch parameter creator
 * @export
 */
exports.UserApiFetchParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Logs user into the system
         * @param {Credentials} credentials The user name for login
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: function (credentials, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'credentials' is not null or undefined
            if (credentials === null || credentials === undefined) {
                throw new RequiredError('credentials', 'Required parameter credentials was null or undefined when calling loginUser.');
            }
            var localVarPath = "/user/login";
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Credentials" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(credentials || {}) : (credentials || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UserApi - functional programming interface
 * @export
 */
exports.UserApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Logs user into the system
         * @param {Credentials} credentials The user name for login
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: function (credentials, options) {
            var localVarFetchArgs = exports.UserApiFetchParamCreator(configuration).loginUser(credentials, options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * UserApi - factory interface
 * @export
 */
exports.UserApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         *
         * @summary Logs user into the system
         * @param {Credentials} credentials The user name for login
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: function (credentials, options) {
            return exports.UserApiFp(configuration).loginUser(credentials, options)(fetch, basePath);
        },
    };
};
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Logs user into the system
     * @param {Credentials} credentials The user name for login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    UserApi.prototype.loginUser = function (credentials, options) {
        return exports.UserApiFp(this.configuration).loginUser(credentials, options)(this.fetch, this.basePath);
    };
    return UserApi;
}(BaseAPI));
exports.UserApi = UserApi;
