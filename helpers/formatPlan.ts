export function formatPlan(yearly: boolean, plan: string) {
  return yearly ? `${plan} (Yearly)` : `${plan} (Monthly)`;
}
