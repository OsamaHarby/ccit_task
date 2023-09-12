import axios from 'axios';
import { BASE_URL } from './urls';
import { showError } from '../helpers/SnackbarNotifications';
import moment from 'moment';

const getRepositories = async ({ per_page, language, date ,page}) => {
    let languageFilter = ''
    let dateFilter = ''
    let lowerCaseLanguage = ''
    let dateFormated = ''
    if (date) {
        dateFormated = moment(date).format("YYYY-MM-DD")
        dateFilter = `q=created:>${dateFormated}`
    } else {
        dateFilter = 'q=null'
    }
    if (language) {
        lowerCaseLanguage = language.toLowerCase()
        languageFilter = `&q=language:${lowerCaseLanguage}`
    }
    try {
        const res = await axios.get(`${BASE_URL}search/repositories?${dateFilter}${languageFilter}&sort=stars&order=desc&per_page=${per_page}&page=${page}`,{
            headers:{
                Authorization:"Bearer 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"
            }
        });
        // console.log("response", res);

        if (res?.status === 200) {
            return res.data;
        }

    } catch (error) {
        // console.log('getRepositories error', error);
        showError(error)
    }
};
export default getRepositories
