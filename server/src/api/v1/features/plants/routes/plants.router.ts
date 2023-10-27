import { Router } from 'express';
import plantsController from '../controllers/plants.controller';

const router = Router();

router.get('/kingdoms', plantsController.getKingdoms);
router.get('/kingdoms/:id', plantsController.getOneKingdom);
router.get('/subkingdoms', plantsController.getSubkingdoms);
router.get('/subkingdoms/:id', plantsController.getOneSubkingdom);
router.get('/divisions', plantsController.getDivisions);
router.get('/divisions/:id', plantsController.getOneDivision);
router.get('/division-classes', plantsController.getDivisionClasses);
router.get('/division-classes/:id', plantsController.getOneDivisionClass);
router.get('/division-orders', plantsController.getDivisionOrders);
router.get('/division-orders/:id', plantsController.getOneDivisionOrder);
router.get('/families', plantsController.getFamilies);
router.get('/families/:id', plantsController.getOneFamily);
router.get('/genus', plantsController.getGenus);
router.get('/genus/:id', plantsController.getOneGenus);
router.get('/plants', plantsController.getPlants);
router.get('/plants/:id', plantsController.getOnePlant);
router.get('/plants/search', plantsController.searchPlants);
router.get('/plants/genus/:genus_id', plantsController.getPlantsByGenus);
router.get('/plants/zone/:zone_id', plantsController.getPlantsByZones);
router.get('/species', plantsController.getSpecies);
router.get('/species/:id', plantsController.getOneSpecies);
router.get('/species/search', plantsController.searchSpecies);
router.get('/distributions', plantsController.getDistributions);
router.get('/distributions/:id', plantsController.getOneDistribution);

export default router;