'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  Briefcase,
  Users,
  Sparkles,
  Mail,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Shield,
  Circle,
  Bell,
  Globe,
} from 'lucide-react';
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

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/blogs', label: 'All Blogs', icon: FileText },
    { href: '/admin/blog/create', label: 'Create Blog', icon: PenSquare },
    { href: '/admin/jobs', label: 'Manage Jobs', icon: Briefcase },
    { href: '/admin/marketing-applications', label: 'Marketing Inquiries', icon: Sparkles },
    { href: '/admin/contact-messages', label: 'Contact Messages', icon: Mail },
  ];

  // Derive breadcrumb from pathname
  const getBreadcrumb = () => {
    if (!pathname) return 'Dashboard';
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length <= 1) return 'Dashboard';
    const last = parts[parts.length - 1];
    return last
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  // If on login page, render children directly without the admin shell
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading spinner for protected admin pages
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-slate-300">Checking authorization...</p>
        </div>
      </div>
    );
  }

  const NavLinkList = ({ onSelect }: { onSelect?: () => void }) => (
    <ul className="space-y-1.5 px-3">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/admin/dashboard' && pathname?.startsWith(item.href));
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onSelect}
              className={cn(
                'flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              )}
            >
              <item.icon
                className={cn('w-4 h-4 shrink-0', isActive ? 'text-white' : 'text-slate-400')}
              />
              <span className="truncate">{item.label}</span>
              {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Mobile Drawer (Sheet) */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-72 bg-[#0b1329] text-white p-0 border-r border-slate-800 flex flex-col">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/30">
                S
              </div>
              <div>
                <h2 className="text-base font-bold text-white tracking-tight">Sownmark</h2>
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">Admin Studio</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 py-4 overflow-y-auto">
            <div className="px-5 mb-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </div>
            <NavLinkList onSelect={() => setIsSidebarOpen(false)} />
          </div>

          <div className="p-4 border-t border-slate-800 bg-[#090f20]">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-xl"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-[#0b1329] border-r border-slate-800 z-30">
        {/* Brand Logo Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/25">
              S
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight leading-tight">Sownmark</h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                <Circle className="w-1.5 h-1.5 fill-emerald-400 text-emerald-400" /> Admin Studio
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <div className="px-6 mb-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Management
          </div>
          <NavLinkList />
        </nav>

        {/* Bottom User Profile & Logout */}
        <div className="p-4 border-t border-slate-800/80 bg-[#070c1b]">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs">
              <Shield className="w-4 h-4 text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white truncate">Administrator</p>
              <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Session
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-xs font-semibold text-slate-400 hover:text-red-400 hover:bg-red-950/20 rounded-xl transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Modern Sticky Glass Header */}
        <header className="sticky top-0 z-20 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            {/* Mobile menu trigger & Breadcrumb */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100"
                aria-label="Open sidebar menu"
              >
                <Menu className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
                <span className="hidden sm:inline text-slate-400">Admin</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
                <span className="font-semibold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {getBreadcrumb()}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold gap-1.5"
              >
                <a href="https://sownmark.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span className="hidden sm:inline">View Website</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="rounded-xl text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 hidden sm:flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content Canvas */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
