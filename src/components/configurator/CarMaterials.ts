import { useMemo } from 'react';
import * as THREE from 'three';

// ─── Paint color map (option ID → hex) ───────────────────
const PAINT_COLORS: Record<string, string> = {
  'rosso-corsa': '#C0392B',
  'verde-mantis': '#27AE60',
  'giallo-orion': '#F1C40F',
  'bianco-monocerus': '#ECF0F1',
  'nero-nemesis': '#1C1C1C',
  'blu-nethuns': '#2980B9',
  'grigio-telesto': '#7F8C8D',
  'arancio-borealis': '#E67E22',
};

// ─── Wheel rim finish map ────────────────────────────────
const WHEEL_FINISHES: Record<string, { color: string; metalness: number; roughness: number }> = {
  '20-leirion-silver': { color: '#C0C0C0', metalness: 1, roughness: 0.3 },
  '20-leirion-black': { color: '#1a1a1a', metalness: 0.9, roughness: 0.2 },
  '21-taigete-diamond': { color: '#E8E8E8', metalness: 1, roughness: 0.15 },
  '21-taigete-titanium': { color: '#8B8682', metalness: 0.95, roughness: 0.25 },
  '22-nath-carbon': { color: '#2C2C2C', metalness: 0.3, roughness: 0.6 },
};

// ─── Window tint map ─────────────────────────────────────
const TINT_LEVELS: Record<string, { opacity: number; color: string }> = {
  'clear': { opacity: 0.3, color: '#888899' },
  'light-tint': { opacity: 0.45, color: '#555566' },
  'medium-tint': { opacity: 0.6, color: '#333344' },
  'dark-tint': { opacity: 0.75, color: '#1a1a2a' },
  'limo-tint': { opacity: 0.9, color: '#050510' },
};

// ─── Upholstery color map ────────────────────────────────
const UPHOLSTERY_COLORS: Record<string, string> = {
  'nero-ade': '#1A1A1A',
  'rosso-alala': '#8B0000',
  'bianco-leda': '#F5F5F5',
  'blu-delphinus': '#1B3A5C',
  'alcantara-sport': '#2C2C2C',
  'two-tone-red': '#5C0000',
};

// ─── Dashboard trim map ──────────────────────────────────
const DASHBOARD_FINISHES: Record<string, { color: string; metalness: number; roughness: number }> = {
  'piano-black': { color: '#0a0a0a', metalness: 0.5, roughness: 0.05 },
  'carbon-dash': { color: '#1a1a1a', metalness: 0.3, roughness: 0.4 },
  'brushed-alu': { color: '#B0B0B0', metalness: 0.95, roughness: 0.35 },
  'forged-carbon': { color: '#222222', metalness: 0.4, roughness: 0.5 },
};

// ─── Ambient lighting color map ──────────────────────────
const AMBIENT_COLORS: Record<string, string> = {
  'white-ambient': '#ffffff',
  'red-ambient': '#ff2020',
  'blue-ambient': '#2060ff',
  'green-ambient': '#20ff60',
  'orange-ambient': '#ff8020',
  'multi-dynamic': '#ff40ff',
};

// ─── Brake caliper color based on performance ────────────
const PERF_CALIPER_COLORS: Record<string, string> = {
  'standard-perf': '#333333',
  'sport-exhaust': '#CC0000',
  'track-setup': '#FFD700',
  'ultimate-perf': '#FF4500',
};

export interface CarMaterialSet {
  body: THREE.MeshPhysicalMaterial;
  glass: THREE.MeshPhysicalMaterial;
  rim: THREE.MeshStandardMaterial;
  leather: THREE.MeshStandardMaterial;
  dashboard: THREE.MeshStandardMaterial;
  ambientColor: string;
  caliperColor: string;
}

export function useCarMaterials(selections: Record<string, string>): CarMaterialSet {
  const paintId = selections.paint || 'rosso-corsa';
  const wheelId = selections.wheels || '20-leirion-silver';
  const tintId = selections['window-tint'] || 'clear';
  const upholsteryId = selections.upholstery || 'nero-ade';
  const dashboardId = selections.dashboard || 'piano-black';
  const ambientId = selections.ambient || 'white-ambient';
  const perfId = selections.performance || 'standard-perf';

  const body = useMemo(() => {
    const color = PAINT_COLORS[paintId] || '#C0392B';
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      envMapIntensity: 1.0,
    });
  }, [paintId]);

  const glass = useMemo(() => {
    const tint = TINT_LEVELS[tintId] || TINT_LEVELS['clear'];
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(tint.color),
      metalness: 0.1,
      roughness: 0.0,
      transmission: 1 - tint.opacity,
      transparent: true,
      opacity: tint.opacity,
      envMapIntensity: 0.5,
      side: THREE.DoubleSide,
    });
  }, [tintId]);

  const rim = useMemo(() => {
    const finish = WHEEL_FINISHES[wheelId] || WHEEL_FINISHES['20-leirion-silver'];
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(finish.color),
      metalness: finish.metalness,
      roughness: finish.roughness,
      envMapIntensity: 1.0,
    });
  }, [wheelId]);

  const leather = useMemo(() => {
    const color = UPHOLSTERY_COLORS[upholsteryId] || '#1A1A1A';
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.0,
      roughness: 0.7,
    });
  }, [upholsteryId]);

  const dashboard = useMemo(() => {
    const finish = DASHBOARD_FINISHES[dashboardId] || DASHBOARD_FINISHES['piano-black'];
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(finish.color),
      metalness: finish.metalness,
      roughness: finish.roughness,
    });
  }, [dashboardId]);

  const ambientColor = AMBIENT_COLORS[ambientId] || '#ffffff';
  const caliperColor = PERF_CALIPER_COLORS[perfId] || '#333333';

  return { body, glass, rim, leather, dashboard, ambientColor, caliperColor };
}
