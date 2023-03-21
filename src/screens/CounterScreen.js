import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  //state === {counter: number}
  //action === {type: 'counter_decrease' || 'counter_increase', payload: 1 || -1}
  const { counter } = state;
  const { type, payload } = action;

  switch (type) {
    case 'counter_increase':
      return { ...state, counter: counter + payload };
    case 'counter_decrease':
      return { ...state, counter: counter - payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'counter_increase', payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({
            type: 'counter_decrease',
            payload: COUNTER_INCREMENT,
          });
        }}
      />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
