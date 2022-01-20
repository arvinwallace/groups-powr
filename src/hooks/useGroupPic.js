import React, { useEffect } from 'react';

const GETTHINGS = "eOVbpynjP8jGQ8OgMX2R4u_jjHXdqTpwgDplqmC4S7Q";
const count = 10;


export function useGroupPic(state,dispatch){
  useEffect(() => {
    state.groups.forEach(async(group,index) => {
      const apiUrl = `https://api.unsplash.com/search/photos?client_id=${GETTHINGS}&count=${count}&page=2&query=${group.query}`
      try {
        const response = await fetch(apiUrl);
        let photosArray = await response.json();
        let normalizedPhotos = photosArray.results.map(res => res.urls.small)
          dispatch({
            type: "GOT_PICKS",
            pics: normalizedPhotos,
            index: index
          })
      } catch (error) {
        console.log('Unsplash ERROR', error)
      }
    })
  },[])
}