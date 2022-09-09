import {Router} from 'express'

import * as payloadController from '../controllers/payload.controller'

const router = Router();

router.post('/DevOps',payloadController.createPayload);

export default router;