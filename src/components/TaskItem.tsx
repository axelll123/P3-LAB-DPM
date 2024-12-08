import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TaskItemProps {
  task: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007acc',
  },
  text: {
    fontSize: 16,
    color: '#007acc',
  },
});

export default TaskItem;
