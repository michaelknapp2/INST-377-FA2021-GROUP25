/**
 * INST 377 TEAM 25
 * Authors: Alec Mattu
 * Date: 2021-11-01
 */

// Module Imports
import express from 'express';

// Instantiate router component
const router = express.Router();

/*
 * Root directory
 *
 * @author Alec M.
 * @date 2021-11-01 06:32PM
 */
router.get('/:collegeName', (request, response) => {
  // TBD: Dynamically load HTML template with college info
  response.send('TBD open college: ' + request.params.collegeName);
});

// Export router
export default router;
