'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isLoginPage = pathname === '/admin/login' || pathname?.startsWith('/admin/login');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (isLoginPage) {
      if (token) {
        router.push('/admin/dashboard');
      }
      return;
    }

    if (!token) {
      setIsAuthenticated(false);
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router, pathname, isLoginPage]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/blog/create', label: 'Create Blog' },
    { href: '/admin/blogs', label: 'All Blogs' },
    { href: '/admin/jobs', label: 'Manage Jobs' },
    { href: '/admin/marketing-applications', label: 'Digital Marketing Applications' },
    { href: '/admin/contact-messages', label: 'Contact Messages' },
  ];

  // If on login page, render children directly without the admin shell
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-[#1a2957] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              'lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white hover:bg-gray-700',
              'focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-md p-2'
            )}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-900 text-white p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold tracking-tight text-white">Admin</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-gray-200 hover:text-white hover:bg-gray-800"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      asChild
                      variant="ghost"
                      className={cn(
                        'w-full justify-start py-3 px-4 text-sm font-medium',
                        'text-gray-200 hover:text-white hover:bg-gray-800',
                        'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600'
                      )}
                    >
                      <Link href={item.href} onClick={() => setIsSidebarOpen(false)}>
                        {item.label}
                      </Link>
                    </Button>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-800">
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start py-3 px-4 text-sm font-medium',
                      'text-gray-200 hover:text-white hover:bg-red-800',
                      'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600'
                    )}
                    onClick={() => {
                      handleLogout();
                      setIsSidebarOpen(false);
                    }}
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-gray-900 text-white overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold tracking-tight text-white">Admin</h2>
          </div>
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      'w-full justify-start py-3 px-4 text-sm font-medium',
                      'text-gray-200 hover:text-white hover:bg-gray-800',
                      'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600'
                    )}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800">
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start py-3 px-4 text-sm font-medium',
                    'text-gray-200 hover:text-white hover:bg-red-800',
                    'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600'
                  )}
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="ml-12 lg:ml-0 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Admin Panel
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-8rem)]">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
