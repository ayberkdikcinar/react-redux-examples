import axios from 'axios';

interface Package {
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

interface PackageObject {
  package: Package;
}
export interface SearchPackageResponse {
  data: {
    objects: PackageObject[];
  };
}

function getPackageDetails() {}

async function searchPackage(text?: string) {
  const response: SearchPackageResponse = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${text}`);
  return response;
}

export { searchPackage, getPackageDetails };
