import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { utd24Journals, ft50Journals, JournalCategory } from '../data/journalLists';

interface JournalListProps {
  onJournalSelect: (journals: string[]) => void;
}

const JournalList: React.FC<JournalListProps> = ({ onJournalSelect }) => {
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    onJournalSelect(selectedJournals);
  }, [selectedJournals, onJournalSelect]);

  const handleListChange = (listName: string) => {
    const listJournals = (listName === 'UTD24' ? utd24Journals : ft50Journals)
      .flatMap(category => category.journals.map(j => j.name));
    setSelectedJournals(prev => {
      const isFullySelected = listJournals.every(journal => prev.includes(journal));
      if (isFullySelected) {
        return prev.filter(journal => !listJournals.includes(journal));
      } else {
        return [...new Set([...prev, ...listJournals])];
      }
    });
  };

  const handleCategoryChange = (listName: string, categoryName: string) => {
    const categoryJournals = (listName === 'UTD24' ? utd24Journals : ft50Journals)
      .find(c => c.name === categoryName)?.journals.map(j => j.name) || [];
    setSelectedJournals(prev => {
      const isFullySelected = categoryJournals.every(journal => prev.includes(journal));
      if (isFullySelected) {
        return prev.filter(journal => !categoryJournals.includes(journal));
      } else {
        return [...new Set([...prev, ...categoryJournals])];
      }
    });
  };

  const handleJournalChange = (journal: string) => {
    setSelectedJournals(prev => 
      prev.includes(journal) ? prev.filter(j => j !== journal) : [...prev, journal]
    );
  };

  const renderJournalList = (listName: string, journalCategories: JournalCategory[]) => (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id={`list-${listName}`}
          checked={journalCategories.every(category => 
            category.journals.every(journal => selectedJournals.includes(journal.name))
          )}
          onChange={() => handleListChange(listName)}
          className="mr-2"
        />
        <h3 className="text-xl font-bold">{t(`categories.${listName}`)}</h3>
      </div>
      {journalCategories.map(category => (
        <div key={`${listName}-${category.name}`} className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`category-${listName}-${category.name}`}
              checked={category.journals.every(journal => selectedJournals.includes(journal.name))}
              onChange={() => handleCategoryChange(listName, category.name)}
              className="mr-2"
            />
            <label htmlFor={`category-${listName}-${category.name}`} className="font-semibold text-lg">
              {t(`categories.${category.name}`)}
            </label>
          </div>
          <ul className="pl-6 space-y-1">
            {category.journals.map(journal => (
              <li key={`${listName}-${journal.name}`} className="flex items-center">
                <input
                  type="checkbox"
                  id={`journal-${listName}-${journal.name}`}
                  checked={selectedJournals.includes(journal.name)}
                  onChange={() => handleJournalChange(journal.name)}
                  className="mr-2"
                />
                <label htmlFor={`journal-${listName}-${journal.name}`} className="text-sm">{journal.name}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('journalList')}</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>{renderJournalList('UTD24', utd24Journals)}</div>
        <div>{renderJournalList('FT50', ft50Journals)}</div>
      </div>
    </div>
  );
};

export default JournalList;