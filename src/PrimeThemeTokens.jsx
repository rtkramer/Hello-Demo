import React from 'react';

const themeVars = [
  { label: 'Primary Color', var: '--primary-color' },
  { label: 'Primary 100', var: '--primary-100' },
  { label: 'Primary 200', var: '--primary-200' },
  { label: 'Primary 300', var: '--primary-300' },
  { label: 'Primary 400', var: '--primary-400' },
  { label: 'Primary 500', var: '--primary-500' },
  { label: 'Primary 600', var: '--primary-600' },
  { label: 'Primary 700', var: '--primary-700' },
  { label: 'Primary 800', var: '--primary-800' },
  { label: 'Primary 900', var: '--primary-900' },
  { label: 'Primary Color Text', var: '--primary-color-text' },
  { label: 'Surface Ground', var: '--surface-ground' },
  { label: 'Surface Card', var: '--surface-card' },
  { label: 'Surface A', var: '--surface-a' },
  { label: 'Surface B', var: '--surface-b' },
  { label: 'Surface C', var: '--surface-c' },
  { label: 'Surface D', var: '--surface-d' },
  { label: 'Surface E', var: '--surface-e' },
  { label: 'Surface F', var: '--surface-f' },
  { label: 'Text Color', var: '--text-color' },
  { label: 'Text Color Secondary', var: '--text-color-secondary' },
  { label: 'Border Radius', var: '--border-radius' },
  { label: 'Font Family', var: '--font-family' },
  { label: 'Font Size', var: '--font-size' },
  { label: 'Font Weight', var: '--font-weight' },
  { label: 'Line Height', var: '--line-height' },
  { label: 'Spacing', var: '--spacing' },
  { label: 'Shadow 1', var: '--shadow-1' },
  { label: 'Shadow 2', var: '--shadow-2' },
  { label: 'Shadow 3', var: '--shadow-3' },
];

const colorVars = [
  '--primary-color', '--primary-100', '--primary-200', '--primary-300', '--primary-400', '--primary-500', '--primary-600', '--primary-700', '--primary-800', '--primary-900',
  '--blue-500', '--green-500', '--yellow-500', '--cyan-500', '--pink-500', '--indigo-500', '--teal-500', '--orange-500', '--bluegray-500', '--purple-500', '--red-500',
];

export default function PrimeThemeTokens() {
  // SSR-safe: only access getComputedStyle in effect or after mount
  const [vars, setVars] = React.useState({});
  React.useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const allVars = {};
    [...themeVars, ...colorVars.map(v => ({ var: v }))].forEach(({ var: v }) => {
      allVars[v] = style.getPropertyValue(v);
    });
    setVars(allVars);
  }, []);

  return (
    <div style={{ padding: '2rem', color: 'var(--text-color)' }}>
      <h3>PrimeReact Theme Tokens</h3>
      <section style={{ marginBottom: '2rem' }}>
        <h4>Colors</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {colorVars.map((v) => (
            <div key={v} style={{ width: 110, textAlign: 'center' }}>
              <div style={{ background: `var(${v})`, height: 40, borderRadius: 6, border: '1px solid #ccc', marginBottom: 4 }} />
              <div style={{ fontSize: 12 }}>{v}</div>
              <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{vars[v] || <span style={{ color: '#bbb' }}>n/a</span>}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <h4>Other Theme Tokens</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}>
            <tbody>
              {themeVars.map((t) => (
                <tr key={t.var}>
                  <td style={{ padding: 4, fontWeight: 500, width: 220 }}>{t.label}</td>
                  <td style={{ padding: 4, fontFamily: 'monospace', color: '#888' }}>{t.var}</td>
                  <td style={{ padding: 4 }}>
                    <span style={{ background: t.var.includes('color') || t.var.includes('surface') ? `var(${t.var})` : 'none',
                                  color: t.var.includes('color') ? '#fff' : 'inherit',
                                  padding: t.var.includes('color') || t.var.includes('surface') ? '0 12px' : 0,
                                  borderRadius: 4 }}>
                      {vars[t.var] || <span style={{ color: '#bbb' }}>n/a</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h4>Typography</h4>
        <div style={{ fontFamily: 'var(--font-family)', fontSize: 20, marginBottom: 8 }}>Font Family: <span style={{ fontWeight: 600 }}>{vars['--font-family']}</span></div>
        <div style={{ fontSize: 16 }}>Sample Text: The quick brown fox jumps over the lazy dog.</div>
        <div style={{ fontSize: 14, marginTop: 4 }}>Font Size: <span style={{ fontFamily: 'monospace' }}>{vars['--font-size']}</span></div>
        <div style={{ fontSize: 14 }}>Font Weight: <span style={{ fontFamily: 'monospace' }}>{vars['--font-weight']}</span></div>
        <div style={{ fontSize: 14 }}>Line Height: <span style={{ fontFamily: 'monospace' }}>{vars['--line-height']}</span></div>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h4>Spacing</h4>
        <div style={{ fontSize: 14 }}>Spacing: <span style={{ fontFamily: 'monospace' }}>{vars['--spacing']}</span></div>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h4>Shadows</h4>
        <div style={{ display: 'flex', gap: 16 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ boxShadow: `var(--shadow-${i})`, width: 60, height: 60, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, color: '#888' }}>{vars[`--shadow-${i}`]}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4>Border Radius</h4>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ borderRadius: 'var(--border-radius)', background: 'var(--primary-color)', width: 60, height: 60 }} />
          <div style={{ borderRadius: 12, background: 'var(--primary-color)', width: 60, height: 60 }} />
          <div style={{ borderRadius: 24, background: 'var(--primary-color)', width: 60, height: 60 }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 12 }}>Current: var(--border-radius) = {vars['--border-radius']}</div>
      </section>
    </div>
  );
}
