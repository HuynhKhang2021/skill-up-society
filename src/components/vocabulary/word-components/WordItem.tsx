
import React from 'react';
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Word } from '@/types/vocabulary';

interface WordItemProps {
  word: Word;
}

const WordItem: React.FC<WordItemProps> = ({ word }) => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg flex items-center gap-2">
            {word.term} 
            <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">{word.partOfSpeech}</span>
            {word.level === 'advanced' && (
              <span className="text-xs px-2 py-1 bg-purple-100 rounded text-purple-600">Advanced</span>
            )}
          </h3>
          <p className="text-gray-700 mt-1">{word.definition}</p>
          {word.example && <p className="text-gray-500 italic text-sm mt-1">"{word.example}"</p>}
          
          {/* Additional word information */}
          {word.etymology && (
            <div className="mt-2">
              <p className="text-sm text-gray-600"><span className="font-medium">Origin:</span> {word.etymology}</p>
            </div>
          )}
          
          {word.synonyms && word.synonyms.length > 0 && (
            <div className="mt-1">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Synonyms:</span> {word.synonyms.join(", ")}
              </p>
            </div>
          )}
          
          {word.tags && word.tags.length > 0 && (
            <div className="flex gap-1 mt-2 flex-wrap">
              {word.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">#{tag}</span>
              ))}
            </div>
          )}
          
          <div className="mt-2">
            <div className="h-1.5 w-36 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${(word.masteryLevel / 5) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 mt-1">Mastery: {word.masteryLevel}/5</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WordItem;
