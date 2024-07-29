export interface PackageSummary {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  author: {
    name: string;
    email: string;
  };
  publisher: {
    username: string;
    email: string;
  };
}

export interface PackageObject {
  package: PackageSummary;
}
