import { Router } from 'express';
import { RootRoutes } from '../enums/routes';
import RootController from '../controllers/root.controller';

const router = Router();
const rootController = new RootController();

router.use(RootRoutes.ROOT, (req, _res, next) => {
    req.baseUrl = RootRoutes.ROOT;
    next();
});

router.get(RootRoutes.ROOT, rootController.index);
router.get(RootRoutes.TWO, rootController.two);

export default router;
