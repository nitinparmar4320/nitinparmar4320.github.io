'use client';

import React, { useState } from 'react';
import type { Project } from '@/types';
import {
  LuCheck as Check,
  LuReceiptText as ReceiptText,
  LuFileCheck as FileCheck,
  LuTag as Tag,
  LuShoppingCart as ShoppingCart,
  LuSlidersHorizontal as SlidersHorizontal,
  LuPackage as Package,
  LuTruck as Truck,
  LuStore as Store,
  LuArrowUpDown as ArrowUpDown,
  LuPlus as Plus,
  LuSearch as Search,
  LuBuilding2 as Building2,
} from 'react-icons/lu';

interface ProjectCardMposProps {
  project: Project;
}

type MenuKey = 'products' | 'promocode' | 'grn' | 'suppliers' | 'pos' | 'stores';

export const ProjectCardMpos: React.FC<ProjectCardMposProps> = ({ project }) => {
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

  return (
    <article
      id={project.id}
      className="bg-white border border-[var(--border-medium)] rounded-md overflow-hidden shadow-[var(--shadow-card)] mb-12 lg:mb-16 relative"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-5 sm:px-8 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-amber)] leading-none">
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-amber)] bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/25">
            <ReceiptText size={12} />
            6 OPERATIONAL MENUS INTEGRATED
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.1fr)_minmax(320px,1.15fr)]">
        {/* Left Column: Interactive 6-Menu Management Workspace */}
        <div className="bg-[#FAF9F5] p-6 sm:p-10 lg:border-r border-[var(--border-light)] flex flex-col justify-center">
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-5 sm:p-6 shadow-[var(--shadow-subtle)]">
            
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-4">
              <span className="mono-label text-xs text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                <Building2 size={13} className="text-[var(--accent-amber)]" />
                POS ADMINISTRATIVE SUITE
              </span>
              <span className="font-mono text-xs text-[var(--accent-green)] font-semibold">
                6 MENUS ACTIVE
              </span>
            </div>

            {/* 6 Core Managed Menus Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {menuList.map((menu) => {
                const Icon = menu.icon;
                const isActive = activeMenu === menu.id;
                return (
                  <button
                    key={menu.id}
                    onClick={() => setActiveMenu(menu.id)}
                    className={`p-2.5 rounded border text-left cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[var(--bg-subtle)] border-[var(--accent-amber)] shadow-xs'
                        : 'bg-white border-[var(--border-light)] hover:border-[var(--border-medium)]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon
                        size={13}
                        className={isActive ? 'text-[var(--accent-amber)]' : 'text-[var(--text-secondary)]'}
                      />
                      <span className={`text-xs font-semibold ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {menu.label}
                      </span>
                    </div>
                    <span className="text-[0.62rem] text-[var(--text-tertiary)] block font-mono">
                      {menu.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Workspace View */}
            {activeMenu === 'products' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-3.5 rounded border border-[var(--border-light)]">
                  {/* Action Bar: Create & Sort Controls */}
                  <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-mono">
                      <Search size={12} className="text-[var(--text-tertiary)]" />
                      <span>1,420 Items</span>
                    </div>

                    <div className="flex items-center gap-1 text-[0.68rem] font-mono">
                      <span className="text-[var(--text-tertiary)] flex items-center gap-1 mr-1">
                        <ArrowUpDown size={11} />
                        SORT:
                      </span>
                      <button
                        onClick={() => setProductSort('stock')}
                        className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                          productSort === 'stock'
                            ? 'bg-white font-bold text-[var(--accent-amber)] border border-[var(--border-medium)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Stock
                      </button>
                      <button
                        onClick={() => setProductSort('price')}
                        className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                          productSort === 'price'
                            ? 'bg-white font-bold text-[var(--accent-amber)] border border-[var(--border-medium)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        Price
                      </button>
                      <button
                        onClick={() => setProductSort('sku')}
                        className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                          productSort === 'sku'
                            ? 'bg-white font-bold text-[var(--accent-amber)] border border-[var(--border-medium)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        SKU
                      </button>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[0.68rem] font-mono text-[var(--accent-amber)] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <Plus size={11} />
                      CREATE SKU
                    </span>
                  </div>

                  {/* Product Rows with Stocks */}
                  <div className="space-y-1.5">
                    {sampleProducts.map((item) => (
                      <div
                        key={item.sku}
                        className="bg-white border border-[var(--border-light)] rounded p-2 text-xs font-mono flex items-center justify-between"
                      >
                        <div>
                          <div className="font-semibold text-[var(--text-primary)]">
                            {item.name}
                          </div>
                          <div className="text-[0.65rem] text-[var(--text-tertiary)]">
                            {item.sku} • {item.category} • ${item.price}
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-[0.68rem] font-semibold px-2 py-0.5 rounded ${
                              item.status === 'Low Stock'
                                ? 'bg-amber-500/15 text-[var(--accent-amber)]'
                                : 'bg-green-700/10 text-[var(--accent-green)]'
                            }`}
                          >
                            {item.stock} in stock
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Product listing, sorting & stock tracking</span>
                  <span className="text-[var(--accent-amber)] font-medium">Synced: 3 Outlets</span>
                </div>
              </div>
            )}

            {activeMenu === 'promocode' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      ACTIVE PROMOCODE ENGINE
                    </span>
                    <span className="text-[0.68rem] font-mono text-[var(--accent-green)] font-semibold">
                      3 RULES ACTIVE
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-mono">
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">CODE: FLASH25</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">25% off VIP tier carts over $50</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Auto-Valid</span>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">TIER: SEASONAL15</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">15% off basket total &gt; $100</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Cart promotion matrix evaluated in real-time</span>
                  <span className="text-[var(--accent-amber)] font-medium">Cashier Latency &lt; 15ms</span>
                </div>
              </div>
            )}

            {activeMenu === 'grn' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      DOC ID: GRN-2026-0894
                    </span>
                    <span className="font-mono text-xs text-[var(--accent-green)] font-semibold">
                      STATUS: VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                    <div>
                      <span className="mono-label text-[0.62rem] block">PO REF</span>
                      <div className="font-semibold text-[var(--text-primary)]">PO-99412</div>
                    </div>
                    <div>
                      <span className="mono-label text-[0.62rem] block">SUPPLIER</span>
                      <div className="font-semibold text-[var(--text-primary)]">Apex Retail Dist.</div>
                    </div>
                    <div>
                      <span className="mono-label text-[0.62rem] block">ITEMS</span>
                      <div className="font-semibold text-[var(--text-primary)]">142 Checked</div>
                    </div>
                  </div>

                  <div className="bg-white border border-[var(--border-light)] rounded p-2.5 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between pb-1.5 border-b border-[var(--border-light)]">
                      <span>SKU #4092 Barcode Scanner</span>
                      <span className="text-[var(--accent-green)] font-medium">+20 Rcvd</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SKU #8812 Thermal Paper 80mm</span>
                      <span className="text-[var(--accent-green)] font-medium">+100 Rcvd</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Digitized goods receipt auditing against PO</span>
                  <span className="text-[var(--accent-amber)] font-medium">Discrepancy: 0</span>
                </div>
              </div>
            )}

            {activeMenu === 'suppliers' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      SUPPLIER DIRECTORY & RECONCILIATION
                    </span>
                    <Truck size={13} className="text-[var(--accent-amber)]" />
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-mono">
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Apex Retail Dist. Co.</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">Hardware & Terminals • 4 Active POs</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">99.4% On-Time</span>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Global POS Supplies Ltd.</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">Rolls & Barcode Labels • Net-30</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Vendor management integrated with PO workflows</span>
                  <span className="text-[var(--accent-amber)] font-medium">Direct GRN Link</span>
                </div>
              </div>
            )}

            {activeMenu === 'pos' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      POS TERMINAL CUSTOMIZATIONS
                    </span>
                    <SlidersHorizontal size={13} className="text-[var(--accent-amber)]" />
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-mono">
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Register Keypad Layout</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">4x4 Touch Grid with Category Fast-Keys</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Deployed</span>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Receipt Format Builder</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">Custom Tax Reg, Store Barcode & Loyalty QR</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Centralized terminal configurations</span>
                  <span className="text-[var(--accent-amber)] font-medium">14 Registers Configured</span>
                </div>
              </div>
            )}

            {activeMenu === 'stores' && (
              <div className="space-y-3">
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      MULTI-OUTLET STORE NETWORK
                    </span>
                    <Store size={13} className="text-[var(--accent-amber)]" />
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-mono">
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Store #01 - Downtown Flagship</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">8 Active POS Terminals • Inventory Synced</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Online</span>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Store #02 - Westside Outlet</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">4 Active POS Terminals • Inventory Synced</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Online</span>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)] flex justify-between items-center">
                      <div>
                        <strong className="text-[var(--text-primary)]">Store #03 - Airport Kiosk</strong>
                        <div className="text-[0.65rem] text-[var(--text-secondary)]">2 Active POS Terminals • Inventory Synced</div>
                      </div>
                      <span className="text-[var(--accent-green)] font-medium">Online</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Store network telemetry & pricing distribution</span>
                  <span className="text-[var(--accent-amber)] font-medium">Zero Variance</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right Column: Context, Role, and Technical Details */}
        <div className="p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 border-[var(--border-light)]">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
              {project.description}
            </p>

            {/* Architecture Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[var(--border-light)] mb-6">
              <div>
                <span className="mono-label text-xs block mb-1">
                  CORE FOCUS:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' Multi-Store POS & Inventory Logistics'}
                </span>
              </div>
              <div>
                <span className="mono-label text-xs block mb-1">
                  MANAGED MODULES:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' 6 Core Administrative Menus'}
                </span>
              </div>
            </div>

            {/* Contributions List */}
            <div className="mb-6">
              <span className="mono-label block text-[var(--text-primary)] mb-3 font-semibold text-xs tracking-wider">
                KEY TECHNICAL CONTRIBUTIONS
              </span>
              <ul className="space-y-3">
                {project.contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] text-[var(--accent-amber)] shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Badges & Metric */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {project.resumeOutcome && (
              <div className="p-3.5 sm:p-4 bg-[var(--bg-subtle)] rounded border border-[var(--border-medium)] border-l-4 border-l-[var(--accent-amber)]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-amber)]">
                    {project.resumeOutcome.metric}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {project.resumeOutcome.label}
                  </span>
                </div>
                <p className="font-mono text-xs text-[var(--text-tertiary)] mt-1">
                  * {project.resumeOutcome.disclaimer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
