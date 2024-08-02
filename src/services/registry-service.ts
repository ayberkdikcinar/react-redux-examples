import axios from 'axios';
import { PackageDetails, PackageObject } from './types/package-types';

interface SearchPackageResponse {
  data: {
    objects: PackageObject[];
  };
}

async function getPackageDetails(name: string): Promise<PackageDetails> {
  const response = await axios.get(`https://registry.npmjs.org/${name}`);
  return response.data as PackageDetails;
}

async function searchPackage(text?: string): Promise<PackageObject[]> {
  const response: SearchPackageResponse = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${text}`);
  return response.data.objects;
}

export { searchPackage, getPackageDetails };
