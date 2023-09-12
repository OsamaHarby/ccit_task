import axios from 'axios';
import { BASE_URL } from './urls';
import Snackbar from 'react-native-snackbar';
import Colors from '../constants/Colors';
import { showError } from '../helpers/SnackbarNotifications';
import moment from 'moment';

const getRepositories = async ({ per_page, language, date }) => {

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
        const res = await axios.get(`${BASE_URL}search/repositories?${dateFilter}${languageFilter}&sort=stars&order=desc&per_page=${per_page || 30}`);
        console.log("response", res);

        if (res?.status === 200) {
            return res.data;
        }

    } catch (error) {
        console.log('getRepositories error', error);
        showError(error)
    }
};
export default getRepositories
