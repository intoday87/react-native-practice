import axios from 'axios'
import React, {FC, useRef} from 'react'
import {Animated, Text, Image, StyleSheet} from 'react-native'
import {useQuery} from 'react-query'

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
  },
})

const Animation: FC = () => {
  const rAni = useRef<Animated.Value>(new Animated.Value(0))
  const gAni = useRef<Animated.Value>(new Animated.Value(0))
  const bAni = useRef<Animated.Value>(new Animated.Value(0))

  useQuery(['repoData'], () =>
    axios
      .get('https://api.github.com/repos/tannerlinsley/react-query')
      .then(res => res.data),
  )

  return (
    <Animated.View style={{backgroundColor: 'rgb(0,0,0)'}}>
      <Image
        source={require('@src/static/radar-illustration.png')}
        style={style.image}
      />
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          margin: '10% 10%',
          color: 'white',
        }}>
        animation
      </Text>
    </Animated.View>
  )
}

export default Animation
