/**
 * Lists
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';

export class PublicNumAssociationsFilter {
    'coalescingRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'associationTypeId': number;
    'associationCategory': string;
    'filterType': PublicNumAssociationsFilterFilterTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicFormSubmissionFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "associationTypeId",
            "baseName": "associationTypeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "associationCategory",
            "baseName": "associationCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicNumAssociationsFilterFilterTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicNumAssociationsFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicNumAssociationsFilterFilterTypeEnum {
    NumAssociations = 'NUM_ASSOCIATIONS'
}

