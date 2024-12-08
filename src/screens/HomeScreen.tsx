import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    console.log('Task list updated:', tasks);
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>To-Do List</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Enter a task"
        placeholderTextColor="#666" // Warna placeholder
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={globalStyles.button} onPress={addTask}>
        <Text style={globalStyles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

export default HomeScreen;
