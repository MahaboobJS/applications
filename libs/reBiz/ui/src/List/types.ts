import { IconsList } from '@ruyyaan/shared/ui-icons';

export type Item = {
  id: string;
  name: string;
  title?: string;
  detail: string;
  image?: string;
};

export type ListProps = {
  title: string;
  items: Item[];
  onAdd: (items: Item[]) => void;
  onDelete: (id: string) => void;
  loading: boolean;
  noDataMessage: string;
  namePlaceholder: string;
  limitTags?: number;
  availableOptions: Item[];
  fetchAvailableOptions: () => Promise<unknown>;
  defaultIcon?: IconsList;
};
