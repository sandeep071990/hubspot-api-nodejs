/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* A request to change the status of a contact's subscription.
*/
export class PublicUpdateSubscriptionStatusRequest {
    /**
    * Contact's email address.
    */
    'emailAddress': string;
    /**
    * ID of the subscription being updated for the contact.
    */
    'subscriptionId': string;
    /**
    * Legal basis for updating the contact's status (required for GDPR enabled portals).
    */
    'legalBasis'?: PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
    /**
    * A more detailed explanation to go with the legal basis (required for GDPR enabled portals).
    */
    'legalBasisExplanation'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscriptionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalBasis",
            "baseName": "legalBasis",
            "type": "PublicUpdateSubscriptionStatusRequestLegalBasisEnum",
            "format": ""
        },
        {
            "name": "legalBasisExplanation",
            "baseName": "legalBasisExplanation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicUpdateSubscriptionStatusRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "LEGITIMATE_INTEREST_PQL" | "LEGITIMATE_INTEREST_CLIENT" | "PERFORMANCE_OF_CONTRACT" | "CONSENT_WITH_NOTICE" | "NON_GDPR" | "PROCESS_AND_STORE" | "LEGITIMATE_INTEREST_OTHER" ;

