import * as React from 'react'

// Create context

const GroupContext = React.createContext()

// REDUCER

function groupReducer(state, action) {
  switch (action.type) {
    case 'GOT_PICKS': {
      const groupsCopy = [...state.groups]
      groupsCopy[action.index].collection = action.pics;
      let hero = groupsCopy[action.index].pic
      if(!hero){
        groupsCopy[action.index].pic = action.pics[0]
      }
      return {...state, groups:groupsCopy}
    }
    case 'GOT_USERS':{
      const newGroups = state.groups.map(group => {
        group.members = action.payload
        return group;
      })
      const newCurrentUser = action.payload[1]
      return {...state, groups:newGroups, currentUser:newCurrentUser}
    }
    case 'TOGGLE_MEMBERS':{
      const memberGroup = state.groups.filter(group => group.name === action.payload)[0]
      memberGroup.members = memberGroup.members.filter(member => {
        return member.firstname !== state.currentUser.firstname
      })
      return state
    }
    case 'ADD_MEMBER': {
      const memberGroup = state.groups.filter(group => group.name === action.payload)[0]
      memberGroup.members.push(state.currentUser)
      return state
    }
    case 'NEW_GROUP': {
      const groupsCopy = [...state.groups]
      groupsCopy.push(action.payload)
      return {...state, groups:groupsCopy}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initialState = () => {
  return {
    currentUser:{},
    groups: [
      {
        collection:[],
        name: "Cattle Ranchers",
        about: "Ranching is the practice of raising herds of animals on large tracts of land. Ranchers commonly raise grazing animals such as cattle and sheep. ... Cowboys are responsible for herding and maintaining the health of animals across these vast ranches. Cowboys often work with horses to herd cattle and sheep.",
        members:[],
        query: "cows",
        bla: "35 mins ago",
        pic: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc0NDB8MHwxfHNlYXJjaHwxfHxjb3dzfGVufDB8fHx8MTY0MjU0MTE3Nw&ixlib=rb-1.2.1&q=80&w=1080"
      },
      {
        collection:[],
        name: "Wild Horses",
        about: "Today, 86,000 free-roaming horses live on nearly 28 million acres of public lands across 10 western U.S. states, and 55,000 taken off the land now live in government-run quarters. With no natural predators, their numbers are growing by 15 to 20 percent each year, according to the bureau.",
        members:[],
        query: "horses",
        bla: "2 hours ago",
        pic: "https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc0NDB8MHwxfHNlYXJjaHwxfHxob3JzZXN8ZW58MHx8fHwxNjQyNTU3NzA0&ixlib=rb-1.2.1&q=80&w=1080"
      },
      {
        collection:[],
        name: "Cat Lovers",
        about: "Today, 86,000 free-roaming horses live on nearly 28 million acres of public lands across 10 western U.S. states, and 55,000 taken off the land now live in government-run quarters. With no natural predators, their numbers are growing by 15 to 20 percent each year, according to the bureau.",
        members:[],
        query: "cats",
        bla: "4 days ago",
        pic: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      }
    ]
  }
}

function GroupProvider({children}) {
  const [state, dispatch] = React.useReducer(groupReducer, initialState())
  const value = {state, dispatch}
  return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
}

function useGroupContext() {
  const context = React.useContext(GroupContext)
  if (context === undefined) {
    throw new Error('useGroupContext must be used within a GroupProvider')
  }
  return context
}

export {GroupProvider, useGroupContext}