import * as React from 'react';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';

import { Platform, StyleSheet, View } from 'react-native';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';

global.__reanimatedWorkletInit = () => {};

export default function Timer() {
  const stopwatchRef = React.useRef(null);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StopwatchTimer
        
          ref={stopwatchRef}
          containerStyle={styles.stopWatchContainer}
          digitStyle={Platform.select({
            ios: {
              width: 32,
            },
            android: undefined,
          })}
          separatorStyle={Platform.select({
            ios: {
              width: 14,
            },
            android: undefined,
            
          })}
          textCharStyle={styles.stopWatchChar}
          trailingZeros={0}
        />
        <View style={styles.buttonsContainer}>
          <IconButton
            iconColor={"#AB8476"}
            backgroundColor={"white"}
            icon="play"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.play()}
          />
          <IconButton
            iconColor={"#AB8476"}
            backgroundColor={"white"}
            icon="pause"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.pause()}
          />
          <IconButton
            iconColor={"#AB8476"}
            backgroundColor={"white"}
            icon="refresh"
            mode="contained"
            size={32}
            onPress={() => stopwatchRef.current?.reset()}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopWatchContainer: {
    marginVertical: 20,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderRadius: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
    paddingTop: 0,
  },
  stopWatchChar: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#AB8476',
  },
});
