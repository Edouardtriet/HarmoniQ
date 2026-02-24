import { useState, useEffect } from 'react';
import { X, Download, Printer } from 'lucide-react';
import { Button } from './ui/button';
import { ColdStorageTeaser } from './teasers/ColdStorageTeaser';
import { OilGasTeaser } from './teasers/OilGasTeaser';
import { WaterUtilitiesTeaser } from './teasers/WaterUtilitiesTeaser';
import { ManufacturingTeaser } from './teasers/ManufacturingTeaser';
import { TelecomTeaser } from './teasers/TelecomTeaser';
import { AirportsTeaser } from './teasers/AirportsTeaser';
import { BuildingsTeaser } from './teasers/BuildingsTeaser';
import { DataCentersTeaser } from './teasers/DataCentersTeaser';

interface SectorTeaserRouterProps {
  selectedSector: string | null;
  onClose: () => void;
}

export function SectorTeaserRouter({ selectedSector, onClose }: SectorTeaserRouterProps) {
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    // Force light mode for all teasers
    setCurrentTheme('light');
    
    // Ensure document is in light mode for teasers
    document.documentElement.classList.remove('dark');

    // Listen for print events
    const beforePrint = () => {
      setIsPrintMode(true);
      // Force light theme for print
      document.body.setAttribute('data-print-theme', 'light');
      document.documentElement.classList.remove('dark');
    };

    const afterPrint = () => {
      setIsPrintMode(false);
      document.body.removeAttribute('data-print-theme');
    };

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, []);

  if (!selectedSector) return null;

  const handlePrint = () => {
    // Force a small delay to ensure theme is captured
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleDownloadPDF = () => {
    // Same as print - browsers handle PDF save
    handlePrint();
  };

  const renderTeaser = () => {
    switch (selectedSector) {
      case 'cold-storage':
        return <ColdStorageTeaser />;
      case 'oil-gas':
        return <OilGasTeaser />;
      case 'water-utilities':
        return <WaterUtilitiesTeaser />;
      case 'manufacturing':
        return <ManufacturingTeaser />;
      case 'telecom':
        return <TelecomTeaser />;
      case 'airports':
        return <AirportsTeaser />;
      case 'buildings':
        return <BuildingsTeaser />;
      case 'data-centers':
        return <DataCentersTeaser />;
      default:
        return <div>Teaser not found</div>;
    }
  };

  return (
    <>
      {/* Screen View - Force Light Mode */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 print:hidden">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-auto rounded-lg shadow-2xl light-mode-override">
          {/* Header Controls */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-black">Sector Teaser</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="flex items-center gap-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-900"
              >
                <Printer className="w-4 h-4" />
                Print
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-900"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="flex items-center gap-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-900"
              >
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>
          </div>

          {/* Teaser Content - Screen Version */}
          <div className="teaser-content">
            {renderTeaser()}
          </div>
        </div>
      </div>

      {/* Print-Only View - Exact Screen Replica */}
      <div className="teaser-print-overlay hidden print:block print:fixed print:inset-0 print:z-[9999]">
        <div className="print-teaser-container">
          {renderTeaser()}
        </div>
      </div>
    </>
  );
}