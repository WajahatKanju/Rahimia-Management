import React from 'react'
import { Text, View, Button } from 'react-native'
import { useAuth } from '../context/AuthContext'


function Dashboard() {

  const {logout} = useAuth();

  return (
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor:'red'}}>
      <Text>This is Dashboard</Text>      
      <Button  title="Logout" onPress={logout} />
    </View>
  )
}

export default Dashboard
