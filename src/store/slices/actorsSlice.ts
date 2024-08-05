import { createSlice } from '@reduxjs/toolkit';
import { IActor } from '@/types/actor';

const initialState: IActor[] = [
  {
    id: 1,
    heroName: 'Геральт',
    fullName: 'Генри Кавилл',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-1.jpg',
  },
  {
    id: 2,
    heroName: 'Лютик',
    fullName: 'Джои Бэти',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-2.jpg',
  },
  {
    id: 3,
    heroName: 'Йеннифэр',
    fullName: 'Аня Чалотра',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-3.jpg',
  },
  {
    id: 4,
    heroName: 'Цири',
    fullName: 'Фрейя Аллан',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-4.jpg',
  },
  {
    id: 5,
    heroName: 'Эмгыр вар Эмрейс',
    fullName: 'Барт Эдвардс',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-5.jpg',
  },
  {
    id: 6,
    heroName: 'Цири',
    fullName: 'Фрейя Аллан',
    description:
      'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
    picture: './images/actors/actor-4.jpg',
  },
];

export const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default actorsSlice.reducer;
