"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const [origin, setOrigin] = useState('https://sownmark.com');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  if (!pathname || pathname === '/') return null;

  const pathnames = pathname.split('/').filter((x) => x);
  if (pathnames.length === 0) return null;

  // Generate breadcrumb links and items
  const breadcrumbItems = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const displayName = name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      name: displayName,
      url: `${origin}${routeTo}`,
      path: routeTo,
    };
  });

  // Schema data
  const schemaList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: origin,
    },
    ...breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: item.url,
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav aria-label="Breadcrumb" className="py-4 px-4 md:px-8 bg-gray-50 border-b border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
          
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <React.Fragment key={item.path}>
                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                {isLast ? (
                  <span className="text-gray-900 font-semibold truncate" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors truncate"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
