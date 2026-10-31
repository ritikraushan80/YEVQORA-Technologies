'use client';

import React from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Server, Code, Cloud, Lock, Layout, Headphones } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectContact: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectContact,
}) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'server':
        return <Server className="w-6 h-6 text-indigo-500" />;
      case 'code':
        return <Code className="w-6 h-6 text-blue-500" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'shield':
        return <Lock className="w-6 h-6 text-purple-500" />;
      case 'layout':
        return <Layout className="w-6 h-6 text-amber-500" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 text-emerald-500" />;
      default:
        return <Shield className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {renderIcon(service.iconName)}
          </div>
          <div>
            <div className="inline-block px-2.5 py-0.5 mb-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-md">
              {service.category}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          {service.longDescription || service.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables & Specs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">SLA Commitment</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">99.99% Uptime Guarantee</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectContact();
            }}
            className="py-2.5 px-5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
