/* tslint:disable */
/* eslint-disable */
/**
 * Albums API
 * This service provides API to manage albums.
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Album,
  RestErrResponse,
} from '../models';
import {
    AlbumFromJSON,
    AlbumToJSON,
    RestErrResponseFromJSON,
    RestErrResponseToJSON,
} from '../models';

export interface GetAlbumByIDRequest {
    id: string;
}

export interface PostAlbumsRequest {
    album?: Album;
}

/**
 * 
 */
export class AlbumApi extends runtime.BaseAPI {

    /**
     * Get Album By ID
     */
    async getAlbumByIDRaw(requestParameters: GetAlbumByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Album>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAlbumByID.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/albums/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlbumFromJSON(jsonValue));
    }

    /**
     * Get Album By ID
     */
    async getAlbumByID(requestParameters: GetAlbumByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Album> {
        const response = await this.getAlbumByIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Albums
     */
    async getAlbumsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Album>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/albums`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumFromJSON));
    }

    /**
     * Get Albums
     */
    async getAlbums(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Album>> {
        const response = await this.getAlbumsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Post Albums
     */
    async postAlbumsRaw(requestParameters: PostAlbumsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Album>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/albums`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AlbumToJSON(requestParameters.album),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlbumFromJSON(jsonValue));
    }

    /**
     * Post Albums
     */
    async postAlbums(requestParameters: PostAlbumsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Album> {
        const response = await this.postAlbumsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
