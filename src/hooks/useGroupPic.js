import React, { useState, useEffect } from 'react';

const GETTHINGS = "eOVbpynjP8jGQ8OgMX2R4u_jjHXdqTpwgDplqmC4S7Q";
const count = 10;
export function useGroupPic(query="cows"){
  const apiUrl = `https://api.unsplash.com/search/photos?client_id=${GETTHINGS}&count=${count}&page=1&query=${query}`
  const [pic,setPic] = useState("https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc0NDB8MHwxfHNlYXJjaHwxfHxjb3dzfGVufDB8fHx8MTY0MjU0MTE3Nw&ixlib=rb-1.2.1&q=80&w=1080")
  useEffect(async() => {
    try {
      let photosArray = [];
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      const groupPic = photosArray.results[0].urls.regular
      setPic(groupPic)
    } catch (error) {
      console.log('Unsplash ERROR', error)
    }
  },[])
  return pic
}