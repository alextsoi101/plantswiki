import { Request, Response, NextFunction } from 'express';
import PlantsService from '../services/plants.service';
import * as interfaces from '../interfaces/plants.interfaces';

class PlantsController {

  async getKingdoms(
    req: Request<{}, {}, {}, interfaces.GetKingdomsParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    let { page } = req.query;

    try {
      const kingdoms = await PlantsService.getKingdoms({page});
      res.json(kingdoms);
    } catch (error) {
      return next(error);
    }
  }

  async getOneKingdom(
    req: Request<{}, {}, {}, interfaces.GetOneKingdomParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const kingdom = await PlantsService.getOneKingdom({id});
      res.json(kingdom);
    } catch (error) {
      return next(error);
    }
  }

  async getSubkingdoms(
    req: Request<{}, {}, {}, interfaces.GetSubkingdomsParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const subkingdoms = await PlantsService.getSubkingdoms({page});
      res.json(subkingdoms);
    } catch (error) {
      return next(error);
    }
  }

  async getOneSubkingdom(
    req: Request<{}, {}, {}, interfaces.GetOneSubkingdomParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const subkingdom = await PlantsService.getOneSubkingdom({id});
      res.json(subkingdom);
    } catch (error) {
      return next(error);
    }
  }

  async getDivisions(
    req: Request<{}, {}, {}, interfaces.GetDivisionsParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const divisions = await PlantsService.getDivisions({page});
      res.json(divisions)
    } catch (error) {
      return next(error);
    }
  }

  async getOneDivision(
    req: Request<{}, {}, {}, interfaces.GetOneDivisionParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const division = await PlantsService.getOneDivision({id});
      res.json(division);
    } catch (error) {
      return next(error);
    }
  }

  async getDivisionClasses(
    req: Request<{}, {}, {}, interfaces.GetDivisionClassesParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const divisionClasses = await PlantsService.getDivisionClasses({page});
      res.json(divisionClasses);
    } catch (error) {
      return next(error);
    }
  }

  async getOneDivisionClass(
    req: Request<{}, {}, {}, interfaces.GetOneDivisionClassParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const divisionClass = await PlantsService.getOneDivisionClass({id});
      res.json(divisionClass);
    } catch (error) {
      return next(error);
    }
  }

  async getDivisionOrders(
    req: Request<{}, {}, {}, interfaces.GetDivisionOrdersParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const divisionOrders = await PlantsService.getDivisionOrders({page});
      res.json(divisionOrders);
    } catch (error) {
      return next(error);
    }
  }

  async getOneDivisionOrder(
    req: Request<{}, {}, {}, interfaces.GetOneDivisionOrderParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const divisionOrder = await PlantsService.getOneDivisionOrder({id});
      res.json(divisionOrder);
    } catch (error) {
      return next(error);
    }
  }

  async getFamilies(
    req: Request<{}, {}, {}, interfaces.GetFamiliesParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const families = await PlantsService.getFamilies({page});
      res.json(families);
    } catch (error) {
      return next(error);
    }
  }

  async getOneFamily(
    req: Request<{}, {}, {}, interfaces.GetOneFamilyParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const family = await PlantsService.getOneFamily({id});
      res.json(family);
    } catch (error) {
      return next(error);
    }
  }

  async getGenus(
    req: Request<{}, {}, {}, interfaces.GetGenusParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;
    
    try {
      const genus = await PlantsService.getGenus({page});
      res.json(genus);
    } catch (error) {
      return next(error);
    }
  }

  async getOneGenus(
    req: Request<{}, {}, {}, interfaces.GetOneGenusParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const genus = await PlantsService.getOneGenus({id});
      res.json(genus);
    } catch (error) {
      return next(error);
    }
  }

  async getPlants(
    req: Request<{}, {}, {}, interfaces.GetPlantsParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field } = req.query;
    
    try {
      const plants = await PlantsService.getPlants({
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field
      });
      res.json(plants);
    } catch (error) {
      return next(error);
    }
  }

  async getOnePlant(
    req: Request<{}, {}, {}, interfaces.GetOnePlantParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const plant = await PlantsService.getOnePlant({id});
      res.json(plant);
    } catch (error) {
      return next(error);
    }
  }

  async searchPlants(
    req: Request<{}, {}, {}, interfaces.PlantSearchParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      search_text,
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field } = req.query;

    try {
      const plants = await PlantsService.searchPlants({
        search_text,
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field
      });
      res.json(plants);
    } catch (error) {
      return next(error);
    }
  }

  async getPlantsByGenus(
    req: Request<{}, {}, {}, interfaces.GetPlantsByGenusParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      genus_id,
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field } = req.query;
    
    try {
      const plants = await PlantsService.getPlantsByGenus({
        genus_id,
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field 
      });
      res.json(plants);
    } catch (error) {
      return next(error);
    }
  }

  async getPlantsByZones(
    req: Request<{}, {}, {}, interfaces.GetPlantsByZonesParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      zone_id,
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field
     } = req.query;
    
    try {
      const plants = await PlantsService.getPlantsByZones({
        zone_id,
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field
      });
      res.json(plants);
    } catch (error) {
      return next(error);
    }
  }

  async getSpecies(
    req: Request<{}, {}, {}, interfaces.GetSpeciesParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field
     } = req.query;
    
    try {
      const species = await PlantsService.getSpecies({
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field
      });
      res.json(species);
    } catch (error) {
      return next(error);
    }
  }

  async getOneSpecies(
    req: Request<{}, {}, {}, interfaces.GetOneSpeciesParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const species = await PlantsService.getOneSpecies({id});
      res.json(species);
    } catch (error) {
      return next(error);
    }
  }

  async searchSpecies(
    req: Request<{}, {}, {}, interfaces.SpeciesSearchParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { 
      search_text,
      page, 
      filter, 
      filter_field, 
      filter_not, 
      filter_not_field,
      order, 
      order_field,
      range_min,
      range_max,
      range_field
    } = req.query;

    try {
      const species = await PlantsService.searchSpecies({
        search_text,
        page, 
        filter, 
        filter_field, 
        filter_not, 
        filter_not_field,
        order, 
        order_field,
        range_min,
        range_max,
        range_field
      });
      res.json(species);
    } catch (error) {
      return next(error);
    }
  }

  async getDistributions (
    req: Request<{}, {}, {}, interfaces.GetDistributionsParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { page } = req.query;

    try {
      const distributions = await PlantsService.getDistributions({page});
      res.json(distributions);
    } catch (error) {
      return next(error);
    }
  }

  async getOneDistribution (
    req: Request<{}, {}, {}, interfaces.GetOneDistributionParams>, 
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id } = req.query;

    try {
      const distribution = await PlantsService.getOneDistribution({id});
      res.json(distribution);
    } catch (error) {
      return next(error);
    }
  }
}

export default new PlantsController();