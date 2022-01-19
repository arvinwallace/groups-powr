import * as React from 'react'

const GroupContext = React.createContext()

function groupReducer(state, action) {
  switch (action.type) {
    case 'newPic': {
      const groupsCopy = [...state.groups]
      groupsCopy[action.index].pic = action.pic
      console.log("whass index", action.index)
      return {...state, groups:groupsCopy}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initialState = () => {
  return {
    groups: [
      {
        name: "Cattle Ranchers",
        query: "cows",
        bla: "35 mins ago",
        pic: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc0NDB8MHwxfHNlYXJjaHwxfHxjb3dzfGVufDB8fHx8MTY0MjU0MTE3Nw&ixlib=rb-1.2.1&q=80&w=1080"
      },
      {
        name: "Wild Horses",
        query: "horses",
        bla: "2 hours ago",
        pic: "https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzc0NDB8MHwxfHNlYXJjaHwxfHxob3JzZXN8ZW58MHx8fHwxNjQyNTU3NzA0&ixlib=rb-1.2.1&q=80&w=1080"
      }
    ]
  }
}

function GroupProvider({children}) {
  const [state, dispatch] = React.useReducer(groupReducer, initialState())
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
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