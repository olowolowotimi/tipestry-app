import { HANDLE_CARD_CHANGE } from '../types';

export const setCardLevel = (payload) => ({
    type: HANDLE_CARD_CHANGE,
    payload,
})


export default {
    setCardLevel,
}
