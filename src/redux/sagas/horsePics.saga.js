import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHorsePics() {
    // get the horse pics from the DB
    try {
        const horsePics = yield axios.get('/api/horsePics');
        yield put({ type: 'SET_HORSE_PICS', payload: horsePics.data });
    } catch {
        console.log('get all error');
    }     
}

function* horsePicsSaga() {
    yield takeLatest('FETCH_HORSE_PICS', fetchHorsePics);
}

export default horsePicsSaga;