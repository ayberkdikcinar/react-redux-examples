import axios from 'axios';
import { PackageObject } from './types/package-types';

interface SearchPackageResponse {
  data: {
    objects: PackageObject[];
  };
}

function getPackageDetails() {}

async function searchPackage(text?: string): Promise<PackageObject[]> {
  const response: SearchPackageResponse = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${text}`);
  return response.data.objects;
}

export { searchPackage, getPackageDetails };
