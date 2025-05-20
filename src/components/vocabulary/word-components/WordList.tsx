
import React from 'react';
import { BookOpen } from "lucide-react";
import { Word } from '@/types/vocabulary';
import WordItem from './WordItem';

interface WordListProps {
  words: Word[];
}

const WordList: React.FC<WordListProps> = ({ words }) => {
  if (words.length === 0) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          <BookOpen className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium">No words found</h3>
        <p className="text-gray-500 mt-1">
          Try a different search term or add your first word to get started
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y">
      {words.map(word => (
        <WordItem key={word.id} word={word} />
      ))}
    </div>
  );
};

export default WordList;
