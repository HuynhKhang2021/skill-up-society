
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Award, Users, Clock } from "lucide-react";

const games = [
  {
    id: 'word-match',
    title: 'Word Match',
    description: 'Match words with their correct definitions',
    icon: 'match',
    difficulty: 'Beginner',
    timeEstimate: '5 min',
    players: 'Single player',
    popularityScore: 98
  },
  {
    id: 'word-scramble',
    title: 'Word Scramble',
    description: 'Unscramble letters to form the correct word',
    icon: 'scramble',
    difficulty: 'Intermediate',
    timeEstimate: '10 min',
    players: 'Single player',
    popularityScore: 92
  },
  {
    id: 'hangman',
    title: 'Word Guess',
    description: 'Guess the hidden word one letter at a time',
    icon: 'hangman',
    difficulty: 'All levels',
    timeEstimate: '7 min',
    players: 'Single player',
    popularityScore: 85
  },
  {
    id: 'crossword',
    title: 'Mini Crossword',
    description: 'Fill in the crossword puzzle with vocabulary words',
    icon: 'crossword',
    difficulty: 'Advanced',
    timeEstimate: '15 min',
    players: 'Single player',
    popularityScore: 88
  },
  {
    id: 'word-race',
    title: 'Word Race',
    description: 'Type definitions as fast as you can',
    icon: 'race',
    difficulty: 'Intermediate',
    timeEstimate: '3 min',
    players: 'Multiplayer available',
    popularityScore: 95
  },
  {
    id: 'word-association',
    title: 'Word Association',
    description: 'Connect words that are related to each other',
    icon: 'association',
    difficulty: 'All levels',
    timeEstimate: '8 min',
    players: 'Single player',
    popularityScore: 82
  }
];

const VocabularyGames = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Vocabulary Games</h2>
        <p className="text-gray-600 mb-6">
          Strengthen your vocabulary through fun, interactive games and exercises. Play regularly to reinforce your learning!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <Award className="h-4 w-4" />
                  {game.difficulty}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4" />
                  {game.timeEstimate}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  {game.players}
                </span>
              </div>
              {game.popularityScore > 90 && (
                <div className="mt-3">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    Popular! {game.popularityScore}% like this
                  </span>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Play Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-3">Word Exercises</h3>
        <p className="text-gray-600 mb-4">Practice your vocabulary with these structured exercises:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Fill in the Blanks</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm">
                Complete sentences by filling in missing words based on context clues.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Start Exercise</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Word Formation</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm">
                Practice creating different forms of words (nouns, verbs, adjectives).
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Start Exercise</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Synonym Challenge</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm">
                Match words with their synonyms to expand your vocabulary range.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Start Exercise</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Collocations Practice</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm">
                Learn which words naturally go together in English.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Start Exercise</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VocabularyGames;
