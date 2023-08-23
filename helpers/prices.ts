export const PLANS = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
} as const;

export const ADDS = {
  service: {
    label: 'Online service',
    price: 1,
    description: 'Access to multiplayer games',
  },
  storage: {
    label: 'Extra storage',
    price: 2,
    description: 'Extra 1TB of cloud save',
  },
  profile: {
    label: 'Customizable profile',
    price: 2,
    description: 'Custom theme on your profile',
  },
} as const;

