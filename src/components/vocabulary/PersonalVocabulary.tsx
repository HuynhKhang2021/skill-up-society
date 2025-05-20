import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter } from "lucide-react";
import { Word } from '@/types/vocabulary';
import { useToast } from '@/hooks/use-toast';
import WordList from './word-components/WordList';
import AddWordForm from './word-components/AddWordForm';
import WordListCollection from './word-components/WordListCollection';

// Mock data for demonstration
const mockWords: Word[] = [
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
    masteryLevel: 4,
    etymology: "From the Persian fairy tale 'The Three Princes of Serendip', where the heroes were always making discoveries by accident.",
    synonyms: ["chance", "fortune", "luck", "providence", "happenstance"],
    antonyms: ["misfortune", "calamity", "misery"],
    collocations: ["happy serendipity", "mere serendipity", "pure serendipity"],
    usageExamples: [
      "Their meeting was a serendipity that changed both their lives.",
      "We found the restaurant by sheer serendipity when we got lost."
    ],
    languageOrigin: "Persian/English",
    mnemonicDevice: "Think of 'serene' + 'dipity' - a peaceful dip into good fortune"
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
    masteryLevel: 2,
    etymology: "From Greek 'ephemeros' meaning 'lasting only a day'",
    synonyms: ["fleeting", "transitory", "transient", "momentary", "brief"],
    antonyms: ["permanent", "enduring", "eternal", "everlasting"],
    collocations: ["ephemeral beauty", "ephemeral nature", "ephemeral phenomenon"],
    languageOrigin: "Greek"
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
    masteryLevel: 3,
    etymology: "From Latin 'ubique' meaning 'everywhere'",
    synonyms: ["omnipresent", "pervasive", "universal", "worldwide"],
    antonyms: ["rare", "scarce", "uncommon", "limited"],
    difficultyScore: 8
  }
];

// Mock word lists
const mockWordLists = [
  { id: "1", name: "Academic Words", description: "Words commonly used in academic writing", wordCount: 45, lastModified: "2 days ago" },
  { id: "2", name: "Business Terms", description: "Essential vocabulary for business communication", wordCount: 32, lastModified: "1 week ago" },
  { id: "3", name: "TOEFL Preparation", description: "Vocabulary for TOEFL exam preparation", wordCount: 78, lastModified: "3 days ago" }
];

const PersonalVocabulary = () => {
  const [words, setWords] = useState<Word[]>(mockWords);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddWordForm, setShowAddWordForm] = useState(false);
  const [newWord, setNewWord] = useState<Partial<Word>>({
    term: "",
    definition: "",
    example: "",
    partOfSpeech: "",
    level: "intermediate",
    tags: [],
    learned: false,
    masteryLevel: 0
  });
  const { toast } = useToast();

  const filteredWords = words.filter(word =>
    word.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addWord = () => {
    if (newWord.term && newWord.definition) {
      const wordToAdd: Word = {
        id: Date.now().toString(),
        term: newWord.term,
        definition: newWord.definition,
        example: newWord.example || "",
        partOfSpeech: newWord.partOfSpeech || "noun",
        level: newWord.level as 'beginner' | 'intermediate' | 'advanced' || 'intermediate',
        tags: newWord.tags || [],
        learned: false,
        masteryLevel: 0
      };

      setWords([...words, wordToAdd]);
      setNewWord({
        term: "",
        definition: "",
        example: "",
        partOfSpeech: "",
        level: "intermediate",
        tags: [],
        learned: false,
        masteryLevel: 0
      });
      setShowAddWordForm(false);

      toast({
        title: "Word Added",
        description: `"${wordToAdd.term}" has been added to your vocabulary list.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Personal Vocabulary Library</span>
            <Button onClick={() => setShowAddWordForm(!showAddWordForm)}>
              <Plus className="mr-2 h-4 w-4" /> Add Word
            </Button>
          </CardTitle>
          <CardDescription>
            Organize and manage your personal collection of vocabulary words
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="words" className="w-full">
            <TabsList>
              <TabsTrigger value="words">Words</TabsTrigger>
              <TabsTrigger value="lists">Word Lists</TabsTrigger>
            </TabsList>
            <TabsContent value="words" className="space-y-4">
              {showAddWordForm && (
                <AddWordForm 
                  newWord={newWord}
                  setNewWord={setNewWord}
                  addWord={addWord}
                  onCancel={() => setShowAddWordForm(false)}
                />
              )}

              <div className="flex gap-2 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search your vocabulary..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden md:inline">Filter</span>
                </Button>
              </div>

              <WordList words={filteredWords} />
            </TabsContent>

            <TabsContent value="lists">
              <WordListCollection wordLists={mockWordLists} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalVocabulary;
