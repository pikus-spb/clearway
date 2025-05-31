import { NumberedItem, NumberedTextItem } from './item';

export interface DocumentPage extends NumberedItem {
  imageUrl: string;
  annotations?: NumberedTextItem[];
}

export interface Document {
  id?: string;
  name: string;
  pages: DocumentPage[];
}
