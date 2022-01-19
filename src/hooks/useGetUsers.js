import React,{useEffect} from 'react';

export function useGetUsers(dispatch){
  useEffect(async () => {
    const results = await fetch('https://fakerapi.it/api/v1/persons?_quantity=15')
    const users = await results.json()
      console.log("Do we have the thing?", users.data)
  },[])
}