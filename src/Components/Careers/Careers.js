import React, { useState, useMemo } from 'react';
import { Search, MapPin, FileText, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const initialJobListings = [
  { title: "Expert Technique JAVA/ JEE (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Ingenieur Concepteur Développeur JAVA Confirmé/ Senior (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Expert technique Front End", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Frontend" },
  { title: "Senior Outsystems Developer", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Fullstack" },
  { title: "Ingénieur Test Fonctionnel (Anglophone) - OUJDA", location: "Oujda", country: "Maroc", type: "CDI", expertise: "QA" },
  { title: "Expert Technique Hybris", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Developpeur Salesforce Commerce Cloud B2C et B2B", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Fullstack" },
  { title: "Expert Technique JAVA/ JEE (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Ingénieur Concepteur Développeur JAVA Confirmé/ Senior (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Expert technique Front End", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Frontend" },
  { title: "Senior Outsystems Developer", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Fullstack" },
  { title: "Ingénieur Test Fonctionnel (Anglophone) - OUJDA", location: "Oujda", country: "Maroc", type: "CDI", expertise: "QA" },
  { title: "Expert Technique Hybris", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Développeur Salesforce Commerce Cloud B2C et B2B", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Fullstack" },
  { title: "Expert Technique JAVA/ JEE (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Ingénieur Concepteur Développeur JAVA Confirmé/ Senior (Oujda)", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Expert technique Front End", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Frontend" },
  { title: "Senior Outsystems Developer", location: "Oujda", country: "Maroc", type: "CDI", expertise: "Fullstack" },
  { title: "Ingénieur Test Fonctionnel (Anglophone) - OUJDA", location: "Oujda", country: "Maroc", type: "CDI", expertise: "QA" },
  { title: "Expert Technique Hybris", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Backend" },
  { title: "Développeur Salesforce Commerce Cloud B2C et B2B", location: "Casablanca", country: "Maroc", type: "CDI", expertise: "Fullstack" }
];

const ITEMS_PER_PAGE = 10;

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    country: '',
    location: '',
    expertise: '',
    type: ''
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = useMemo(() => {
    return initialJobListings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = !filters.country || job.country === filters.country;
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesExpertise = !filters.expertise || job.expertise === filters.expertise;
      const matchesType = !filters.type || job.type === filters.type;

      return matchesSearch && matchesCountry && matchesLocation && matchesExpertise && matchesType;
    });
  }, [searchTerm, filters]);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const uniqueOptions = useMemo(() => ({
    countries: [...new Set(initialJobListings.map(job => job.country))],
    locations: [...new Set(initialJobListings.map(job => job.location))],
    expertises: [...new Set(initialJobListings.map(job => job.expertise))],
    types: [...new Set(initialJobListings.map(job => job.type))]
  }), []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-c-1390">
      <div className="dark:bg-black bg-white rounded-lg overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Recherchez un titre de poste, un lieu, un travail à distance..."
                className="w-full pl-10 pr-4 py-2  bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when search term changes
                }}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('country', e.target.value)}
              value={filters.country}
            >
              <option value="">Tous les pays</option>
              {uniqueOptions.countries.map(country => (
                <option  key={country} value={country}>{country}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('location', e.target.value)}
              value={filters.location}
            >
              <option value="">Toutes les agences</option>
              {uniqueOptions.locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('expertise', e.target.value)}
              value={filters.expertise}
            >
              <option value="">Toutes les expertises</option>
              {uniqueOptions.expertises.map(expertise => (
                <option key={expertise} value={expertise}>{expertise}</option>
              ))}
            </select>
            <select
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
              onChange={(e) => handleFilterChange('type', e.target.value)}
              value={filters.type}
            >
              <option value="">Tous les types de contrat</option>
              {uniqueOptions.types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 ">
            {paginatedJobs.map((job, index) => (
              <div key={index} className="flex hover:bg-gray-50 justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin size={16} className="mr-1" />
                    {job.location}, {job.country}
                    <FileText size={16} className="ml-4 mr-1" />
                    {job.type}
                  </div>
                </div>
                <a href="#"><ArrowRight className="text-pink-500" /></a>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                Aucun poste ne correspond à votre recherche.
              </div>
            )}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <span>{currentPage} / {pageCount}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
