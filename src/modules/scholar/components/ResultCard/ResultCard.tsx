import React from 'react';
import Link from 'next/link';
import {FaQuoteLeft} from 'react-icons/fa';

const ResultCard = ({result}:any) => (
    <div className="p-4 border-b border-white">
        <div>

        <Link href={result.link} className="font-semibold text-xl underline">{result.title}</Link>
        <div>
            <FaQuoteLeft />
            <span>{result.cited_by.total}</span>
        </div>
        </div>
        {/* TODO: Create scholar author page */}
        <div className='italic'>
        {result.publication_info.summary}
        </div>
        <div>{result.snippet}</div>
    </div>
);

export default ResultCard;

// {
//     "position": 0,
//     "title": "The impact of coffee on health",
//     "result_id": "sWzmct-yYzgJ",
//     "link": "https://www.sciencedirect.com/science/article/pii/S0378512213000479",
//     "snippet": "… , where pressed ground coffee beans are used directly, in either espresso or coffee pot so … espresso or coffee pots, where boiled water is directly passed through pressed coffee powder …",
//     "publication_info": {
//         "summary": "A Cano-Marquina, JJ Tarín, A Cano - Maturitas, 2013 - Elsevier",
//         "authors": [
//             {
//                 "name": "A Cano-Marquina",
//                 "link": "https://scholar.google.com/citations?user=nMS5yswAAAAJ&hl=en&oi=sra",
//                 "serpapi_scholar_link": "https://serpapi.com/search.json?author_id=nMS5yswAAAAJ&engine=google_scholar_author&hl=en",
//                 "author_id": "nMS5yswAAAAJ"
//             }
//         ]
//     },
//     "inline_links": {
//         "serpapi_cite_link": "https://serpapi.com/search.json?engine=google_scholar_cite&q=sWzmct-yYzgJ",
//         "cited_by": {
//             "total": 439,
//             "link": "https://scholar.google.com/scholar?cites=4063287961593474225&as_sdt=2005&sciodt=0,5&hl=en",
//             "cites_id": "4063287961593474225",
//             "serpapi_scholar_link": "https://serpapi.com/search.json?as_sdt=2005&cites=4063287961593474225&engine=google_scholar&hl=en"
//         },
//         "related_pages_link": "https://scholar.google.com/scholar?q=related:sWzmct-yYzgJ:scholar.google.com/&scioq=coffee&hl=en&as_sdt=0,5",
//         "serpapi_related_pages_link": "https://serpapi.com/search.json?as_sdt=0%2C5&engine=google_scholar&hl=en&q=related%3AsWzmct-yYzgJ%3Ascholar.google.com%2F",
//         "versions": {
//             "total": 8,
//             "link": "https://scholar.google.com/scholar?cluster=4063287961593474225&hl=en&as_sdt=0,5",
//             "cluster_id": "4063287961593474225",
//             "serpapi_scholar_link": "https://serpapi.com/search.json?as_sdt=0%2C5&cluster=4063287961593474225&engine=google_scholar&hl=en"
//         }
//     }
// }