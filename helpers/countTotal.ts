import { ADDS_PRICE, PLAN_PRICE } from './prices';

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
  const srvc = service ? ADDS_PRICE.service : 0,
    strg = storage ? ADDS_PRICE.storage : 0,
    prfl = profile ? ADDS_PRICE.profile : 0;

  return PLAN_PRICE[planType] + srvc + strg + prfl;
}
