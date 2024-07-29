import { searchPackage } from '../services/registry-service';
import { PackageObject } from '../services/types/package-types';

export interface SearchLoaderResult {
  searchResults: PackageObject[];
}

export async function searchLoader(request: Request): Promise<SearchLoaderResult> {
  const url = new URL(request.url);
  const term = url.searchParams.get('term');
  if (!term) {
    throw new Error('term not found.');
  }

  const searchResults = await searchPackage(term);
  return {
    searchResults,
  };
}
