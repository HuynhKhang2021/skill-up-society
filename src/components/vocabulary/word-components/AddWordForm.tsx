
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Word } from '@/types/vocabulary';

interface AddWordFormProps {
  newWord: Partial<Word>;
  setNewWord: (word: Partial<Word>) => void;
  addWord: () => void;
  onCancel: () => void;
}

const AddWordForm: React.FC<AddWordFormProps> = ({ newWord, setNewWord, addWord, onCancel }) => {
  return (
    <Card className="mb-6 border-blue-200 bg-blue-50">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Add New Word</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="term" className="block text-sm font-medium mb-1">Word/Term*</label>
              <Input
                id="term"
                value={newWord.term}
                onChange={(e) => setNewWord({...newWord, term: e.target.value})}
                placeholder="Enter word or term"
              />
            </div>
            <div>
              <label htmlFor="partOfSpeech" className="block text-sm font-medium mb-1">Part of Speech</label>
              <Input
                id="partOfSpeech"
                value={newWord.partOfSpeech}
                onChange={(e) => setNewWord({...newWord, partOfSpeech: e.target.value})}
                placeholder="e.g., noun, verb, adjective"
              />
            </div>
          </div>
          <div>
            <label htmlFor="definition" className="block text-sm font-medium mb-1">Definition*</label>
            <Input
              id="definition"
              value={newWord.definition}
              onChange={(e) => setNewWord({...newWord, definition: e.target.value})}
              placeholder="Enter definition"
            />
          </div>
          <div>
            <label htmlFor="example" className="block text-sm font-medium mb-1">Example Sentence</label>
            <Input
              id="example"
              value={newWord.example}
              onChange={(e) => setNewWord({...newWord, example: e.target.value})}
              placeholder="Enter an example sentence"
            />
          </div>
          <div>
            <label htmlFor="etymology" className="block text-sm font-medium mb-1">Etymology</label>
            <Input
              id="etymology"
              value={newWord.etymology || ''}
              onChange={(e) => setNewWord({...newWord, etymology: e.target.value})}
              placeholder="Enter word origin"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={addWord} disabled={!newWord.term || !newWord.definition}>Add Word</Button>
      </CardFooter>
    </Card>
  );
};

export default AddWordForm;
