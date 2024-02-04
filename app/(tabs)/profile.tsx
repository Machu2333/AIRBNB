import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <TouchableOpacity onPress={() => signOut()}>
        {
          !isSignedIn && (
            <Link href={"/(modals)/login"}>
              <Text>login</Text>

            </Link>
          )
        }
      </TouchableOpacity>
    </View>
  )
}

export default Page