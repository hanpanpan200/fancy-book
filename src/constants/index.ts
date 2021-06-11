import { BillType, Category, Statistic } from 'types/bill';
import otherIcon from 'assets/icons/other.svg';

export const LOCALE = 'zh-Hans-CN';

export const INVALID_CATEGORY: Category = {
  id: 'UNKNOWN',
  name: '其他',
  type: BillType.Unknown,
  icon: otherIcon
}

export const DEFAULT_STATISTIC: Statistic = {
  totalExpenditure: 0,
  totalIncome: 0
}
