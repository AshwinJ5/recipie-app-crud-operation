const express= require('express')
const router= new express.Router()

const recipeController=require('../Controller/controller')

//get all recipies
router.get('/recipes',recipeController.getAllRecipies)

//get a recipie detail
router.get('/details/:id',recipeController.getARecipieDetail)

//add a recipie detail
router.post('/add',recipeController.addRecipieDetails)

//delete a recipie detail
router.delete('/remove/:rid',recipeController.deleteARecipieDetail)

// //update a recipie detail
// router.put('/update/:rid',recipeController.update)

module.exports = router;