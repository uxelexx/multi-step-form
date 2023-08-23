import { ADDS, PLANS } from './prices';

type countTotalArgs = {
  planType: string;
  service?: boolean;
  storage?: boolean;
  profile?: boolean;
};

export function countTotalPrice({
  planType,
  service,
  storage,
  profile,
}: countTotalArgs) {
  const srvc = service ? ADDS.service : 0,
    strg = storage ? ADDS.storage : 0,
    prfl = profile ? ADDS.profile : 0;

  return PLANS[planType] + srvc + strg + prfl;
}
