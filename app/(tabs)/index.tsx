import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropsDinamis from './propdinamis';
import StateDinamis from './statedinamis';
import Communication from './comunication';

const Story = props => {
  return (
    <View>
      <ScrollView>
        {/* <PropsDinamis/>  */}
        {/* <StateDinamis/> */}
        <Communication/>
      </ScrollView>
    </View>
  );
};

export default Story;
