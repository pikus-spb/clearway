import { NumberedItem, NumberedTextItem } from './numbered-text-item';

export interface ClearwayDocumentPage extends NumberedItem {
  imageUrl: string;
  annotations?: NumberedTextItem[];
}

export interface ClearwayDocument {
  id?: string;
  name: string;
  pages: ClearwayDocumentPage[];
}
