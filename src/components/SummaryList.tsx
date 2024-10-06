import React from 'react';
import { useTranslation } from 'react-i18next';

interface Summary {
  title: string;
  summary: string;
}

interface SummaryListProps {
  summaries: Summary[];
}

const SummaryList: React.FC<SummaryListProps> = ({ summaries }) => {
  const { t } = useTranslation();

  if (summaries.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('summaries')}</h2>
      <ul className="space-y-4">
        {summaries.map((summary, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{summary.title}</h3>
            <p className="text-gray-600">{summary.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryList;