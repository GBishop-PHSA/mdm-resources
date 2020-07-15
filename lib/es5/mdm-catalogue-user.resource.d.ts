import { MdmResource } from './mdm-resource';
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
export declare class MdmCatalogueUserResource extends MdmResource {
    adminRegister(data: any): any;
    pendingCount(queryStringParams?: any): any;
    pending(queryStringParams?: any): any;
    exists(emailAddress: any, queryStringParams?: any): any;
    reject(catalogueUserId: any, data: any): any;
    approve(catalogueUserId: any, data: any): any;
    adminPasswordReset(catalogueUserId: any, data: any): any;
    search(queryStringParams?: any): any;
    resetPasswordLink(emailAddress: any, queryStringParams?: any): any;
    resetPassword(catalogueUserId: any, data: any): any;
    changePassword(catalogueUserId: any, data: any): any;
    updateUserPreferences(catalogueUserId: any, data: any): any;
    userPreferences(catalogueUserId: any, queryStringParams?: any): any;
    listInUserGroup(userGroupId: any, queryStringParams?: any): any;
    save(data: any): any;
    list(queryStringParams?: any): any;
    remove(catalogueUserId: any, queryStringParams?: any): any;
    update(catalogueUserId: any, data: any): any;
    get(catalogueUserId: any, queryStringParams?: any): any;
    listInContainerUserGroup(containerDomainType: any, containerId: any, userGroupId: any, queryStringParams?: any): any;
}
