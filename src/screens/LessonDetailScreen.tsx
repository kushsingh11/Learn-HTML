import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { saveProgress } from '../utils/storage';

type LessonDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LessonDetail'
>;
type LessonDetailRouteProp = RouteProp<RootStackParamList, 'LessonDetail'>;

interface Props {
  navigation: LessonDetailNavigationProp;
  route: LessonDetailRouteProp;
}

const LessonDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { lesson } = route.params;

  const handleTryCode = () => {
    navigation.navigate('CodeEditor', { lesson });
  };

  const handleMarkComplete = async () => {
    await saveProgress(lesson.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{lesson.title}</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📖 Lesson Content</Text>
          <Text style={styles.contentText}>{lesson.content}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Example</Text>
          <View style={styles.codeBlock}>
            <ScrollView horizontal>
              <Text style={styles.codeText}>{lesson.example}</Text>
            </ScrollView>
          </View>
        </View>

        {lesson.exercise && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✏️ Exercise</Text>
            <Text style={styles.exerciseText}>{lesson.exercise}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.tryButton} onPress={handleTryCode}>
          <Text style={styles.tryButtonText}>🚀 Try It Yourself</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleMarkComplete}
        >
          <Text style={styles.completeButtonText}>✓ Mark as Complete</Text>
        </TouchableOpacity>

        <View style={styles.spacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 16,
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  codeBlock: {
    backgroundColor: '#263238',
    padding: 16,
    borderRadius: 8,
  },
  codeText: {
    fontFamily: 'monospace',
    color: '#A5D6A7',
    fontSize: 14,
    lineHeight: 20,
  },
  exerciseText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  tryButton: {
    backgroundColor: '#2196F3',
    margin: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  tryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    margin: 16,
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  spacing: {
    height: 20,
  },
});

export default LessonDetailScreen;
