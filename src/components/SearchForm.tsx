import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, BookOpen } from 'lucide-react';

interface SearchFormProps {
  onSearch: (url: string) => void;
  selectedJournals: string[];
  onSummariesReceived: (summaries: any[]) => void;
  onAISummary: () => void;
  isLoading: boolean;
}

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, selectedJournals, onAISummary, isLoading }) => {
  const [keywords, setKeywords] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = 'https://scholar.google.com/scholar?q=';
    const keywordsQuery = keywords.split(',').map(k => k.trim()).join(' AND ');
    const journalsQuery = selectedJournals.map(j => `source:"${j.trim()}"`).join(' OR ');
    const query = `(${keywordsQuery}) (${journalsQuery})`;
    const encodedQuery = encodeURIComponent(query);
    const yearRange = startYear && endYear ? `&as_ylo=${startYear}&as_yhi=${endYear}` : '';
    const searchUrl = `${baseUrl}${encodedQuery}${yearRange}`;

    onSearch(searchUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">{t('keywords')}</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder={t('keywordsPlaceholder')}
          required
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="startYear" className="block text-sm font-medium text-gray-700">{t('startYear')}</label>
          <select
            id="startYear"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">{t('selectYear')}</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="endYear" className="block text-sm font-medium text-gray-700">{t('endYear')}</label>
          <select
            id="endYear"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">{t('selectYear')}</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <Search className="mr-2" size={20} />
          {t('searchInGoogleScholar')}
        </button>
        <button
          type="button"
          onClick={onAISummary}
          disabled={true}
          className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md flex items-center justify-center cursor-not-allowed"
          title={t('aiSummaryDisabled')}
        >
          <BookOpen className="mr-2" size={20} />
          {t('aiSummary')}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;