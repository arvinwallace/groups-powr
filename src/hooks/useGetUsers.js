import React,{useEffect} from 'react';

const GETTHINGS = "eOVbpynjP8jGQ8OgMX2R4u_jjHXdqTpwgDplqmC4S7Q";
const count = 15;
const apiUrl = `https://api.unsplash.com/search/photos?client_id=${GETTHINGS}&count=${count}&page=1&query=headshot`

export function useGetUsers(state,dispatch){
  useEffect(async () => {
    try {
      const results = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
      const users = await results.json()
      const response = await fetch(apiUrl);
      const photosArray = await response.json();
      
      // ditch the single static pic from faker and
      // replace with a nice random headshot from unsplash
      
      const normalizedUsers = users.data.map((user,i) => {
        user.image = photosArray.results[i].urls.regular
        return user;
      })
        dispatch({
          type: 'GOT_USERS',
          payload: normalizedUsers
        })
      } catch (error) {
        console.log('Unsplash ERROR', error)
      }

  },[state.groups.length])
}