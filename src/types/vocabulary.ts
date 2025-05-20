
export interface Word {
  id: string;
  term: string;
  definition: string;
  example: string;
  partOfSpeech: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  pronunciation?: string;
  audioUrl?: string;
  imageUrl?: string;
  learned: boolean;
  lastReviewed?: Date;
  masteryLevel: number; // 0-5 where 5 is mastered
}

export interface WordList {
  id: string;
  name: string;
  description: string;
  wordIds: string[];
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  ownerId: string;
}

export interface LearningStatistics {
  totalWords: number;
  learnedWords: number;
  masteredWords: number;
  reviewsDue: number;
  dailyStreak: number;
  longestStreak: number;
  lastActivity?: Date;
}
