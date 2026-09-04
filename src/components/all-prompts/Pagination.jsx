import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, filters }) => {
    if (totalPages <= 1) return null;

    const createPageUrl = (page) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (value && key !== 'page') params.set(key, value);
        });

        params.set('page', page);
        return `?${params.toString()}`;
    };

    return (
        <nav aria-label="Prompt pages" className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-700/40 bg-[#161f30] p-4 sm:flex-row">
            <p className="text-sm text-gray-400">
                Page <span className="font-bold text-secondary">{currentPage}</span> of {totalPages}
            </p>

            <div className="join">
                {currentPage === 1 ? (
                    <span aria-disabled="true" className="join-item btn btn-sm pointer-events-none border-gray-700 bg-[#1a2333] text-gray-300 opacity-40">
                        <FiChevronLeft />
                        <span className="hidden sm:inline">Previous</span>
                    </span>
                ) : (
                    <Link href={createPageUrl(currentPage - 1)} className="join-item btn btn-sm border-gray-700 bg-[#1a2333] text-gray-300 hover:border-primary hover:bg-primary">
                        <FiChevronLeft />
                        <span className="hidden sm:inline">Previous</span>
                    </Link>
                )}

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Link
                        key={page}
                        href={createPageUrl(page)}
                        aria-current={page === currentPage ? 'page' : undefined}
                        className={`join-item btn btn-sm border-gray-700 ${page === currentPage
                            ? 'border-primary bg-primary text-primary-content hover:bg-primary'
                            : 'bg-[#1a2333] text-gray-300 hover:border-primary hover:bg-[#202c40]'
                            }`}
                    >
                        {page}
                    </Link>
                ))}

                {currentPage === totalPages ? (
                    <span aria-disabled="true" className="join-item btn btn-sm pointer-events-none border-gray-700 bg-[#1a2333] text-gray-300 opacity-40">
                        <span className="hidden sm:inline">Next</span>
                        <FiChevronRight />
                    </span>
                ) : (
                    <Link href={createPageUrl(currentPage + 1)} className="join-item btn btn-sm border-gray-700 bg-[#1a2333] text-gray-300 hover:border-primary hover:bg-primary">
                        <span className="hidden sm:inline">Next</span>
                        <FiChevronRight />
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Pagination;
