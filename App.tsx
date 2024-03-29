import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'

import {Colors, Header} from 'react-native/Libraries/NewAppScreen'
import Animation from './src/animation'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    console.log('[trace] react-query-native-devtools')
    addPlugin({queryClient})
  })
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Animation />
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default App
