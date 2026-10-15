'use client';

import React, { useState, useEffect } from 'react';
import type { Project } from '@/types';
import {
  LuShieldCheck as ShieldCheck,
  LuShoppingBag as ShoppingBag,
  LuPlane as Plane,
  LuHotel as Hotel,
  LuSmartphone as Smartphone,
  LuCreditCard as CreditCard,
  LuRadio as Radio,
  LuBell as Bell,
  LuDroplets as Droplets,
  LuThermometer as Thermometer,
  LuWind as Wind,
  LuPackage as Package,
  LuFileCheck as FileCheck,
  LuStore as Store,
  LuReceiptText as ReceiptText,
  LuTag as Tag,
  LuSlidersHorizontal as SlidersHorizontal,
  LuTruck as Truck,
  LuArrowUpDown as ArrowUpDown,
  LuCheck as Check,
  LuPlus as Plus,
  LuSearch as Search,
} from 'react-icons/lu';

interface ProjectDetailInteractiveProps {
  project: Project;
}

type MenuKey = 'products' | 'promocode' | 'grn' | 'suppliers' | 'pos' | 'stores';

export const ProjectDetailInteractive: React.FC<ProjectDetailInteractiveProps> = ({ project }) => {
  // ================= SEEDLING STATE =================
  const [temperature, setTemperature] = useState(24.4);
  const [humidity, setHumidity] = useState(58.2);
  const [soilMoisture, setSoilMoisture] = useState(64.1);
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    if (project.id !== 'seedling') return;
    const interval = setInterval(() => {
      setTemperature((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setHumidity((prev) => +(prev + (Math.random() * 0.6 - 0.3)).toFixed(1));
      setSoilMoisture((prev) => +(prev + (Math.random() * 0.5 - 0.25)).toFixed(1));
    }, 2800);
    return () => clearInterval(interval);
  }, [project.id]);

  // ================= MPOS STATE =================
  const [activeMenu, setActiveMenu] = useState<MenuKey>('products');
  const [productSort, setProductSort] = useState<'stock' | 'price' | 'sku'>('stock');

  const menuList: { id: MenuKey; label: string; icon: React.ElementType; tag: string }[] = [
    { id: 'products', label: 'Products', icon: Package, tag: 'List, Sort & Stock' },
    { id: 'promocode', label: 'Promocode', icon: Tag, tag: 'Discount Rules' },
    { id: 'grn', label: 'GRN Flow', icon: FileCheck, tag: 'Inbound Auditing' },
    { id: 'suppliers', label: 'Suppliers', icon: Truck, tag: 'Vendor Profiles' },
    { id: 'pos', label: 'POS Config', icon: SlidersHorizontal, tag: 'Customizations' },
    { id: 'stores', label: 'Store Mgmt', icon: Store, tag: 'Multi-Outlet Sync' }
  ];

  const sampleProducts = [
    { sku: 'SKU #4092', name: 'Barcode Scanner Pro', category: 'Hardware', stock: 42, price: 129, status: 'In Stock' },
    { sku: 'SKU #8812', name: 'Thermal Paper 80mm', category: 'Consumables', stock: 140, price: 24, status: 'In Stock' },
    { sku: 'SKU #1105', name: 'Wireless Stand Base', category: 'Accessories', stock: 4, price: 89, status: 'Low Stock' },
  ].sort((a, b) => {
    if (productSort === 'stock') return b.stock - a.stock;
    if (productSort === 'price') return b.price - a.price;
    return a.sku.localeCompare(b.sku);
  });

  // Render respective interactive architecture view
  switch (project.id) {
    case 'shoppingate':
      return (
        <div className="border border-[var(--border-medium)] rounded-lg bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4 mb-6 flex-wrap gap-2">
            <div>
              <span className="mono-label text-xs text-[var(--accent-vermilion)] block mb-1">
                SYSTEM TOPOLOGY // LIVE SPECIFICATION
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Microservices Mesh & Transaction Bus
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-green)] font-semibold bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20">
              <ShieldCheck size={14} />
              JWT GATEWAY ENFORCED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag size={18} className="text-[var(--accent-vermilion)]" />
                <span className="text-sm font-bold text-[var(--text-primary)]">E-Commerce</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Catalog indexing, multi-merchant inventory reservation, and dynamic cart sessions.
              </p>
              <span className="mono-tag text-[0.65rem] bg-white">REST / JSON</span>
            </div>

            <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <div className="flex items-center gap-2 mb-2">
                <Plane size={18} className="text-[var(--accent-blue)]" />
                <span className="text-sm font-bold text-[var(--text-primary)]">Flights Booking</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Real-time external airline GDS queries, fare locking, and automated PNR issuance.
              </p>
              <span className="mono-tag text-[0.65rem] bg-white">Async Pipeline</span>
            </div>

            <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <div className="flex items-center gap-2 mb-2">
                <Hotel size={18} className="text-[var(--accent-amber)]" />
                <span className="text-sm font-bold text-[var(--text-primary)]">Hotel Engine</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Room availability caching, dynamic pricing tariffs, and hotel confirmation webhooks.
              </p>
              <span className="mono-tag text-[0.65rem] bg-white">Microservice Node</span>
            </div>

            <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone size={18} className="text-[var(--accent-green)]" />
                <span className="text-sm font-bold text-[var(--text-primary)]">eSIM Fulfillment</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Automated telco provisioning, eSIM QR code rendering, and gift voucher delivery.
              </p>
              <span className="mono-tag text-[0.65rem] bg-white">Instant Fulfillment</span>
            </div>
          </div>

          <div className="p-5 rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="mono-label text-[var(--accent-vermilion)] text-xs block mb-1">
                CENTRAL PERSISTENCE LAYER:
              </span>
              <span className="text-base font-bold text-[var(--text-primary)]">
                PostgreSQL Relational Storage + Express.js API Gateway Bus
              </span>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Guarantees ACID transactions across combined multi-service checkout workflows.
              </p>
            </div>
            <CreditCard size={28} className="text-[var(--accent-vermilion)] shrink-0" />
          </div>
        </div>
      );

    case 'pmpeople':
      return (
        <div className="border border-[var(--border-medium)] rounded-lg bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4 mb-6 flex-wrap gap-2">
            <div>
              <span className="mono-label text-xs text-[var(--accent-blue)] block mb-1">
                DECOUPLED ECOSYSTEM // ARCHITECTURE
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Headless CMS + Role-Based Administration
              </h4>
            </div>
            <span className="mono-tag text-xs bg-blue-500/10 text-[var(--accent-blue)] border-blue-500/25">
              SSR & STATIC GENERATION (ISR)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 text-center">
            <div className="p-5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <span className="mono-label text-xs text-[var(--text-tertiary)] block mb-2">FRONTEND CLIENT</span>
              <span className="font-display text-xl font-bold text-[var(--text-primary)] block mb-2">Next.js App</span>
              <p className="text-xs text-[var(--text-secondary)]">Server-side rendered marketing pages and dynamic client dashboards.</p>
            </div>

            <div className="p-5 rounded-md bg-white border border-[var(--border-strong)] flex flex-col justify-center items-center">
              <span className="mono-label text-xs text-[var(--accent-blue)] font-bold block mb-1">DATA BRIDGE</span>
              <span className="font-mono text-sm font-bold text-[var(--text-primary)] block">GraphQL + REST APIs</span>
              <span className="text-xs text-[var(--text-tertiary)] mt-1">Schema-validated queries</span>
            </div>

            <div className="p-5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <span className="mono-label text-xs text-[var(--text-tertiary)] block mb-2">HEADLESS BACKEND</span>
              <span className="font-display text-xl font-bold text-[var(--text-primary)] block mb-2">WordPress CMS</span>
              <p className="text-xs text-[var(--text-secondary)]">Content modeling, media libraries, and editorial versioning.</p>
            </div>
          </div>

          <div className="p-5 rounded-md bg-[#FAF9F5] border border-[var(--border-medium)]">
            <span className="mono-label text-xs text-[var(--text-primary)] font-bold block mb-3">
              ROLE-BASED GOVERNANCE (RBAC) MODEL
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                <span className="text-xs font-bold text-[var(--text-primary)] block">Organization Admins</span>
                <span className="text-[0.72rem] text-[var(--text-tertiary)] block mt-0.5">Billing, seats, security settings</span>
              </div>
              <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                <span className="text-xs font-bold text-[var(--text-primary)] block">Project Managers</span>
                <span className="text-[0.72rem] text-[var(--text-tertiary)] block mt-0.5">Sprint velocity, boards, budget controls</span>
              </div>
              <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                <span className="text-xs font-bold text-[var(--text-primary)] block">Community Members</span>
                <span className="text-[0.72rem] text-[var(--text-tertiary)] block mt-0.5">Forum feeds, events, certifications</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'seedling':
      return (
        <div className="border border-[var(--border-medium)] rounded-lg bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4 mb-6 flex-wrap gap-2">
            <div>
              <span className="mono-label text-xs text-[var(--accent-green)] block mb-1">
                INTERACTIVE TELEMETRY LAB
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Live Sensor Node Simulator
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span className="mono-label text-xs">WEBSOCKET: LIVE 50ms</span>
            </div>
          </div>

          {/* Telemetry Readout Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded-md p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Thermometer size={16} className="text-[var(--accent-vermilion)]" />
                <span className="mono-label text-xs">TEMPERATURE</span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                {temperature}°C
              </div>
              <span className="text-xs text-[var(--text-tertiary)] block mt-1">Normal Range (18–30°C)</span>
            </div>

            <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded-md p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Wind size={16} className="text-[var(--accent-blue)]" />
                <span className="mono-label text-xs">HUMIDITY</span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                {humidity}%
              </div>
              <span className="text-xs text-[var(--text-tertiary)] block mt-1">Optimal Relative (45–70%)</span>
            </div>

            <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded-md p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Droplets size={16} className="text-[var(--accent-green)]" />
                <span className="mono-label text-xs">SOIL MOISTURE</span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                {soilMoisture}%
              </div>
              <span className="text-xs text-[var(--text-tertiary)] block mt-1">Hydrated Root Zone</span>
            </div>
          </div>

          {/* Alert Simulation Box */}
          <div className="p-5 rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="mono-label text-xs text-[var(--accent-green)] block mb-1">
                AUTOMATED DISPATCH ENGINE
              </span>
              <span className="text-sm font-bold text-[var(--text-primary)] block">
                Firebase Cloud Messaging (FCM) Emergency Dispatcher
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                {isAlertActive ? '⚠️ Alert state simulated: Push notifications dispatched!' : 'Trigger threshold simulator to verify instant push notification routing.'}
              </span>
            </div>

            <button
              onClick={() => {
                setIsAlertActive(true);
                setTimeout(() => setIsAlertActive(false), 3500);
              }}
              className="btn btn-secondary text-xs py-2 px-4 rounded"
            >
              <Bell size={14} className={isAlertActive ? 'text-[var(--accent-vermilion)] animate-bounce' : ''} />
              <span>{isAlertActive ? 'Alert Dispatched!' : 'Simulate Threshold Alert'}</span>
            </button>
          </div>
        </div>
      );

    case 'mpos':
      return (
        <div className="border border-[var(--border-medium)] rounded-lg bg-white p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4 mb-6 flex-wrap gap-2">
            <div>
              <span className="mono-label text-xs text-[var(--accent-amber)] block mb-1">
                INTERACTIVE ADMINISTRATIVE WORKSPACE
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                6-in-1 Point-of-Sale Operational Matrix
              </h4>
            </div>
            <span className="mono-tag text-xs bg-amber-500/10 text-[var(--accent-amber)] border-amber-500/25">
              MULTI-STORE SYNCHRONIZATION
            </span>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {menuList.map((m) => {
              const Icon = m.icon;
              const isSelected = activeMenu === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMenu(m.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--text-primary)] text-white shadow-xs font-semibold'
                      : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-light)]'
                  }`}
                >
                  <Icon size={14} />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Workspace View */}
          <div className="bg-[#FAF9F5] border border-[var(--border-medium)] rounded-md p-5">
            {activeMenu === 'products' && (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-light)] mb-4 flex-wrap gap-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">Inventory & Catalog Matrix</span>
                  <div className="flex items-center gap-2">
                    <span className="mono-label text-xs">Sort:</span>
                    <button
                      onClick={() => setProductSort('stock')}
                      className={`text-xs px-2.5 py-1 rounded font-mono ${productSort === 'stock' ? 'bg-white font-bold border border-[var(--border-strong)]' : 'text-[var(--text-tertiary)]'}`}
                    >
                      Stock
                    </button>
                    <button
                      onClick={() => setProductSort('price')}
                      className={`text-xs px-2.5 py-1 rounded font-mono ${productSort === 'price' ? 'bg-white font-bold border border-[var(--border-strong)]' : 'text-[var(--text-tertiary)]'}`}
                    >
                      Price
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {sampleProducts.map((p) => (
                    <div key={p.sku} className="p-3 bg-white rounded border border-[var(--border-light)] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[var(--text-primary)] block">{p.name}</span>
                        <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">{p.sku} • {p.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[var(--text-primary)] block">${p.price}</span>
                        <span className={`mono-label text-[0.65rem] ${p.stock < 10 ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-green)]'}`}>
                          {p.stock} in stock
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMenu === 'promocode' && (
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)] block mb-1">Deterministic Promocode Rule Evaluator</span>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Hierarchical priority rules prevent discounting conflicts at cash registers.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                    <span className="font-mono font-bold text-[var(--accent-amber)] block">VIPSTORE25</span>
                    <span className="text-[var(--text-secondary)] mt-0.5 block">25% Store-wide cart deduction over $150</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                    <span className="font-mono font-bold text-[var(--accent-amber)] block">SCANNER10</span>
                    <span className="text-[var(--text-secondary)] mt-0.5 block">10% Hardware promotion on Barcode Readers</span>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === 'grn' && (
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)] block mb-1">Goods Received Note (GRN) Inbound Reconciliation</span>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Digitized intake workflow cross-referencing supplier shipping slips against purchase orders.</p>
                <div className="p-3 bg-white rounded border border-[var(--border-light)] text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[var(--text-primary)] block">PO #9824 - Hardware Batch Inbound</span>
                    <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">Supplier: Global Tech Logistics</span>
                  </div>
                  <span className="mono-tag text-[0.65rem] bg-green-500/10 text-[var(--accent-green)]">VERIFIED 100%</span>
                </div>
              </div>
            )}

            {activeMenu === 'suppliers' && (
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)] block mb-1">Vendor & Supplier Ledger Management</span>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Tracks procurement lead times, payment terms, and vendor performance history.</p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white rounded border border-[var(--border-light)] flex items-center justify-between">
                    <span className="font-bold text-[var(--text-primary)]">Apex Wholesale Hardware</span>
                    <span className="mono-label text-[0.65rem] text-[var(--text-secondary)]">Lead Time: 48h • Net-30</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[var(--border-light)] flex items-center justify-between">
                    <span className="font-bold text-[var(--text-primary)]">Pacific Paper & Supplies</span>
                    <span className="mono-label text-[0.65rem] text-[var(--text-secondary)]">Lead Time: 24h • Net-15</span>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === 'pos' && (
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)] block mb-1">Terminal Hardware & Register Customization</span>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Configures thermal receipt headers, barcode reader baud rates, and cash drawer triggers.</p>
                <div className="p-3 bg-white rounded border border-[var(--border-light)] text-xs font-mono text-[var(--text-secondary)]">
                  REGISTER_ID: 01 // CASH_DRAWER: AUTO_PULSE // RECEIPT: 80MM_THERMAL
                </div>
              </div>
            )}

            {activeMenu === 'stores' && (
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)] block mb-1">Multi-Store Synchronization Engine</span>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Real-time inventory replication across multiple physical retail branches.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                    <span className="font-bold text-[var(--text-primary)] block">Central Downtown</span>
                    <span className="mono-label text-[0.65rem] text-[var(--accent-green)]">Live Synced</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                    <span className="font-bold text-[var(--text-primary)] block">Westside Mall</span>
                    <span className="mono-label text-[0.65rem] text-[var(--accent-green)]">Live Synced</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-[var(--border-light)]">
                    <span className="font-bold text-[var(--text-primary)] block">Airport Terminal</span>
                    <span className="mono-label text-[0.65rem] text-[var(--accent-green)]">Live Synced</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );

    default:
      return null;
  }
};
