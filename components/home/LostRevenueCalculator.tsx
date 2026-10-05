"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LostRevenueCalculator() {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState<number>(10);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(2000);
  const [conversionRate, setConversionRate] = useState<number>(10);
  const [operatingDays, setOperatingDays] = useState<number>(30);
  const [prospectShare, setProspectShare] = useState<number>(100);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const quickAovChips = [500, 2000, 5000, 20000];

  // Calculation formula from strategy brief:
  // Estimated Monthly Opportunity = Missed Calls Per Day × Average Order Value × Conversion Rate × Operating Days × Prospect Share
  const monthlyOpportunity = Math.round(
    missedCallsPerDay * averageOrderValue * (conversionRate / 100) * operatingDays * (prospectShare / 100)
  );
  const annualOpportunity = monthlyOpportunity * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="relative py-24 bg-gray-50 border-y border-gray-100 text-gray-900 overflow-hidden" id="calculator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            ROI & Revenue Exposure Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1a2957] mb-6">
            How Much Revenue Could You Be Losing From Missed Calls?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Missed calls can represent meaningful revenue because each one may be a prospect who contacts a competitor next. 
            The estimate below multiplies your missed calls, average order value and conversion rate to show the potential opportunity. 
            It is an illustration, not a prediction.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Input 1: Missed calls per day */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="missed-calls" className="text-sm font-bold text-gray-800">
                  Missed calls per day
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="missed-calls"
                    type="number"
                    min={0}
                    max={500}
                    value={missedCallsPerDay}
                    onChange={(e) => setMissedCallsPerDay(Math.max(0, Math.min(500, Number(e.target.value) || 0)))}
                    className="w-20 px-2.5 py-1 text-right text-base font-bold bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="text-xs text-gray-500 font-medium">calls/day</span>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={missedCallsPerDay}
                onChange={(e) => setMissedCallsPerDay(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                aria-label="Missed calls per day slider"
              />
              <div className="flex justify-between text-xs text-gray-400 font-medium">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100+</span>
              </div>
            </div>

            {/* Input 2: Average Order Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="aov" className="text-sm font-bold text-gray-800">
                  Average order / customer value (USD)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 text-sm font-semibold">$</span>
                  <input
                    id="aov"
                    type="number"
                    min={0}
                    value={averageOrderValue}
                    onChange={(e) => setAverageOrderValue(Math.max(0, Number(e.target.value) || 0))}
                    className="w-28 px-2.5 py-1 text-right text-base font-bold bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              {/* Quick Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {quickAovChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setAverageOrderValue(chip)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      averageOrderValue === chip
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                    }`}
                  >
                    ${chip.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Conversion Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="conversion-rate" className="text-sm font-bold text-gray-800">
                  Estimated close / conversion rate
                </label>
                <div className="flex items-center gap-1">
                  <input
                    id="conversion-rate"
                    type="number"
                    min={0}
                    max={100}
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                    className="w-20 px-2.5 py-1 text-right text-base font-bold bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="text-gray-500 text-sm font-semibold">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                aria-label="Conversion rate slider"
              />
              <div className="flex justify-between text-xs text-gray-400 font-medium">
                <span>1%</span>
                <span>10% (Typical)</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Toggle Advanced Inputs */}
            <div className="pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
              >
                <span>{showAdvanced ? 'Hide advanced calibration' : 'Show advanced calibration (operating days, prospect share)'}</span>
                {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showAdvanced && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <div>
                    <label htmlFor="operating-days" className="block text-xs font-semibold text-gray-700 mb-1">
                      Operating days / month
                    </label>
                    <input
                      id="operating-days"
                      type="number"
                      min={1}
                      max={31}
                      value={operatingDays}
                      onChange={(e) => setOperatingDays(Math.max(1, Math.min(31, Number(e.target.value) || 30)))}
                      className="w-full px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-xl text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="prospect-share" className="block text-xs font-semibold text-gray-700 mb-1">
                      Share of missed calls that are prospects (%)
                    </label>
                    <input
                      id="prospect-share"
                      type="number"
                      min={0}
                      max={100}
                      value={prospectShare}
                      onChange={(e) => setProspectShare(Math.max(0, Math.min(100, Number(e.target.value) || 100)))}
                      className="w-full px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-xl text-gray-900"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Result Output Column - Deep Navy Accent Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1a2957] to-[#0f1d40] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-cyan-300 flex items-center gap-1.5 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Revenue Opportunity Exposed
              </span>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-blue-200 font-medium">Estimated Monthly Revenue Opportunity</div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-300 tracking-tight">
                    {formatCurrency(monthlyOpportunity)}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-blue-200 font-medium">Estimated Annual Revenue Opportunity</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {formatCurrency(annualOpportunity)}
                  </div>
                </div>
              </div>

              {/* Dynamic Explanation from brief */}
              <div className="mt-5 p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-blue-100 leading-relaxed">
                If your business misses {missedCallsPerDay} calls per day, has a {formatCurrency(averageOrderValue)} average order value and converts {conversionRate}% of qualified callers, the estimated monthly revenue opportunity represented by those missed calls is {formatCurrency(monthlyOpportunity)}. Your actual results may vary.
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-white">See How Much You Could Recover With AI</h3>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Button asChild size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md">
                  <Link href="/contact#strategy-call" className="inline-flex items-center justify-center gap-2">
                    Build My AI Agent
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-xl">
                  <Link href="/contact">
                    Talk to Sownmark
                  </Link>
                </Button>
              </div>

              <p className="text-[11px] text-blue-200 leading-normal pt-1">
                <strong>Disclaimer:</strong> This calculator provides an illustrative estimate based on the assumptions you enter. Actual revenue impact varies based on lead quality, intent, close rate, seasonality, business type and other factors.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting AEO / Q&A Block Below Calculator */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-[#1a2957] mb-2">How much revenue do missed calls cost a business?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              It depends on call volume, order value and conversion rate. The calculator above shows an illustrative range based on your operational variables.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-[#1a2957] mb-2">Can AI agents answer business calls?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Yes. A voice agent can answer, follow approved scripts, qualify callers and book or transfer to human staff seamlessly.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-[#1a2957] mb-2">Can AI recover missed leads?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              It can respond faster and follow up immediately via voice or two-way SMS, which can help recover opportunities. It does not guarantee a sale.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-[#1a2957] mb-2">Can AI schedule appointments?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Yes, based on your availability rules, buffer times, service lengths, and calendar integrations with zero double-booking.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm md:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-bold text-[#1a2957] mb-2">How much revenue can an AI voice agent recover?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              There is no reliable universal figure. It depends on your lead response speed, qualified lead ratio, customer lifetime value, and your sales process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
