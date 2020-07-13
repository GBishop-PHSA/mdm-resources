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
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';

export class MdmTerminologyResource extends MdmResource {
  private catalogueItem: MdmCatalogueItemResource;

  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    super(resourcesConfig, restHandler);
    this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
  }

  get(id, action, options: any = {}) {
    if (!options) {
      options = {};
    }
    // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //   return this.catalogueItem.get(id, action, options.contentType);
    // }

    switch(action) {
        case 'metadata': return this.catalogueItem.listMetadata('terminologies', id, options);
        case 'annotations': return this.catalogueItem.listAnnotations('terminologies', id, options);
        case 'classifiers': return this.catalogueItem.listClassifiers('terminologies', id, options);
        case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terminologies', id, options);
    }

    return this.getResource('terminologies', id, action, options);
  }

  post(id, action, options) {
    return this.postResource('terminologies', id, action, options);
  }

  put(id, action, options) {
    return this.putResource('terminologies', id, action, options);
  }

  delete(id, action, queryString) {
    return this.deleteResource('terminologies', id, action, queryString);
  }

  folder(id, options = {}) {
      return this.simpleGet(`${this.apiEndpoint}/terminologies/${id}/terms`, options);
  }
}
