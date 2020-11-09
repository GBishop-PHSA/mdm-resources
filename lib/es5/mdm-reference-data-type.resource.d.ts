import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataTypes                                                                        | Action: index
 |   GET    | /api/referenceData/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: get
 |   POST   | /api/referenceData/${referenceDataModelId}/referenceDataTypes                                                                        | Action: save
 |   PUT    | /api/referenceData/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: update
 |   DELETE | /api/referenceData/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: delete
 */
export declare class MdmReferenceDataTypeResource extends MdmResource {
    list(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    save(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(referenceDataModelId: string, referenceDataTypeId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(referenceDataModelId: string, referenceDataTypeId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
