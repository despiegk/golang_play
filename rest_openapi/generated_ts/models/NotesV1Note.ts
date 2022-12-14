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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NotesV1Note
 */
export interface NotesV1Note {
    /**
     * 
     * @type {string}
     * @memberof NotesV1Note
     */
    author?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NotesV1Note
     */
    id?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof NotesV1Note
     */
    _private?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NotesV1Note
     */
    text?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NotesV1Note
     */
    timestamp?: string | null;
}

/**
 * Check if a given object implements the NotesV1Note interface.
 */
export function instanceOfNotesV1Note(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NotesV1NoteFromJSON(json: any): NotesV1Note {
    return NotesV1NoteFromJSONTyped(json, false);
}

export function NotesV1NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotesV1Note {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': !exists(json, 'author') ? undefined : json['author'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        '_private': !exists(json, 'private') ? undefined : json['private'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function NotesV1NoteToJSON(value?: NotesV1Note | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': value.author,
        'id': value.id,
        'private': value._private,
        'text': value.text,
        'timestamp': value.timestamp,
    };
}

