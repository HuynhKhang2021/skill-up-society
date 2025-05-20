
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftCircle, ArrowRightCircle, BookOpen, CheckCircle, XCircle, RotateCcw, Volume } from "lucide-react";
import { Word } from '@/types/vocabulary';

// Mock flashcard data
const mockFlashcards: Word[] = [
  {
    id: "1",
    term: "Serendipity",
    definition: "The occurrence and development of events by chance in a happy or beneficial way",
    example: "A fortunate stroke of serendipity came my way when I accidentally met my future business partner.",
    partOfSpeech: "noun",
    level: "advanced",
    tags: ["luck", "discovery", "fortune"],
    pronunciation: "/ˌsɛr.ənˈdɪp.ɪ.ti/",
    learned: true,
    masteryLevel: 4
  },
  {
    id: "2",
    term: "Ephemeral",
    definition: "Lasting for a very short time",
    example: "The beauty of cherry blossoms is ephemeral, lasting only a few days.",
    partOfSpeech: "adjective",
    level: "advanced",
    tags: ["temporary", "fleeting", "brief"],
    pronunciation: "/ɪˈfɛm.ər.əl/",
    learned: false,
    masteryLevel: 2
  },
  {
    id: "3",
    term: "Ubiquitous",
    definition: "Present, appearing, or found everywhere",
    example: "Mobile phones have become ubiquitous in modern society.",
    partOfSpeech: "adjective",
    level: "advanced",
    tags: ["everywhere", "common", "omnipresent"],
    pronunciation: "/juːˈbɪk.wɪ.təs/",
    learned: true,
    masteryLevel: 3
  },
  {
    id: "4",
    term: "Paradigm",
    definition: "A typical example or pattern of something; a model",
    example: "The company is a paradigm of excellent customer service.",
    partOfSpeech: "noun",
    level: "advanced",
    tags: ["model", "pattern", "example"],
    pronunciation: "/ˈpærədaɪm/",
    learned: true,
    masteryLevel: 3
  },
  {
    id: "5",
    term: "Eloquent",
    definition: "Fluent or persuasive in speaking or writing",
    example: "She gave an eloquent speech that moved the audience to tears.",
    partOfSpeech: "adjective",
    level: "advanced",
    tags: ["speech", "persuasive", "articulate"],
    pronunciation: "/ˈɛləkwənt/",
    learned: false,
    masteryLevel: 1
  }
];

const VocabularyFlashcards = () => {
  const [flashcards, setFlashcards] = useState<Word[]>(mockFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [studyMode, setStudyMode] = useState<'standard' | 'spaced' | 'quiz'>('standard');
  const [wordList, setWordList] = useState("all");
  
  const handleCardFlip = () => {
    setShowDefinition(!showDefinition);
  };

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowDefinition(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowDefinition(false);
    }
  };

  const handleKnown = () => {
    // In a real app, update the word's mastery level
    handleNextCard();
  };

  const handleNotKnown = () => {
    // In a real app, reset or lower the word's mastery level
    handleNextCard();
  };

  const playAudio = () => {
    // In a real app, play pronunciation audio
    console.log("Playing audio for:", flashcards[currentCardIndex].term);
  };

  const resetDeck = () => {
    setCurrentCardIndex(0);
    setShowDefinition(false);
  };

  const currentCard = flashcards[currentCardIndex];

  if (flashcards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <BookOpen className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium mb-2">No flashcards available</h3>
        <p className="text-gray-500">Add words to your vocabulary to start practicing with flashcards</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-3">
          <Select value={wordList} onValueChange={setWordList}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select list" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Words</SelectItem>
              <SelectItem value="academic">Academic Words</SelectItem>
              <SelectItem value="business">Business Terms</SelectItem>
              <SelectItem value="toefl">TOEFL Preparation</SelectItem>
            </SelectContent>
          </Select>
          
          <Tabs value={studyMode} onValueChange={(v) => setStudyMode(v as 'standard' | 'spaced' | 'quiz')}>
            <TabsList>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="spaced">Spaced Repetition</TabsTrigger>
              <TabsTrigger value="quiz">Quiz Mode</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="text-sm text-gray-500">
          {currentCardIndex + 1} of {flashcards.length} cards
        </div>
      </div>

      <div className="relative">
        <div 
          className="w-full mx-auto max-w-xl h-72 cursor-pointer perspective-1000"
          onClick={handleCardFlip}
        >
          <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${showDefinition ? 'rotate-y-180' : ''}`}>
            {/* Front of card (term) */}
            <Card className={`absolute w-full h-full backface-hidden ${showDefinition ? 'opacity-0' : 'opacity-100'}`}>
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-3xl font-bold mb-4">{currentCard.term}</h2>
                <p className="text-gray-600">{currentCard.partOfSpeech}</p>
                {currentCard.pronunciation && (
                  <div className="mt-4 flex items-center gap-2 text-gray-500">
                    <span>{currentCard.pronunciation}</span>
                    <Button onClick={(e) => { e.stopPropagation(); playAudio(); }} variant="ghost" size="sm" className="rounded-full p-1">
                      <Volume className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <p className="text-sm text-gray-400 mt-8">Click to flip</p>
              </CardContent>
            </Card>
            
            {/* Back of card (definition) */}
            <Card className={`absolute w-full h-full backface-hidden rotate-y-180 ${showDefinition ? 'opacity-100' : 'opacity-0'}`}>
              <CardContent className="flex flex-col h-full p-8">
                <h3 className="text-xl font-semibold mb-4">Definition:</h3>
                <p className="text-gray-600 mb-4">{currentCard.definition}</p>
                {currentCard.example && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Example:</h3>
                    <p className="text-gray-600 italic">"{currentCard.example}"</p>
                  </>
                )}
                <p className="text-sm text-gray-400 mt-auto">Click to flip back</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${currentCardIndex === 0 ? 'text-gray-300' : 'text-gray-500'}`}
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0}
          >
            <ArrowLeftCircle className="h-8 w-8" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${currentCardIndex === flashcards.length - 1 ? 'text-gray-300' : 'text-gray-500'}`}
            onClick={handleNextCard}
            disabled={currentCardIndex === flashcards.length - 1}
          >
            <ArrowRightCircle className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2 mt-6">
        <Button variant="outline" onClick={resetDeck} className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
        <Button 
          variant="outline" 
          className="border-red-200 text-red-600 hover:bg-red-50"
          onClick={handleNotKnown}
        >
          <XCircle className="h-4 w-4 mr-1" />
          Don't Know
        </Button>
        <Button 
          variant="outline"
          className="border-green-200 text-green-600 hover:bg-green-50"
          onClick={handleKnown}
        >
          <CheckCircle className="h-4 w-4 mr-1" />
          Know It
        </Button>
      </div>

      {studyMode === 'spaced' && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
          <h3 className="font-semibold mb-1">Spaced Repetition Active</h3>
          <p>Cards you mark as "Don't Know" will appear more frequently. Cards you know well will appear less often.</p>
        </div>
      )}

      {studyMode === 'quiz' && (
        <div className="mt-6 p-4 bg-purple-50 rounded-lg text-sm text-purple-800">
          <h3 className="font-semibold mb-1">Quiz Mode Active</h3>
          <p>Your answers are being tracked for a final score at the end of the session.</p>
        </div>
      )}
    </div>
  );
};

export default VocabularyFlashcards;
