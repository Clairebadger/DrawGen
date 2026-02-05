import { formationDetails } from '../constants/FormCategories';

type FormDetails = {
    num_flyers: number[];
    levels: string[];
};

export const getDetailsFromOrgDiscipline = (discipline: string, organization: string): FormDetails => {
    const org = discipline === "Formation (FS)" ? organization : "N/A";
    const details = formationDetails.find((formationInfo) => {
        return formationInfo.organization === org && formationInfo.formation_type === discipline;
    });
    if (details === undefined) {
        return {
            num_flyers: [],
            levels: []
        };
    } else {
        return {
            num_flyers: details.num_flyers,
            levels: details.levels
        };
    }
};

export const checkALlValuesEntered = (formationType: string, organization: string, num_flyers: string, level: string): boolean => {
    return !(formationType === '' || num_flyers === '' || level === '');
};
