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

export interface PackageDetails {
  name: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  maintainers: {
    name: string;
    email: string;
  }[];
  readme: string;
  licence: string;
}
export interface PackageObject {
  package: PackageSummary;
}
