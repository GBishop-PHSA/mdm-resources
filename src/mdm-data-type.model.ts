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

import { ItemDomainType, MdmIndexResponse, MdmResponse, Uuid } from "mdm-common.model";

export interface Breadcrumb {
  id: Uuid;
  label: string;
  domainType: ItemDomainType;
  finalised?: boolean;
}

export interface EnumerationValue {
  index: number;
  id: Uuid;
  key: string;
  value: string;
  category?: any;
}

export interface ReferenceClass {
  id: Uuid;
  domainType: ItemDomainType;
  label: string;
  model?: Uuid;
  breadcrumbs?: Breadcrumb[];
  parentDataClass?: Uuid;
}

export interface DataType {
  id: Uuid;
  domainType: ItemDomainType;
  label: string;
  model?: Uuid;
  breadcrumbs?: Breadcrumb[];
  enumerationValues?: EnumerationValue[];  
  referenceClass?: ReferenceClass;
  [key: string]: any;
}

export type DataTypeIndexResponse = MdmIndexResponse<DataType>;