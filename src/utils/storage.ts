import AsyncStorage from '@react-native-async-storage/async-storage';
import { Progress } from '../types';

const PROGRESS_KEY = '@html_learning_progress';

export const saveProgress = async (lessonId: number): Promise<void> => {
  try {
    const existingProgress = await getProgress();
    const lessonProgress: Progress = {
      lessonId,
      completed: true,
      lastAccessed: new Date(),
    };

    const updatedProgress = [
      ...existingProgress.filter(p => p.lessonId !== lessonId),
      lessonProgress
    ];

    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(updatedProgress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getProgress = async (): Promise<Progress[]> => {
  try {
    const progress = await AsyncStorage.getItem(PROGRESS_KEY);
    return progress ? JSON.parse(progress) : [];
  } catch (error) {
    console.error('Error getting progress:', error);
    return [];
  }
};

export const isLessonCompleted = async (lessonId: number): Promise<boolean> => {
  try {
    const progress = await getProgress();
    const lessonProgress = progress.find(p => p.lessonId === lessonId);
    return lessonProgress?.completed || false;
  } catch (error) {
    console.error('Error checking lesson completion:', error);
    return false;
  }
};

export const getCompletedCount = async (): Promise<number> => {
  try {
    const progress = await getProgress();
    return progress.filter(p => p.completed).length;
  } catch (error) {
    console.error('Error getting completed count:', error);
    return 0;
  }
};
