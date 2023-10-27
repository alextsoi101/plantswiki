import plantsAPI from './axios';
import * as endpoints from './endpoints';
import * as interfaces from '../../v1/features/plants/interfaces/plants.interfaces';

export const getKingdoms = async (params: interfaces.GetKingdomsParams) => {
  const {data} = await plantsAPI.get(endpoints.kingdoms.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneKingdom = async (params: interfaces.GetOneKingdomParams) => {
  const {data} = await plantsAPI.get(endpoints.kingdoms.one(params.id))
  return data
}

export const getSubkingdoms = async (params: interfaces.GetSubkingdomsParams) => {
  const {data} = await plantsAPI.get(endpoints.subkingdoms.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneSubkingdom = async (params: interfaces.GetOneSubkingdomParams) => {
  const {data} = await plantsAPI.get(endpoints.subkingdoms.one(params.id))
  return data
}

export const getDivisions = async (params: interfaces.GetDivisionsParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneDivision = async (params: interfaces.GetOneDivisionParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.one(params.id))
  return data
}

export const getDivisionClasses = async (params: interfaces.GetDivisionClassesParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.classes, {params: {
    page: params.page
  }})
  return data
}

export const getOneDivisionClass = async (params: interfaces.GetOneDivisionClassParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.classes_one(params.id))
  return data
}

export const getDivisionOrders = async (params: interfaces.GetDivisionOrdersParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.orders, {params: {
    page: params.page
  }})
  return data
}

export const getOneDivisionOrder = async (params: interfaces.GetOneDivisionOrderParams) => {
  const {data} = await plantsAPI.get(endpoints.divisions.orders_one(params.id))
  return data
}

export const getFamilies = async (params: interfaces.GetFamiliesParams) => {
  const {data} = await plantsAPI.get(endpoints.families.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneFamily = async (params: interfaces.GetOneFamilyParams) => {
  const {data} = await plantsAPI.get(endpoints.families.one(params.id))
  return data
}

export const getGenus = async (params: interfaces.GetGenusParams) => {
  const {data} = await plantsAPI.get(endpoints.genus.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneGenus = async (params: interfaces.GetOneGenusParams) => {
  const {data} = await plantsAPI.get(endpoints.genus.one(params.id))
  return data
}

export const getPlants = async (
  params: interfaces.GetPlantsParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.plants.list, {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getOnePlant = async (params: interfaces.GetOnePlantParams) => {
  const {data} = await plantsAPI.get(endpoints.plants.one(params.id))
  return data
}

export const searchPlants = async (
  params: interfaces.PlantSearchParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.plants.search(params.search_text), {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getPlantsByGenus = async (
  params: interfaces.GetPlantsByGenusParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.genus.plants(params.genus_id), {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getPlantsByZones = async (
  params: interfaces.GetPlantsByZonesParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.distributions.plants(params.zone_id), {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getSpecies = async (
  params: interfaces.GetSpeciesParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.species.list, {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getOneSpecies = async (params: interfaces.GetOneSpeciesParams) => {
  const {data} = await plantsAPI.get(endpoints.species.one(params.id))
  return data
}

export const searchSpecies = async (
  params: interfaces.SpeciesSearchParams
) => {
  const filter = `filter[${params.filter_field}]`;
  const filter_not = `filter_not[${params.filter_not_field}]`;
  const order = `order[${params.order_field}]`;
  const range = `filter[${params.range_field}]`;
  const range_value = `${params.range_min},${params.range_max}`;

  const {data} = await plantsAPI.get(endpoints.species.search(params.search_text), {params: {
    page: params.page,
    [filter]: params.filter,
    [filter_not]: params.filter_not,
    [order]: params.order,
    [range]: range_value
  }})
  return data
}

export const getDistributions = async (params: interfaces.GetDistributionsParams) => {
  const {data} = await plantsAPI.get(endpoints.distributions.list, {params: {
    page: params.page
  }})
  return data
}

export const getOneDistribution = async (params: interfaces.GetOneDistributionParams) => {
  const {data} = await plantsAPI.get(endpoints.distributions.one(params.id))
  return data
}