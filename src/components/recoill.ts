import { atom } from 'recoil';

export const favoriteRocketIdsState = atom({
    key: 'favoriteRocketIdsState',
    default: [] as number[],
});
