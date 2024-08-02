import { Params } from 'react-router-dom';
import { getPackageDetails } from '../services/registry-service';
import { PackageDetails } from '../services/types/package-types';

export interface DetailsLoaderResult {
  detailsResult: PackageDetails;
}

export async function detailsLoader({ params }: { params: Params }): Promise<DetailsLoaderResult> {
  const { name } = params;
  if (!name) {
    throw new Error('term not found.');
  }

  const detailsResult = await getPackageDetails(name);
  return {
    detailsResult,
  };
}
