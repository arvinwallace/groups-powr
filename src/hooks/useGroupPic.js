import React, { useEffect } from 'react';

const GETTHINGS = "eOVbpynjP8jGQ8OgMX2R4u_jjHXdqTpwgDplqmC4S7Q";
const count = 10;


export function useGroupPic(state,dispatch){
  useEffect(() => {
    // state.groups.forEach(async(group,index) => {
    //   const apiUrl = `https://api.unsplash.com/search/photos?client_id=${GETTHINGS}&count=${count}&page=1&query=${group.query}`
    //   try {
    //     let photosArray = [];
    //     const response = await fetch(apiUrl);
    //     photosArray = await response.json();
    //     const groupPic = photosArray.results[0].urls.regular
    //     if(!group.pic){
    //       dispatch({
    //         type: "newPic",
    //         pic:groupPic,
    //         index
    //       })
    //     }
    //   } catch (error) {
    //     console.log('Unsplash ERROR', error)
    //   }
    // })
  },[])
}