import { NumberedTextItem } from './numbered-text-item';

export interface ClearwayDocumentPage {
  number: number;
  imageUrl: string;
  annotations?: NumberedTextItem[];
}

export interface ClearwayDocument {
  id?: string;
  name: string;
  pages: ClearwayDocumentPage[];
}
