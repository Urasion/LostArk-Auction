import { apiClient } from '@/lib/apiClient';
import { MarketOptions } from './type';

export async function getMarketOptions(): Promise<MarketOptions> {
  return await apiClient('/markets/options', {
    method: 'GET',
    cache: 'force-cache',
  });
}
