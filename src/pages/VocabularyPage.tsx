
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalVocabulary from "@/components/vocabulary/PersonalVocabulary";
import VocabularyFlashcards from "@/components/vocabulary/VocabularyFlashcards";
import VocabularyGames from "@/components/vocabulary/VocabularyGames";
import PronunciationPractice from "@/components/vocabulary/PronunciationPractice";
import VocabularyAssessment from "@/components/vocabulary/VocabularyAssessment";
import ProgressTracking from "@/components/vocabulary/ProgressTracking";
import ContextLearning from "@/components/vocabulary/ContextLearning";
import CommunityVocabulary from "@/components/vocabulary/CommunityVocabulary";
import AdvancedLookup from "@/components/vocabulary/AdvancedLookup";
import { Book } from "lucide-react";

const VocabularyPage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <Book className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Vocabulary Builder</h1>
            <p className="text-gray-600">Expand your English vocabulary with our comprehensive tools</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 mb-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="context">Context</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="lookup">Lookup</TabsTrigger>
            <TabsTrigger value="sync">Sync</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <PersonalVocabulary />
          </TabsContent>
          <TabsContent value="flashcards">
            <VocabularyFlashcards />
          </TabsContent>
          <TabsContent value="games">
            <VocabularyGames />
          </TabsContent>
          <TabsContent value="pronunciation">
            <PronunciationPractice />
          </TabsContent>
          <TabsContent value="assessment">
            <VocabularyAssessment />
          </TabsContent>
          <TabsContent value="progress">
            <ProgressTracking />
          </TabsContent>
          <TabsContent value="context">
            <ContextLearning />
          </TabsContent>
          <TabsContent value="community">
            <CommunityVocabulary />
          </TabsContent>
          <TabsContent value="lookup">
            <AdvancedLookup />
          </TabsContent>
          <TabsContent value="sync">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Sync & Cross-Platform</h2>
              <p className="text-gray-600 mb-4">
                Your vocabulary progress syncs across all your devices.
                Use SkillUp Society on web, mobile, or tablet - your learning journey continues seamlessly.
              </p>
              <div className="p-6 bg-gray-100 rounded-lg text-center">
                <p className="text-lg font-medium">Coming Soon</p>
                <p className="text-gray-500 mt-2">Mobile apps for iOS and Android</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default VocabularyPage;
