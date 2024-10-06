import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchForm from './components/SearchForm';
import JournalList from './components/JournalList';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [searchUrl, setSearchUrl] = useState('');
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const { t } = useTranslation();

  const handleSearch = (url: string) => {
    setSearchUrl(url);
    window.open(url, '_blank');
  };

  const handleJournalSelect = (journals: string[]) => {
    setSelectedJournals(journals);
  };

  const handleAISummary = () => {
    // 此功能暂时禁用
    console.log('AI Summary feature is currently disabled');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('title')}</h1>
        <p className="text-gray-600">{t('subtitle')}</p>
        <LanguageSelector />
      </header>
      <main className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <SearchForm 
          onSearch={handleSearch} 
          selectedJournals={selectedJournals} 
          onSummariesReceived={() => {}}
          onAISummary={handleAISummary}
          isLoading={false}
        />
        <JournalList onJournalSelect={handleJournalSelect} />
      </main>
    </div>
  );
}

export default App;