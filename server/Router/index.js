import express from 'express';
import routerStudent from './routerSudent.js';
import routeUser from './routerUser.js';
import routerLecturers from './routerlecturers.js';
import routerSubject from './routerSubject.js';
import routerScores from './routerScores.js';
import routerClass from './routerClass.js';
const router = express.Router();
router.use('/student', routerStudent);
router.use('/',routeUser)
router.use('/lecturers',routerLecturers)
router.use('/subject',routerSubject)
router.use('/scores',routerScores)
router.use('/class',routerClass)
export default router;