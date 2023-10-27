import * as types from '../types/plants.types';

export interface GetKingdomsParams {
  page?: number;
}

export interface GetKingdomsResponse {
  kingdoms: types.KingdomList;
}

export interface GetOneKingdomParams {
  id: number;
}

export interface GetOneKingdomResponse {
  kingdom: types.KingdomOne;
}

export interface GetSubkingdomsParams {
  page?: number;
}

export interface GetSubkingdomsResponse {
  subkingdoms: types.SubKingdomList;
}

export interface GetOneSubkingdomParams {
  id: number;
}

export interface GetOneSubkingdomResponse {
  subkingdom: types.SubKingdomOne;
}

export interface GetDivisionsParams {
  page?: number;
}

export interface GetDivisionsResponse {
  divisions: types.DivisionList;
}

export interface GetOneDivisionParams {
  id: number;
}

export interface GetOneDivisionResponse {
  division: types.DivisionOne;
}

export interface GetDivisionClassesParams {
  page?: number;
}

export interface GetDivisionClassesResponse {
  divisionClasses: types.DivisionClassList;
}

export interface GetOneDivisionClassParams {
  id: number;
}

export interface GetOneDivisionClassResponse {
  division: types.DivisionClassOne;
}

export interface GetDivisionOrdersParams {
  page?: number;
}

export interface GetDivisionOrdersResponse {
  divisionOrders: types.DivisionOrderList;
}

export interface GetOneDivisionOrderParams {
  id: number;
}

export interface GetOneDivisionOrderResponse {
  division: types.DivisionOrderOne;
}

export interface GetFamiliesParams {
  page?: number;
}

export interface GetFamiliesResponse {
  families: types.FamilyList;
}

export interface GetOneFamilyParams {
  id: number;
}

export interface GetOneFamilyResponse {
  family: types.FamilyOne;
}

export interface GetGenusParams {
  page?: number;
}

export interface GetGenusResponse {
  genus: types.GenusList;
}

export interface GetOneGenusParams {
  id: number;
}

export interface GetOneGenusResponse {
  genus: types.GenusOne;
}

export interface GetPlantsParams {
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface GetPlantsResponse {
  plants: types.PlantList;
}

export interface GetOnePlantParams {
  id: number;
}

export interface GetOnePlantResponse {
  plant: types.PlantOne;
}

export interface PlantSearchParams {
  search_text: string;
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface PlantSearchResponse {
  plants: types.PlantSearch;
}

export interface GetPlantsByZonesParams {
  zone_id: number;
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface GetPlantsByZonesResponse {
  plants: types.PlantByZones;
}

export interface GetPlantsByGenusParams {
  genus_id: number;
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface GetPlantsByGenusResponse {
  plants: types.PlantByGenus;
}

export interface GetSpeciesParams {
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface GetSpeciesResponse {
  species: types.SpeciesList;
}

export interface GetOneSpeciesParams {
  id: number;
}

export interface GetOneSpeciesResponse {
  species: types.SpeciesOne;
}

export interface SpeciesSearchParams {
  search_text: string;
  page?: number;
  filter?: string;
  filter_field?: string;
  filter_not?: string;
  filter_not_field?: string;
  order?: string;
  order_field?: string;
  range_min?: string;
  range_max?: string;
  range_field?: string;
}

export interface SpeciesSearchResponse {
  species: types.SpeciesSearch;
}

export interface GetDistributionsParams {
  page?: number;
}

export interface GetDistributionsResponse {
  distributions: types.DistributionList;
}

export interface GetOneDistributionParams {
  id: number;
}

export interface GetOneDistributionResponse {
  distribution: types.DistributionOne;
}