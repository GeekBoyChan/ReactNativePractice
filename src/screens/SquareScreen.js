import React, { useReducer } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  //state ==== {red: number, green: number, blue: number}
  //action === {type: 'change_red' || 'change_green' || 'change_blue, payload: 10 || -10}
  const { red, green, blue } = state;
  const { type, payload } = action;

  switch (type) {
    case 'change_red':
      return red + payload > 250 || red + payload < 0
        ? state
        : { ...state, red: red + payload };
    case 'change_green':
      return green + payload > 250 || green + payload < 0
        ? state
        : { ...state, green: green + payload };
    case 'change_blue':
      return blue + payload > 250 || blue + payload < 0
        ? state
        : { ...state, blue: blue + payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square Screen Test</Text>
      <ColorCounter
        color='red'
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='green'
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='blue'
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
