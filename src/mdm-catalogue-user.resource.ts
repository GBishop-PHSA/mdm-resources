/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';

/**
 * Controller: catalogueUser
 |   POST   | /api/admin/catalogueUsers/adminRegister                                                                             | Action: adminRegister
 |   GET    | /api/admin/catalogueUsers/pendingCount                                                                              | Action: pendingCount
 |   GET    | /api/admin/catalogueUsers/pending                                                                                   | Action: pending
 |   GET    | /api/admin/catalogueUsers/userExists/${emailAddress}                                                                | Action: userExists
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/rejectRegistration                                                     | Action: rejectRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/approveRegistration                                                    | Action: approveRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset                                                     | Action: adminPasswordReset
 |   GET    | /api/catalogueUsers/search                                                                                          | Action: search
 |   POST   | /api/catalogueUsers/search                                                                                          | Action: search
 |   GET    | /api/catalogueUsers/resetPasswordLink/${emailAddress}                                                               | Action: sendPasswordResetLink
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/resetPassword                                                                | Action: resetPassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/changePassword                                                               | Action: changePassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: updateUserPreferences
 |   GET    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: userPreferences
 |   GET    | /api/userGroups/${userGroupId}/catalogueUsers                                                                       | Action: index
 |   POST   | /api/catalogueUsers                                                                                                 | Action: save
 |   GET    | /api/catalogueUsers                                                                                                 | Action: index
 |  DELETE  | /api/catalogueUsers/${id}                                                                                           | Action: delete
 |   PUT    | /api/catalogueUsers/${id}                                                                                           | Action: update
 |   GET    | /api/catalogueUsers/${id}                                                                                           | Action: show
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers                                 | Action: index
 */
export class MdmCatalogueUserResource extends MdmResource {

    adminRegister(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/adminRegister`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    pendingCount(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pendingCount`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    pending(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pending`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exists(emailAddress, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/userExists/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    reject(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/rejectRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    approve(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/approveRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    adminPasswordReset(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    search(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    resetPasswordLink(emailAddress, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/resetPasswordLink/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    resetPassword(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/resetPassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    changePassword(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/changePassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    updateUserPreferences(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    
    userPreferences(catalogueUserId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listInUserGroup(userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(catalogueUserId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    update(catalogueUserId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(catalogueUserId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listInContainerUserGroup(containerDomainType, containerId, userGroupId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
