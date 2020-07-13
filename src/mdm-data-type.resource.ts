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

export class MdmDataTypeResource extends MdmResource {
  private catalogueItem: MdmCatalogueItemResource;

  constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    super(resourcesConfig, restHandler);
    this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
  }

  get(dataModelId, id, action, options) {
    if (!options) {
      options = {};
    }
    // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].includes(action)) {
    //   return this.catalogueItem.get(id, action, options.contentType);
    // }

    switch(action) {
        case 'metadata': return this.catalogueItem.listMetadata('dataTypes', id, options);
        case 'annotations': return this.catalogueItem.listAnnotations('dataTypes', id, options);
        case 'classifiers': return this.catalogueItem.listClassifiers('dataTypes', id, options);
        case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataTypes', id, options);
    }

    return this.getResource(this.makeUrl(dataModelId), id, action, options);
  }

  post(dataModelId, id, action, options) {
    return this.postResource(this.makeUrl(dataModelId), id, action, options);
  }

  put(dataModelId, id, action, options) {
    return this.putResource(this.makeUrl(dataModelId), id, action, options);
  }

  delete(dataModelId, id) {
    return this.deleteResource(this.makeUrl(dataModelId), id);
  }

  makeUrl(dataModelId) {
    return `dataModels/${dataModelId}/dataTypes/`;
  }
}
