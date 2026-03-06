/* ============================================================
   HarmoniQ Technologies — ROI Calculator
   ============================================================ */

// Average industrial electricity rates by country (USD/kWh)
const RATES = {
  'Germany': 0.16, 'France': 0.11, 'UK': 0.13, 'Italy': 0.14, 'Spain': 0.12,
  'Netherlands': 0.13, 'Belgium': 0.14, 'Poland': 0.09, 'Sweden': 0.07,
  'Norway': 0.05, 'Denmark': 0.10, 'Finland': 0.08, 'Austria': 0.11,
  'UAE': 0.065, 'Saudi Arabia': 0.048, 'Qatar': 0.030, 'Kuwait': 0.020,
  'Bahrain': 0.035, 'Oman': 0.045, 'Israel': 0.10, 'Egypt': 0.035,
  'USA': 0.08, 'Canada': 0.07, 'Australia': 0.12, 'Other': 0.10,
};

// Power factor penalty assumptions by current PF level
const PF_PENALTY = {
  '0.95': 0.00,
  '0.90': 0.03,
  '0.85': 0.06,
  '0.80': 0.10,
  '0.75': 0.13,
  '0.70': 0.16,
  'below_0.70': 0.20,
};

function calculate() {
  const annualSpend   = parseFloat(document.getElementById('roi-spend').value)    || 0;
  const country       = document.getElementById('roi-country').value;
  const powerFactor   = document.getElementById('roi-pf').value;
  const equipCost     = parseFloat(document.getElementById('roi-equip').value)    || 0;
  const maintenancePct= parseFloat(document.getElementById('roi-maint').value)    || 3;

  const rate          = RATES[country] || 0.10;
  const pfPenalty     = PF_PENALTY[powerFactor] || 0.06;

  // Energy savings: 10–25% — use conservative 15% midpoint + PF penalty
  const savingsRate   = 0.15 + pfPenalty;
  const capped        = Math.min(savingsRate, 0.25);

  const annualEnergySaving   = annualSpend * capped;
  const pfPenaltySaving      = annualSpend * pfPenalty;
  const annualMaintenanceSave= (equipCost * maintenancePct) / 100;
  const totalAnnualSaving    = annualEnergySaving + annualMaintenanceSave;

  // Equipment lifecycle extended by up to 2x (IEEE Arrhenius rule, 20°C reduction)
  const equipLifeExtension   = equipCost * 0.40; // conservative 40% life extension value

  // Payback (typical HarmoniQ install cost ~ 18 months electricity savings)
  const paybackMonths        = totalAnnualSaving > 0 ? Math.max(6, Math.round(12 * 1.5 / (totalAnnualSaving / annualSpend))) : 0;

  const fmtUSD = (v) => '$' + Math.round(v).toLocaleString();
  const fmtPct = (v) => (v * 100).toFixed(1) + '%';

  // Update DOM
  setResult('roi-result-savings-rate',   fmtPct(capped));
  setResult('roi-result-energy-saving',  fmtUSD(annualEnergySaving));
  setResult('roi-result-pf-saving',      fmtUSD(pfPenaltySaving));
  setResult('roi-result-maint-saving',   fmtUSD(annualMaintenanceSave));
  setResult('roi-result-equip-value',    fmtUSD(equipLifeExtension));
  setResult('roi-result-total',          fmtUSD(totalAnnualSaving));
  setResult('roi-result-payback',        paybackMonths + ' months');

  const headline = document.getElementById('roi-headline-value');
  if (headline) {
    headline.textContent = fmtUSD(totalAnnualSaving);
    headline.style.animation = 'none';
    requestAnimationFrame(() => { headline.style.animation = ''; });
  }

  const card = document.querySelector('.roi-results');
  if (card) {
    card.style.animation = 'none';
    requestAnimationFrame(() => {
      card.style.animation = 'fadeUp 0.4s ease forwards';
    });
  }
}

function setResult(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// Attach listeners
document.addEventListener('DOMContentLoaded', () => {
  const inputs = ['roi-spend', 'roi-country', 'roi-pf', 'roi-equip', 'roi-maint'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calculate);
  });
  calculate(); // initial run
});
