import * as plantsAPI from '../../../../shared/axios/plantsApi';
import * as interfaces from '../interfaces/plants.interfaces';

class PlantsRepository {

  async getKingdoms(
    params: interfaces.GetKingdomsParams): Promise<interfaces.GetKingdomsResponse> {
    
    try {
      const kingdoms = await plantsAPI.getKingdoms(params);
      return kingdoms;
    } catch (error) {
      throw error;
    }
  }

  async getOneKingdom(
    params: interfaces.GetOneKingdomParams): Promise<interfaces.GetOneKingdomResponse> {

    try {
      const kingdom = await plantsAPI.getOneKingdom(params);
      return kingdom;
    } catch (error) {
      throw error;
    }
  }

  async getSubkingdoms(
    params: interfaces.GetSubkingdomsParams): Promise<interfaces.GetSubkingdomsResponse> {
    
    try {
      const subkingdoms = await plantsAPI.getSubkingdoms(params);
      return subkingdoms;
    } catch (error) {
      throw error;
    }
  }

  async getOneSubkingdom(
    params: interfaces.GetOneSubkingdomParams): Promise<interfaces.GetOneSubkingdomResponse> {

    try {
      const subkingdom = await plantsAPI.getOneSubkingdom(params);
      return subkingdom;
    } catch (error) {
      throw error;
    }
  }

  async getDivisions(
    params: interfaces.GetDivisionsParams): Promise<interfaces.GetDivisionsResponse> {
    
    try {
      const divisions = await plantsAPI.getDivisions(params);
      return divisions;
    } catch (error) {
      throw error;
    }
  }

  async getOneDivision(
    params: interfaces.GetOneDivisionParams): Promise<interfaces.GetOneDivisionResponse> {

    try {
      const division = await plantsAPI.getOneDivision(params);
      return division;
    } catch (error) {
      throw error;
    }
  }

  async getDivisionClasses(
    params: interfaces.GetDivisionClassesParams): Promise<interfaces.GetDivisionClassesResponse> {
    
    try {
      const divisionClasses = await plantsAPI.getDivisionClasses(params);
      return divisionClasses;
    } catch (error) {
      throw error;
    }
  }

  async getOneDivisionClass(
    params: interfaces.GetOneDivisionClassParams): Promise<interfaces.GetOneDivisionClassResponse> {

    try {
      const divisionClass = await plantsAPI.getOneDivisionClass(params);
      return divisionClass;
    } catch (error) {
      throw error;
    }
  }

  async getDivisionOrders(
    params: interfaces.GetDivisionOrdersParams): Promise<interfaces.GetDivisionOrdersResponse> {
    
    try {
      const divisionOrders = await plantsAPI.getDivisionOrders(params);
      return divisionOrders;
    } catch (error) {
      throw error;
    }
  }

  async getOneDivisionOrder(
    params: interfaces.GetOneDivisionOrderParams): Promise<interfaces.GetOneDivisionOrderResponse> {

    try {
      const divisionOrder = await plantsAPI.getOneDivisionOrder(params);
      return divisionOrder;
    } catch (error) {
      throw error;
    }
  }

  async getFamilies(
    params: interfaces.GetFamiliesParams): Promise<interfaces.GetFamiliesResponse> {
    
    try {
      const families = await plantsAPI.getFamilies(params);
      return families;
    } catch (error) {
      throw error;
    }
  }

  async getOneFamily(
    params: interfaces.GetOneFamilyParams): Promise<interfaces.GetOneFamilyResponse> {

    try {
      const family = await plantsAPI.getOneFamily(params);
      return family;
    } catch (error) {
      throw error;
    }
  }

  async getGenus(
    params: interfaces.GetGenusParams): Promise<interfaces.GetGenusResponse> {
    
    try {
      const genus = await plantsAPI.getGenus(params);
      return genus;
    } catch (error) {
      throw error;
    }
  }

  async getOneGenus(
    params: interfaces.GetOneGenusParams): Promise<interfaces.GetOneGenusResponse> {

    try {
      const genus = await plantsAPI.getOneGenus(params);
      return genus;
    } catch (error) {
      throw error;
    }
  }

  async getPlants(
    params: interfaces.GetPlantsParams): Promise<interfaces.GetPlantsResponse> {
    
    try {
      const plants = await plantsAPI.getPlants(params);
      return plants;
    } catch (error) {
      throw error;
    }
  }

  async getOnePlant(
    params: interfaces.GetOnePlantParams): Promise<interfaces.GetOnePlantResponse> {

    try {
      const plant = await plantsAPI.getOnePlant(params);
      return plant;
    } catch (error) {
      throw error;
    }
  }

  async searchPlants(
    params: interfaces.PlantSearchParams): Promise<interfaces.PlantSearchResponse> {

    try {
      const plants = await plantsAPI.searchPlants(params);
      return plants;
    } catch (error) {
      throw error;
    }
  }

  async getPlantsByGenus(
    params: interfaces.GetPlantsByGenusParams): Promise<interfaces.GetPlantsByGenusResponse> {
    
    try {
      const plants = await plantsAPI.getPlantsByGenus(params);
      return plants;
    } catch (error) {
      throw error;
    }
  }

  async getPlantsByZones(
    params: interfaces.GetPlantsByZonesParams): Promise<interfaces.GetPlantsByZonesResponse> {
    
    try {
      const plants = await plantsAPI.getPlantsByZones(params);
      return plants;
    } catch (error) {
      throw error;
    }
  }

  async getSpecies(
    params: interfaces.GetSpeciesParams): Promise<interfaces.GetSpeciesResponse> {
    
    try {
      const species = await plantsAPI.getSpecies(params);
      return species;
    } catch (error) {
      throw error;
    }
  }

  async getOneSpecies(
    params: interfaces.GetOneSpeciesParams): Promise<interfaces.GetOneSpeciesResponse> {

    try {
      const species = await plantsAPI.getOneSpecies(params);
      return species;
    } catch (error) {
      throw error;
    }
  }

  async searchSpecies(
    params: interfaces.SpeciesSearchParams): Promise<interfaces.SpeciesSearchResponse> {

    try {
      const species = await plantsAPI.searchSpecies(params);
      return species;
    } catch (error) {
      throw error;
    }
  }

  async getDistributions (
    params: interfaces.GetDistributionsParams): Promise<interfaces.GetDistributionsResponse> {

    try {
      const distributions = await plantsAPI.getDistributions(params);
      return distributions;
    } catch (error) {
      throw error;
    }
  }

  async getOneDistribution (
    params: interfaces.GetOneDistributionParams): Promise<interfaces.GetOneDistributionResponse> {

    try {
      const distribution = await plantsAPI.getOneDistribution(params);
      return distribution;
    } catch (error) {
      throw error;
    }
  }
}

export default new PlantsRepository();