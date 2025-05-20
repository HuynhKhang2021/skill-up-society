
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Trash2, Edit, BookOpen } from "lucide-react";
import { Word } from '@/types/vocabulary';
import { useToast } from '@/components/ui/use-toast';

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
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowAddWordForm(false)}>Cancel</Button>
                    <Button onClick={addWord} disabled={!newWord.term || !newWord.definition}>Add Word</Button>
                  </CardFooter>
                </Card>
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

              <div className="divide-y">
                {filteredWords.length > 0 ? (
                  filteredWords.map(word => (
                    <div key={word.id} className="py-4">
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
                  ))
                ) : (
                  <div className="py-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <BookOpen className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium">No words found</h3>
                    <p className="text-gray-500 mt-1">
                      {searchTerm ? 'Try a different search term' : 'Add your first word to get started'}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="lists">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Your Word Lists</h3>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create List
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockWordLists.map(list => (
                    <Card key={list.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{list.name}</CardTitle>
                        <CardDescription>{list.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm">
                          <span>{list.wordCount} words</span>
                          <span className="text-gray-500">Updated {list.lastModified}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View List</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalVocabulary;
