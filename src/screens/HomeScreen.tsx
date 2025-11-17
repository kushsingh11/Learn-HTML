import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Lesson } from '../types';
import { htmlLessons } from '../data/lessons';
import { isLessonCompleted, getCompletedCount } from '../utils/storage';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    loadProgress();
    const unsubscribe = navigation.addListener('focus', () => {
      loadProgress();
    });
    return unsubscribe;
  }, [navigation]);

  const loadProgress = async () => {
    const completed = new Set<number>();
    for (const lesson of htmlLessons) {
      const isCompleted = await isLessonCompleted(lesson.id);
      if (isCompleted) {
        completed.add(lesson.id);
      }
    }
    setCompletedLessons(completed);
    const count = await getCompletedCount();
    setTotalCompleted(count);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '#4CAF50';
      case 'intermediate':
        return '#FF9800';
      case 'advanced':
        return '#F44336';
      default:
        return '#999';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      basics: '📘',
      text: '📝',
      lists: '📋',
      links: '🔗',
      images: '🖼️',
      tables: '📊',
      forms: '📋',
      advanced: '🚀',
    };
    return icons[category] || '📄';
  };

  const renderLesson = ({ item }: { item: Lesson }) => {
    const isCompleted = completedLessons.has(item.id);

    return (
      <TouchableOpacity
        style={[styles.lessonCard, isCompleted && styles.completedCard]}
        onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
      >
        <View style={styles.lessonHeader}>
          <Text style={styles.categoryIcon}>{getCategoryIcon(item.category)}</Text>
          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.lessonDescription}>{item.description}</Text>
          </View>
          {isCompleted && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <View style={styles.lessonFooter}>
          <View
            style={[
              styles.difficultyBadge,
              { backgroundColor: getDifficultyColor(item.difficulty) },
            ]}
          >
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn HTML</Text>
        <Text style={styles.progressText}>
          {totalCompleted} / {htmlLessons.length} Completed
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(totalCompleted / htmlLessons.length) * 100}%` },
            ]}
          />
        </View>
      </View>
      <FlatList
        data={htmlLessons}
        renderItem={renderLesson}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
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
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  listContent: {
    padding: 16,
  },
  lessonCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666',
  },
  checkmark: {
    fontSize: 24,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  categoryText: {
    fontSize: 12,
    color: '#999',
    textTransform: 'capitalize',
  },
});

export default HomeScreen;
