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
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from 'mdm-rest-handler';

/**
 * Controller: annotation
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show

 */
export class MdmAnnotationResource extends MdmResource {
    save(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    saveChildren(catalogueItemDomainType, catalogueItemId, annotationId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(catalogueItemDomainType, catalogueItemId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listChildren(catalogueItemDomainType, catalogueItemId, annotationId?, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    get(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
