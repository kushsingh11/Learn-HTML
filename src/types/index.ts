export interface Lesson {
  id: number;
  title: string;
  description: string;
  category: 'basics' | 'text' | 'lists' | 'links' | 'images' | 'tables' | 'forms' | 'advanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  example: string;
  exercise?: string;
  exerciseAnswer?: string;
}

export interface Progress {
  lessonId: number;
  completed: boolean;
  lastAccessed: Date;
}

export type RootStackParamList = {
  Home: undefined;
  LessonDetail: { lesson: Lesson };
  CodeEditor: { lesson: Lesson };
};
