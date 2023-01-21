import { Router } from 'express';
import { RootRoutes } from '../enums/routes';
import RootController from '../controllers/root.controller';

const router = Router();
const rootController = new RootController();

router.use(RootRoutes.INDEX, (req, _res, next) => {
    req.baseUrl = RootRoutes.INDEX;
    next();
});

router.get(RootRoutes.INDEX, rootController.index);
router.get(RootRoutes.TWO, rootController.two);

export default router;
