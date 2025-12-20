import { useState, useContext, useEffect } from 'react';
import { ChevronDown, Filter, X, BookOpen, CheckCircle, Users, Clock, Star, Book, Atom, Palette, Baby } from 'lucide-react';
import { ADDFILTERS } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { FiltersProps } from "@/interface";
import { filtersData } from "@/utils/data";

const Filters = () => {
    const { state, dispatch } = useContext(MyContext);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState({
        subjects: true,
        verification: true,
        gender: true,
        rating: true,
        experience: true,
    });

    const [filterGroups, setFilterGroups] = useState({
        verification: [] as FiltersProps[],
        gender: [] as FiltersProps[],
        subjects: [] as FiltersProps[],
        rating: [] as FiltersProps[],
        experience: [] as FiltersProps[],
    });

    useEffect(() => {
        const grouped = {
            verification: filtersData.filter(f => f.isVerified !== undefined),
            gender: filtersData.filter(f => f.gender),
            subjects: filtersData.filter(f => f.subjects && !f.isRating),
            rating: filtersData.filter(f => f.isRating),
            experience: filtersData.filter(f => f.years),
        };
        setFilterGroups(grouped);
    }, []);

    const toggleSection = (section: keyof typeof expandedSection) => {
        setExpandedSection(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleFilterToggle = (filter: FiltersProps) => {
        dispatch({ type: ADDFILTERS, payload: filter });
    };

    const onClearFilters = () => {
        if (state.selectedFilters) {
            Object.values(state.selectedFilters).forEach((f) => {
                dispatch({ type: ADDFILTERS, payload: f });
            });
        }
    };

    const getActiveFiltersCount = () => {
        return state.selectedFilters ? Object.keys(state.selectedFilters).length : 0;
    };

    const isFilterActive = (filterId: string) => {
        return state.selectedFilters?.[filterId] !== undefined;
    };

    const getSubjectIcon = (subjectName: string) => {
        switch (subjectName.toLowerCase()) {
            case 'maths':
                return <Book className="size-4 text-blue-600" />;
            case 'science':
                return <Atom className="size-4 text-green-600" />;
            case 'english':
                return <BookOpen className="size-4 text-red-600" />;
            case 'physics':
                return <Atom className="size-4 text-purple-600" />;
            case 'art':
                return <Palette className="size-4 text-pink-600" />;
            case 'kids expert':
                return <Baby className="size-4 text-amber-600" />;
            default:
                return <BookOpen className="size-4 text-gray-600" />;
        }
    };

    const toggleAllSections = (open: boolean) => {
        setExpandedSection({
            subjects: open,
            verification: open,
            gender: open,
            rating: open,
            experience: open,
        });
    };

    return (
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 mb-5">
            <div className="p-6 border-b border-gray-200">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-gray-700'>
                        <Filter className='size-5' />
                        <h1 className="text-black font-bold text-lg">Filters</h1>
                    </div>

                    <div className='flex items-center gap-3 sm:hidden'>
                        <button
                            onClick={onClearFilters}
                            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                            aria-label="Clear all filters"
                        >
                            <X className='size-5' />
                        </button>
                        <div className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
                            {getActiveFiltersCount()} active
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 py-4 border-b border-gray-100 md:hidden">
                <button
                    type="button"
                    onClick={() => {
                        setIsMobileOpen(!isMobileOpen);
                        if (!isMobileOpen) {
                            toggleAllSections(false);
                        }
                    }}
                    aria-expanded={isMobileOpen}
                    className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                    <span className="inline-flex items-center gap-2">
                        <Filter className="size-4" />
                        {isMobileOpen ? 'Hide filters' : 'Show filters'}
                        <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                            {getActiveFiltersCount()} active
                        </span>
                    </span>
                    <ChevronDown className={`size-4 transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Filter Sections */}
            <div className={`p-6 space-y-6 ${isMobileOpen ? 'block' : 'hidden md:block'}`}>
                {filterGroups.subjects.length > 0 && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection("subjects")}
                            className='flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors'
                        >
                            <div className='flex items-center gap-2'>
                                <BookOpen className='size-5 text-gray-700' />
                                <label className='text-base font-semibold text-gray-800'>Subjects</label>
                            </div>
                            <ChevronDown className={`size-5 transition-transform duration-200 ${expandedSection.subjects ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedSection.subjects && (
                            <div className='p-4 pt-0 border-t border-gray-200'>
                                <div className='flex flex-col gap-2'>
                                    {filterGroups.subjects.map((filter) => (
                                        <label
                                            key={filter.id}
                                            className={`flex items-center gap-3 text-gray-700 text-base p-3 rounded-lg cursor-pointer transition-colors ${isFilterActive(filter.id) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={isFilterActive(filter.id)}
                                                onChange={() => handleFilterToggle(filter)}
                                                className='w-5 h-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            />
                                            <div className="flex items-center gap-2">
                                                {getSubjectIcon(filter.name)}
                                                <span className="font-medium">{filter.name}</span>
                                            </div>
                                            {isFilterActive(filter.id) && (
                                                <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                    Selected
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {filterGroups.verification.length > 0 && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection("verification")}
                            className='flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors'
                        >
                            <div className='flex items-center gap-2'>
                                <CheckCircle className='size-5 text-gray-700' />
                                <label className='text-base font-semibold text-gray-800'>Verification</label>
                            </div>
                            <ChevronDown className={`size-5 transition-transform duration-200 ${expandedSection.verification ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedSection.verification && (
                            <div className='p-4 pt-0 border-t border-gray-200'>
                                <div className='space-y-2'>
                                    {filterGroups.verification.map((filter) => (
                                        <label
                                            key={filter.id}
                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isFilterActive(filter.id) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={isFilterActive(filter.id)}
                                                onChange={() => handleFilterToggle(filter)}
                                                className='w-5 h-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            />
                                            <span className='text-base font-medium text-gray-700'>{filter.name} tutors only</span>
                                            {isFilterActive(filter.id) && (
                                                <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                    Selected
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Gender Filter */}
                {filterGroups.gender.length > 0 && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection("gender")}
                            className='flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors'
                        >
                            <div className='flex items-center gap-2'>
                                <Users className='size-5 text-gray-700' />
                                <label className='text-base font-semibold text-gray-800'>Gender</label>
                            </div>
                            <ChevronDown className={`size-5 transition-transform duration-200 ${expandedSection.gender ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedSection.gender && (
                            <div className='p-4 pt-0 border-t border-gray-200'>
                                <div className='space-y-2'>
                                    {filterGroups.gender.map((filter) => (
                                        <label
                                            key={filter.id}
                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isFilterActive(filter.id) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={isFilterActive(filter.id)}
                                                onChange={() => handleFilterToggle(filter)}
                                                className='w-5 h-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            />
                                            <span className='text-base font-medium text-gray-700'>{filter.name} tutors</span>
                                            {isFilterActive(filter.id) && (
                                                <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                    Selected
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Rating Filter */}
                {filterGroups.rating.length > 0 && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection("rating")}
                            className='flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors'
                        >
                            <div className='flex items-center gap-2'>
                                <Star className='size-5 text-gray-700' />
                                <label className='text-base font-semibold text-gray-800'>Rating</label>
                            </div>
                            <ChevronDown className={`size-5 transition-transform duration-200 ${expandedSection.rating ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedSection.rating && (
                            <div className='p-4 pt-0 border-t border-gray-200'>
                                <div className='space-y-2'>
                                    {filterGroups.rating.map((filter) => (
                                        <label
                                            key={filter.id}
                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isFilterActive(filter.id) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={isFilterActive(filter.id)}
                                                onChange={() => handleFilterToggle(filter)}
                                                className='w-5 h-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            />
                                            <span className='text-base font-medium text-gray-700'>{filter.name} Star Rating</span>
                                            {isFilterActive(filter.id) && (
                                                <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                    Selected
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Experience Filter */}
                {filterGroups.experience.length > 0 && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection("experience")}
                            className='flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors'
                        >
                            <div className='flex items-center gap-2'>
                                <Clock className='size-5 text-gray-700' />
                                <label className='text-base font-semibold text-gray-800'>Experience</label>
                            </div>
                            <ChevronDown className={`size-5 transition-transform duration-200 ${expandedSection.experience ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedSection.experience && (
                            <div className='p-4 pt-0 border-t border-gray-200'>
                                <div className='space-y-2'>
                                    {filterGroups.experience.map((filter) => (
                                        <label
                                            key={filter.id}
                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isFilterActive(filter.id) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={isFilterActive(filter.id)}
                                                onChange={() => handleFilterToggle(filter)}
                                                className='w-5 h-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            />
                                            <span className='text-base font-medium text-gray-700'>{filter.name}</span>
                                            {isFilterActive(filter.id) && (
                                                <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                    Selected
                                                </span>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className={`p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg ${isMobileOpen ? 'block' : 'hidden md:block'}`}>
                <div className='flex items-center justify-between'>
                    <button
                        onClick={onClearFilters}
                        className='text-base font-medium text-gray-600 hover:text-gray-800 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={getActiveFiltersCount() === 0}
                    >
                        Clear All Filters
                    </button>

                    <div className='text-sm text-gray-500 font-medium'>
                        {getActiveFiltersCount()} filter{getActiveFiltersCount() !== 1 ? 's' : ''} applied
                    </div>
                </div>

                {/* Mobile-only close button */}
                <div className="md:hidden mt-4">
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="w-full text-center text-base font-medium text-indigo-600 hover:text-indigo-800 py-3 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                        Apply Filters & Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
