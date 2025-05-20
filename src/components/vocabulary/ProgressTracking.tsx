
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp, Target, Clock, Award, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

// Mock stats data
const learningStats = {
  totalWords: 243,
  learnedWords: 168,
  masteredWords: 89,
  reviewsDue: 27,
  dailyStreak: 14,
  longestStreak: 21,
  lastActivity: new Date()
};

// Mock chart data
const weeklyActivity = [
  { day: 'Mon', words: 12, reviews: 25, minutes: 15 },
  { day: 'Tue', words: 19, reviews: 30, minutes: 22 },
  { day: 'Wed', words: 8, reviews: 16, minutes: 10 },
  { day: 'Thu', words: 15, reviews: 22, minutes: 18 },
  { day: 'Fri', words: 21, reviews: 35, minutes: 25 },
  { day: 'Sat', words: 28, reviews: 42, minutes: 30 },
  { day: 'Sun', words: 14, reviews: 20, minutes: 16 }
];

const wordCategories = [
  { name: 'Academic', value: 95 },
  { name: 'Business', value: 65 },
  { name: 'Everyday', value: 83 },
  { name: 'Advanced', value: 42 }
];

const COLORS = ['#3B82F6', '#10B981', '#6366F1', '#F97316'];

const ProgressTracking = () => {
  const masteryPercentage = Math.round((learningStats.masteredWords / learningStats.totalWords) * 100);
  const learnedPercentage = Math.round((learningStats.learnedWords / learningStats.totalWords) * 100);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Vocabulary</CardDescription>
            <CardTitle className="text-3xl">{learningStats.totalWords}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">Words in your collection</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Learning Streak</CardDescription>
            <CardTitle className="text-3xl">{learningStats.dailyStreak} days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              Longest: {learningStats.longestStreak} days
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Reviews Due</CardDescription>
            <CardTitle className="text-3xl">{learningStats.reviewsDue}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <Button variant="link" className="h-auto p-0">Review Now</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Mastery Level</CardDescription>
            <CardTitle className="text-3xl">{masteryPercentage}%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={masteryPercentage} className="h-2" />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Weekly Activity
            </CardTitle>
            <CardDescription>
              Your vocabulary learning activity over the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyActivity}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="words" name="New Words" fill="#3B82F6" />
                  <Bar dataKey="reviews" name="Reviews" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Vocabulary Distribution
            </CardTitle>
            <CardDescription>
              Breakdown of your vocabulary by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wordCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wordCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Learning Progress
          </CardTitle>
          <CardDescription>
            Track your vocabulary mastery progress over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Words Learned</span>
                <span>{learningStats.learnedWords} of {learningStats.totalWords}</span>
              </div>
              <Progress value={learnedPercentage} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Words Mastered</span>
                <span>{learningStats.masteredWords} of {learningStats.totalWords}</span>
              </div>
              <Progress value={masteryPercentage} className="h-2" />
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Mastery Levels</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <Card className="bg-gray-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold mb-1">42</div>
                    <div className="text-xs text-gray-500">Level 1</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold mb-1">37</div>
                    <div className="text-xs text-gray-500">Level 2</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold mb-1">23</div>
                    <div className="text-xs text-gray-500">Level 3</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold mb-1">34</div>
                    <div className="text-xs text-gray-500">Level 4</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold mb-1 text-primary">32</div>
                    <div className="text-xs text-primary">Mastered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Learning Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>This week</span>
                <span className="text-lg font-medium">136 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Daily average</span>
                <span className="text-lg font-medium">19.4 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total learning time</span>
                <span className="text-lg font-medium">42.5 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="text-xs">14-Day Streak</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="text-xs">100+ Words</div>
              </div>
              <div className="text-center opacity-40">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-xs">Master 50 Words</div>
              </div>
              {/* More achievement placeholders */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressTracking;
