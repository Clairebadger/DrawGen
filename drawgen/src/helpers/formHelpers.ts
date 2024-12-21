import {formationDetails} from '../constants/FormCategories';
export const getDetailsFromOrgDiscipline = (discipline: string, organization: string) => {
    const details = formationDetails.find((formationInfo) => {
        return formationInfo.organization === organization && formationInfo.formation_type === discipline;
    })
    if (details === undefined) {
        return {
            num_flyers: [],
            levels: []
        }
    }
    else {
        return {
            num_flyers: details.num_flyers,
            levels: details.levels
        }
    }
}

export const checkALlValuesEntered = (formationType: string, organization: string, num_flyers: string, level: string) => {
    return !(formationType === '' || organization === '' || num_flyers === '' || level === '');
}
