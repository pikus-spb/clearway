export interface ClearwayDocumentAnnotation {
  number: number;
  text: string;
}

export interface ClearwayDocumentPage {
  number: number;
  imageUrl: string;
  annotations?: ClearwayDocumentAnnotation[];
}

export interface ClearwayDocument {
  id?: string;
  name: string;
  pages: ClearwayDocumentPage[];
}
