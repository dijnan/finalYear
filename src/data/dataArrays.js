export const categories = [
  {
    id: 3,
    name: 'Soups', //
    photo_url: // change pics
    'https://diabetes-resources-production.s3.eu-west-1.amazonaws.com/resources-s3/styles/small_ckeditor/s3/migration/recipes/Muligatawny.jpg?VersionId=J_9dqUyKvOAsYdOPzjToEwZB6ihkjXG4&itok=G2WK0GWq'
  },
  {
    id: 1,
    name: 'Grilled meat',
    photo_url:  //change pic
     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/6/27/0/FN_Grilled-Meat-Opener_s4x3.jpg.rend.hgtvcom.616.462.suffix/1403878685365.jpeg'
  },
  {
    id: 2,
    name: 'Breakfast dishes',
    photo_url: //change pic
      'https://foodieinlagos.com/wp-content/uploads/2020/08/charisse-kenion-vCEDCj0tugw-unsplash.jpg'
  },
  {
    id: 4,
    name: 'Grains & Cereals',
    photo_url: //change pic
    'https://www.mydiasporakitchen.com/wp-content/uploads/2018/05/savingpng-37.jpg'
  },
  {
    id: 0,
    name: 'Snacks',
    photo_url:  
     'https://acleanbake.com/wp-content/uploads/2018/05/5-Ingredient-Baked-Tofu-Recipe-vegan-gluten-free-9.jpg'
  },

];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Egusi Soup', 
    photo_url: 'https://soupembassy.com.ng/order/wp-content/uploads/2021/05/egusi-soup-online.jpg',
    photosArray: [
      'https://soupembassy.com.ng/order/wp-content/uploads/2021/05/egusi-soup-online.jpg',
      'https://vibrantwestafricancuisine.com/wp-content/uploads/2018/02/Egusi-soup-use-683x1024.jpg',
      'https://thecanadianafrican.com/wp-content/uploads/2022/12/DSC_0061.jpg'
    ],
    time: '30-40',
    Nutritional_info: '-Calories: 290\n Total fat: 21g\n Saturated fat:4g\n Cholestrol: 10mg\n Sodium:450mg\n Total carbohydrates: 12g\n Dietary fibre: 3g\n Sugars:\n Protein: 15g',
    ingredients: [[0, '200g'], [1, '500g'], [2, '100g'], [3, '1 medium sized'], [4, '2 chopped'], [5, '1 tablespoon'], [6, '1 tablespoon'], [7, 'to taste']],
    description:
      '-- Heat up the palm oil in a large pot on medium heat.\n\n -- Sauté the onions and peppers for 3-5 minutes or until onions are translucent. \n\n-Add the ground Egusi to the Pot and stir well, bring to a simmer\n\n -- Add Spinach leaves and simmer for 10-15 minutes. \n\n -- Add ground crayfish and bitterleaf. Adjust salt and pepper to tatste. Simmer for an additional 5 minutes.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Okra Soup',
    photo_url:
      'https://cdn.foodaciously.com/static/recipes/0e4f1d61-ae31-495c-a032-1b7b2cfd0fcc/vegan-okra-stew-02220354bb697822a386c9240c62b809-2560-q60.jpg',
    photosArray: [
      'https://cdn.foodaciously.com/static/recipes/0e4f1d61-ae31-495c-a032-1b7b2cfd0fcc/vegan-okra-stew-02220354bb697822a386c9240c62b809-2560-q60.jpg',
      'https://foodpluswords.com/wp-content/uploads/2022/08/Step-10-okra-soup-nigeria.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '30',
    Nutritional_info: '-Calories: 362kcal\n Total fat: 24g\n Carbohydrates:4g\n Fiber: 4g\n Sodium: 626mg\n Protein: 25g\n Sugar: 1g',
    ingredients: [
      [8, '1 pound'],
      [3, '1 chopped'],
      [9, '2 medium-sized'],
      [12, '2 scotch bonnet peppers'],
      [10, '1 pound'],
      [2, '1 tablespoon'],
      [7, 't0 taste'],
      [13, 'to taste']
    ],
    description: '--Sauté onions and peppers in oil in a large pot on medium heat\n\n--Add chopped okra and broth to the pot. Stir well and bring to a simmer\n\n--Simmer for 10-15 minutes until the okra is tender\n\n--Add chopped spinach and ground crayfish. Adjust salt and pepper to taste. Simmer for an additional 5 minutes.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Vegetable Soup',
    photo_url: 'https://img-global.cpcdn.com/recipes/818bc2bb15319026/680x482cq70/vegetable-soup-recipe-main-photo.jpg',
    photosArray: [
      'https://img-global.cpcdn.com/recipes/818bc2bb15319026/680x482cq70/vegetable-soup-recipe-main-photo.jpg',
      'https://allnigerianfoods.com/wp-content/uploads/vegetable_soup_recipe.jpg',
      'https://michaelmorones.org/wp-content/uploads/vegetable-soup-recipe-main-photo.png'
    ],
    time: '30',
    Nutritional_info: '-Calories: 84kcal\n--Total fat: 5g\n--Carbohydrates:9g\n Fiber: 3g\n Sodium: 321mg\n Protein: 4g',
    ingredients: [
      [1, '2 cups chopped'], 
      [14, '1 cup chopped'], 
      [15, '1 cup'], 
      [4, '1/2 cup'], 
      [9, '1/2 cup'], 
      [16, '1/2 cup'],  
      [17, '2 tablespoons'], 
      [5, '1 tablespoon'], 
      [20, '1 tablespoon'], 
      [21, '1 tablespoon'], 
      [22, '1 teaspoon'],
      [19, '4 cups'], 
      [7, 'to taste'], 
      [13, 'to taste'] 
    ],
    description:
      '-- Saute onions in olive oil until translucent\n\n --Add bell peppers, tomatoes, garlic and ginger. Saute for another 2-3 minutes. Add spinach, kale and pumpkin leaves. Stir until wilted. Add ground crayfish, balck pepper, cumin and vegetable broth. Bring to a boil.\n\n -- Let the soup simmer for 15-20 minutes. Season with salt to taste. Serve hot with a side of fufu, amala or any other suitable side dish.'
  },
  /*{
    recipeId: 3,
    categoryId: 3,
    title: 'Fish pepper soup',
    photo_url:
      'https://th.bing.com/th/id/R.b4df12c6825c2c0b58916e2ed57ffffc?rik=HD%2fSP37v6q1Eiw&riu=http%3a%2f%2fwww.nigerianlazychef.com%2fwp-content%2fuploads%2f2017%2f12%2f050D820A-DB6C-4B0A-8F98-0E3961B875FE.jpeg&ehk=3sjqmlUZ12Ye6n%2fS6Dc6vPxYuIBhnUYSCdE2JBniSFk%3d&risl=&pid=ImgRaw&r=0',
    photosArray: [
      'https://th.bing.com/th/id/R.b4df12c6825c2c0b58916e2ed57ffffc?rik=HD%2fSP37v6q1Eiw&riu=http%3a%2f%2fwww.nigerianlazychef.com%2fwp-content%2fuploads%2f2017%2f12%2f050D820A-DB6C-4B0A-8F98-0E3961B875FE.jpeg&ehk=3sjqmlUZ12Ye6n%2fS6Dc6vPxYuIBhnUYSCdE2JBniSFk%3d&risl=&pid=ImgRaw&r=0',
      'https://mummidele.com/wp-content/uploads/2019/08/Point-kill-Catfish-Pepper-Soup.jpg',
      'https://th.bing.com/th/id/R.47f767fcb169930c6722850f92d77bb2?rik=hzbsv2Vh2xEvig&riu=http%3a%2f%2fafricanbites.com%2fwp-content%2fuploads%2f2015%2f02%2fIMG_9620.jpg&ehk=Z8PtgGQ7O7uC7cR8MVMnEkNWr11b6PLlNARS3NORe7A%3d&risl=&pid=ImgRaw&r=0'
    ],
    time: '30',
    Nutritional_info: '-Calories: 362kcal\n Total fat: 24g\n Carbohydrates:4g\n Fiber: 4g\n Sodium: 626mg\n Protein: 25g\n Sugar: 1g',
    ingredients: [
      [11, '500g'],
      [3, '1 chopped'],
      [20, '2 cloves minced'],
      [21, '1 piece grated'],
      [9, '2 chopped'],
      [12, '2 pieces'],
      [19, '2 cups'],
      [5, '1 teaspoon'],
      [23, '1 teaspoon'],
      [24, '1 teaspoon']
      [25, '2 tablespoons'],
      [7, 'to taste'],
      [13, 'to taste']
    ],
    description:
      '--Pour some boiling water over the fish and leave for 30 seconds. This will help prevent the fish from breaking apart during cooking.\n\n Drain and rinse the fish and place it in a pot with water to cover it. Add garlic, ginger, onion, bouillon and salt and bring to a boil.\n--Add the chopped habanero pepper, dry pepper, pepper soup spices and simmer until the fish is cooked through and the broth is flavorful, about 15 to 20 minutes. Adjust the seasoning to your taste and add the chopped basil leaves at the end.\n\n--Enjoy your fish pepper soup with steamed rice, plantains or bread if you like.'
  },*/
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Edikang Ikong soup',
    photo_url: 'https://www.yummymedley.com/wp-content/uploads/2019/03/Edikaikong-11.jpg',
    photosArray: [
      'https://www.yummymedley.com/wp-content/uploads/2019/03/Edikaikong-11.jpg',
      'https://www.mydiasporakitchen.com/wp-content/uploads/2017/07/IMG_9177.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    Nutritional_info: '-Calories: 215kcal\n--Total fat: 15g\n--Carbohydrates:7g\n--Protein: 15g',
    ingredients: [
      [15, '200g'],
      [26, '200g'],
      [27, '200g diced'],
      [28, '100g'],
      [29, '50g'],
      [5, '50g'],
      [3, '2 large chopped'],
      [16, '2 chopped'],
      [2, '2 chopped'],
      [2, '3 tablespoons'],
      [5, '2 teaspoons'],
      [7, '1 teaspoon'],
      [13, '1 teaspoon']
    ],
    description:
      '-- Chop pumpkin leaves and water leaves finely.Cook beef and cow skin with water in a pot for 30 minutes.Add smoked fish and cook for another 10 minutes.\n\n-- Sauté onions, red bell peppers, and scotch bonnet peppers with palm oil in a separate pan until soft.Add ground crayfish and stir well, then pour into the pot with the cooked beef and cow skin.\n\n--Add chopped pumpkin leaves and water leaves and stir well.Simmer soup for 10-15 minutes, add ground pepper, and serve hot with fufu or a suitable side dish.'
  },
  {
    recipeId: 9,
    categoryId: 3,
    title: 'Afang Soup',
    photo_url:
      'https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-overhead.jpg?resize=750%2C1125&ssl=1',
    photosArray: [
      'https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-overhead.jpg?resize=750%2C1125&ssl=1',
      'https://th.bing.com/th/id/R.00bd193b4f277e29dc4598d79d5df6da?rik=D5pSHrC%2fKuwLQA&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/OIP.0b-oioAv1109lAryBmGWcgHaGh?pid=ImgDet&rs=1'
    ],
    time: '30',
    Nutritional_info: '--Calories: 362kcal\n--Total fat: 24g\n--Carbohydrates:4g\n--Fiber: 4g\n--Sodium: 626mg\n--Protein: 25g\n--Sugar: 1g',
    ingredients: [
      [1, '250g'],
      [15, '250g'],
      [11, '250g'],
      [3, '1 chopped'],
      [20, '2 cloves minced'],
      [21, '1 piece grated'],
      [9, '2 chopped'],
      [2, '1 tablespoon'],
      [5, '2 tablespoon'],
      [6, '1 teaspoon'],
      [19, '1 cup'],
      [7, 'to taste']
    ],
    description:
   '--Wash and boil your meat with seasoning until it is tender.Add water and palm oil to the pot and bring it to a boil.Add your blended afang leaves and cook for 5 minutes.\n\n--Add your cooked meat, crayfish, and smoked fish, and allow to cook for another 5 minutes.\n\n--Serve hot with fufu or any other suitable swallow.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Grilled Chicken Suya',
    photo_url: 'https://www.wellplated.com/wp-content/uploads/2021/05/Best-Grilled-Chicken-Breast.jpg',
    photosArray: [
      'https://www.wellplated.com/wp-content/uploads/2021/05/Best-Grilled-Chicken-Breast.jpg',
      'https://fitfoodiefinds.com/wp-content/uploads/2021/05/chicken-marinade-7-sq.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '30',
    Nutritional_info: '--Calories: 165kcal\n--Total fat: 9.3g\n--Saturated fat:2.5g\n--Cholesterol: 68mg\n--Sodium: 65mg\n--Protein: 19g\n--Sugar: 1g\n--Total Carbohydrate: 0g',
    ingredients: [
      [10, '500g'],
      [30, '2 tablespoons'],
      [32, '1 teaspoon'],
      [22, '1 teaspoon'],
      [33, '1 teaspoon'],
      [31, '1 teaspoon'],
      [34, '1 teaspoon'],
      [7, 'to taste']
    ],
    description:
      '-- Mix all the spices together, rub onto chicken breasts and marinate in the fridge for at least 30 minutes. Thread the chicken onto skewers and grill over medium-high heat for about 10-12 minutes, turning occasionally. Serve with salad or grilled vegetables.'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Grilled Turkey Kebabs',
    photo_url:
      'https://www.slenderkitchen.com/sites/default/files/styles/data_share/public/recipe_images/grilled-turkey-lula-kabobs.jpg',
    photosArray: [
      'https://www.slenderkitchen.com/sites/default/files/styles/data_share/public/recipe_images/grilled-turkey-lula-kabobs.jpg',
      'https://www.happyfoodstube.com/wp-content/uploads/2018/07/grilled-turkey-kabobs-image.jpg',
      'https://www.afarmgirlsdabbles.com/wp-content/uploads/2019/04/grilled-margarita-turkey-kebabs_AFarmgirlsDabbles_AFD-2-full-2-sq-735x735.jpg'
    ],
    time: 35,
    Nutritional_info: '--Calories: 189kcal\n--Total fat: 10.6g\n--Total Carbohydrates:0g\n--Cholesterol: 71mg\n--Sodium: 75mg\n--Protein: 22g',
    ingredients: [
      [36, '500g'],
      [37, '1 chopped'],
      [39, '1 chopped'],
      [17, '1 tablespoon'],
      [33, '1 teaspoon'],
      [22, '1 teaspoon'],
      [31, '1 teaspoon'],
      [7, 'to taste']
    ],
    description:
      '-- Cut the turkey breast into cubes, chop the green bell pepper and red onion into chunks. Mix the spices and olive oil together, rub onto the turkey cubes and vegetables and marinate for 30 minutes. Thread the meat and vegetables onto skewers and grill over medium-high heat for about 10-12 minutes, turning occasionally. Serve with a side of brown rice.'
  },
  {
    recipeId: 6,
    categoryId: 1,
    title: 'Grilled Beef Kebab',
    photo_url:
      'https://www.cookinwithmima.com/wp-content/uploads/2021/08/grilled-beef-kofta.jpg',
    photosArray: [
      'https://www.cookinwithmima.com/wp-content/uploads/2021/08/grilled-beef-kofta.jpg',
      'https://www.acedarspoon.com/wp-content/uploads/2018/05/Grilled-Beef-Kafta-Kebabs-Image-5-720x720.jpg',
      'https://loveandgoodstuff.com/wp-content/uploads/2021/09/beef-kofta-kebabs-1200x1200-1.jpg'
    ],
    time: 20,
    Nutritional_info: '--Calories: 266kcal\n--Total fat: 21g\n--Total Carbohydrates:1g\n--Cholesterol: 81mg\n--Sodium: 480mg\n--Protein: 18g',
    ingredients: [
      [35, '500g'],
      [3, '1 chopped'],
      [20, '1 clove'],
      [22, '1 teaspoon'], 
      [40, '1 teaspoon'],
      [33, '1 teaspoon'],
      [25, '1 tablespoon chopped'],
      [41, 'to taste']
    ],
    description:
      '-- Finely chop the onion and garlic, mix with the spices and parsley. Add to the beef mince and mix well, then form into sausage-shaped kebabs around skewers.\n\n -- Grill over medium-high heat for about 10-12 minutes, turning occasionally. Serve with a side of grilled vegetables.'
  },
  {
    recipeId: 0,
    categoryId: 1,
    title: 'Grilled Fish',
    photo_url: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Homemade-Grilled-Cod-Fish-Fillet-with-Tomatoes-Olives-and-Lemons.jpg',
    photosArray: [
      "https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Homemade-Grilled-Cod-Fish-Fillet-with-Tomatoes-Olives-and-Lemons.jpg",
      'https://img.taste.com.au/BU7jqjpF/w720-h480-cfill-q80/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg',
      'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/2017-grilledfishgrilledlemons-20217-desktop.jpg?ext=.jpg'
    ],
    time: '20-30',
    Nutritional_info: '--Calories: 132kcal\n--Total fat: 6.2g\n--Total Carbohydrates:0g\n--Cholesterol: 50mg\n--Sodium: 30mg\n--Protein: 18g',
    ingredients: [
      [42, '500g'], 
      [43, '1 tablespoon'], 
      [17, '1 tablespoon'],
      [33, '1 teaspoon'],
      [31, '1 teaspoon'],
      [41, 'to taste']
  ],
    description:
      '-- Mix the lemon juice, olive oil, spices and seasoning together, and rub onto the fish fillets.\n\n-- Grill over medium-high heat for about 10-12 minutes, turning once, until cooked through. Serve with a side of grilled vegetables or a green salad.'
  },

  {
    recipeId: 7,
    categoryId: 1,
    title: 'Grilled Lamb Chops',
    photo_url: 'https://pinchandswirl.com/wp-content/uploads/2018/07/Grilled-Lamb-Chops-on-a-white-platter-with-rosemary-sprigs-sq.jpg',
    photosArray: [
      'https://pinchandswirl.com/wp-content/uploads/2018/07/Grilled-Lamb-Chops-on-a-white-platter-with-rosemary-sprigs-sq.jpg',
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2021-03-easter-lamb-chops%2F2021_easter_grilled_lambchops_shot1_067',
      'https://www.homemadeinterest.com/wp-content/uploads/2022/08/Grilled-Lamb-Chops-in-a-Curry-Marinade_IG-1.jpg'
    ],
    time: 20,
    Nutritional_info: '--Calories: 230kcal\n--Total fat: 13g\n--Saturated fat:5g\n--Total Carbohydrates:0g\n--Cholesterol: 75mg\n--Sodium: 70mg\n--Protein: 24g',
    ingredients: [
      [44, '500g'],
      [17, '1 tablespoon'],
      [45, '1 teaspoon'],
      [46, '1 teaspoon'],
      [33, '1 teaspoon'],
      [41, 'to taste']
    ],
    description:
      '--  Mix the spices and seasoning together, rub onto the lamb chops and leave to marinate in the fridge for at least 30 minutes.\n\n -- Grill over medium-high heat for about 6-8 minutes per side, or until cooked to your liking. Serve with a side of roasted potatoes or grilled vegetables.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Moi-Moi (Bean Pudding)',
    photo_url: 'https://images.squarespace-cdn.com/content/v1/5f61fdbf6089cf5861823eb9/1611349931599-3T2LJVRJ0VGDTV6SH1SV/DSC_0797.jpg',
    photosArray: [
      'https://images.squarespace-cdn.com/content/v1/5f61fdbf6089cf5861823eb9/1611349931599-3T2LJVRJ0VGDTV6SH1SV/DSC_0797.jpg',
      'https://pulses.org/images/com_yoorecipe/422/cropped-moi-moi-rollup.jpg',
      'https://www.mydiasporakitchen.com/wp-content/uploads/2019/06/savingpng-19.png'
    ],
    time: 60,
    Nutritional_info: '--Calories: 287kcal\n--Total fat: 23.3g\n--Saturated fat:3.5g\n--Total Carbohydrates: 11.8g\n--Cholesterol: 61mg\n--Sodium: 220mg\n--Protein: 9.8g',
    ingredients: [
      [47, '500g'],
      [38, '1'],
      [39, '1'],
      [12, '2'],
      [48, '2'],
      [49, '1 cup'],
      [5, '2 teaspoons'],
      [7, '1 teaspoon'],
      [18, '']
    ],
    description:
      '-- Soak the beans in water for at least 4 hours, then rinse and peel the beans. In a blender or food processor, blend the beans, red bell pepper, onion, and Scotch bonnet peppers until smooth\n\n -- Add the vegetable oil, ground crayfish, salt, and eggs to the blended mixture, and stir well.Grease small bowls or ramekins with oil, then fill them halfway with the mixture.\n\n --Place the bowls in a pot with enough water to come halfway up the sides of the bowls, and steam for 45 minutes to 1 hour, until firm.'
  },
  {
    recipeId: 9,
    categoryId: 2,
    title: 'Akara (Bean Fritters)',
    photo_url: 'https://guardian.ng/wp-content/uploads/2017/09/akara-e1506724484724.jpg',
    photosArray: [
      'https://guardian.ng/wp-content/uploads/2017/09/akara-e1506724484724.jpg',
      'https://healthguide.ng/wp-content/uploads/2020/08/IMG_20200817_004308.jpg',
      'https://kscuisine.com/wp-content/uploads/2020/02/Akara-pic.jpeg'
    ],
    time: 40,
    Nutritional_info: '--Calories: 287kcal\n--Total fat: 23.3g\n--Saturated fat:3.5g\n--Total Carbohydrates: 11.8g\n--Cholesterol: 61mg\n--Sodium: 220mg\n--Protein: 9.8g',
    ingredients: [
      [47, '2 cups'],
      [3, '1 chopped'],
      [4, '1 chopped'],
      [7, 'to taste'],
      [49, 'for deep frying']
    ],
    description: 
      '-- Soak the black-eyed beans in water overnight or for at least 6 hours to soften the skin. Drain off the water, rinse the beans and blend with onions and pepper to a smooth paste.\n\n--Pour the paste into a bowl and beat for a few minutes to make it fluffy. Add salt to taste and mix well.\n\n-- Heat vegetable oil in a deep frying pan over medium heat. Scoop a tablespoonful of the mixture into the oil and fry until golden brown.Drain on a paper towel to remove excess oil.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Yogurt and Fruit Parfait',
    photo_url: 'https://feelgoodfoodie.net/wp-content/uploads/2021/05/fruit-and-yogurt-parfait-09.jpg',
    photosArray: [
      'https://feelgoodfoodie.net/wp-content/uploads/2021/05/fruit-and-yogurt-parfait-09.jpg',
      'https://www.thehungrybites.com/wp-content/uploads/2019/07/Homemade-yogurt-parfait-recipe-with-honey-and-fruits-feat.jpg',
      'https://simplyhomecooked.com/wp-content/uploads/2021/08/yogurt-parfait-4.jpg'
    ],
    time: 15,
    Nutritional_info: '--Calories: 200kcal\n--Total fat: 10g\n--Total Carbohydrates: 20-25g\n--Protein: 12g\n--Dietary fibre: 14g',
    ingredients: [
      [50, '1 cup'],
      [51, '1 teaspoon'],
      [52, '1/2 teaspoon'],
      [53, '1 cup'],
      [54, '2 tablespoons']
    ],
    description:
      '--  Layer plain Greek yogurt, sliced fruits (such as strawberries, blueberries, or mangoes), and chopped nuts or seeds in a jar or bowl. Drizzle with honey & sprinkle with chia seeds if desired.'
  },
  {
    recipeId: 9,
    categoryId: 2,
    title: 'Yam Porridge(Asaro)',
    photo_url: 'https://www.skabash.com/wp-content/uploads/2023/01/Yam-porridge-1280x720.jpg',
    photosArray: [
      'https://www.skabash.com/wp-content/uploads/2023/01/Yam-porridge-1280x720.jpg',
      'https://guardian.ng/wp-content/uploads/2020/05/Vegetable-Yam-Porridge.-Photo-My-diaspora-kitchen.jpeg',
      'https://eatwellabi.com/wp-content/uploads/2021/02/asaro-10-800x1200.jpg'
      //'https://mummysyum.com/wp-content/uploads/2016/01/cornmeal-porridge.jpg',
      //'https://www.preciouscore.com/wp-content/uploads/2017/09/puff-puff-beans-and-pap-cameroon.jpg',
      //'https://www.curiouscuisiniere.com/wp-content/uploads/2021/05/Akasa-koko-porridge-horiz.jpg'
      
    ],
    time: 30,
    Nutritional_info: '--Calories: 155kcal\n--Total fat: 4g\n--Saturated Fat: 1g\n--Cholesterol: 0mg\n--Sodium: 86mg\n--Total Carbohydrates: 28g\n--Dietary Fibre: 5g\n--Protein: 4g\n--Total Sugar: 3g',
    ingredients: [
      [56, '2 cups'],
      [3, '1 medium'],
      [20, '2 cloves'],
      [21, '1 tablespoon grated'],
      [38, '1 chopped'],
      [1, '1 cup chopped'],
      [17, '1 tablespoon'],
      [57, '1 teaspoon'],
      [45, '1 teaspoon'],
      [18, '2 cups'],
      [41, 'to taste']
    ],
    description:
      '--  In a large pot, heat the olive oil over medium heat. Add the onion, garlic, and ginger, and sauté for 2-3 minutes until softened.\n\n-- Add the diced yam, curry powder, thyme, salt, and pepper, and stir to combine. Add 2 cups of water to the pot and bring to a boil. Reduce heat to low, cover, and let the yam simmer for 15-20 minutes until tender.\n\n-- Add the chopped bell pepper and spinach to the pot, stir to combine, and let cook for an additional 5 minutes until the vegetables are tender and the flavors have melded. Serve the yam porridge hot, garnished with fresh herbs if desired.'
    
  },
  {
    recipeId: 10,
    categoryId: 2,
    title: 'Nigerian Vegetable Frittata',
    photo_url: 'https://urbanfarmie.com/wp-content/uploads/Zucchini-Asparagus-Frittata-1x1-Shot-2.jpg',
    photosArray: [
      'https://sisijemimah.com/wp-content/uploads/2017/02/Vegetable-Omelette-8.jpg',
      'https://www.theroastedroot.net/wp-content/uploads/2019/08/spinach_frittata_with_zucchini-720x720.jpg',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/4839-3-large.jpg?itok=tAo0n4WE'
    ],
    time: 10,
    Nutritional_info: '--Calories: 190kcal\n-- Fat: 13g\n-- Carbohydrates: 6g\n--Protein: 12g',
    ingredients: [
      [48, '6'],
      [3, '1/2 cup chopped'],
      [38, '1/2 cup chopped'],
      [9, '1/2 cup chopped'],
      [1, '1/2 cup chopped'],
      [17, '2 tbsp'],
      [41, 'to taste']
    ],
    description:
      '--  Preheat the oven to 350°F (180°C). In a bowl, whisk together the eggs, salt, and pepper. Heat the olive oil in an oven-safe skillet over medium heat. Add the onions, peppers, and tomatoes and sauté for about 5 minutes until tender.\n\n-- Add the spinach or kale and cook for another 2 minutes. Pour the eggs over the vegetables in the skillet and cook for 2 minutes until the bottom sets.\n\n--Transfer the skillet to the oven and bake for 10-12 minutes or until the top is set and the edges are golden brown. Remove from the oven and let it cool for a few minutes before slicing and serving.'
  },
  {
    recipeId: 11,
    categoryId: 2,
    title: 'Masa (Rice Cake)',
    photo_url: 'https://i.ytimg.com/vi/yt7upym4gDM/maxresdefault.jpg',
    photosArray: [
      'https://i.ytimg.com/vi/yt7upym4gDM/maxresdefault.jpg',
      'https://www.seriouseats.com/thmb/wL-iTNLR9XNPMFsb465i98uSvR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221108-NigerianMasaMaureen-Celestine-2700-d06fd5ea0a9f4486af4bd555e5810aec.JPG',
      ''
    ],
    time: 15,
    Nutritional_info: '--Calories: 150kcal\n--Total fat: 2g\n--Total Carbohydrates: 30g\n--Protein: 3g\n--Saturated fat: 0g\n--Cholesterol: 0mg\n--Sodium: 120mg\n--Dietary Fibre: 2g\n--Total Sugar: 0g',
    ingredients: [
      [58, '2 cups'],
      [50, '1/2 cup'],
      [59, '1/4 teaspoon'],
      [7, '1/4 teaspoon'],
      [18, 'as needed'],
      [49, 'for shallow frying']
    ],
    description:
    '-- In a mixing bowl, combine the rice flour, Greek yogurt, baking powder, and salt (if using), mix well. Gradually add water to the mixture, a little at a time, and stir until you achieve a thick pancake-like batter consistency\n\n-- Preheat a non-stick pan or a cast-iron skillet over medium heat. Lightly grease the pan with a small amount of oil. Pour a small amount of batter onto the pan, about 1/4 cup per Masa.\n\n-- Cook the Masa on one side until bubbles start to form on the surface and the edges start to set, about 2-3 minutes. Flip the Masa and cook on the other side until golden brown, about 1-2 minutes.\n\n-- Remove the cooked Masa from the pan and place it on a plate.\n\n-- Serve the Masa warm as a snack or as a side dish with a diabetic-friendly sauce or protein option.' 
  },
  {
    recipeId: 12,
    categoryId: 2,
    title: 'Oatmeal',
    photo_url: 'https://guardian.ng/wp-content/uploads/life/2016/04/Peanut-Butter-Oat-2-.jpg',
    photosArray: [
      'https://guardian.ng/wp-content/uploads/life/2016/04/Peanut-Butter-Oat-2-.jpg',
      'https://d1c8xu194km6ge.cloudfront.net/assets/326360/Fruit_and_Nut_Oatmeal_HD-1_HD1280.jpg',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/oatmeal-nuts-walnuts-berries.jpg?quality=82&strip=all'
    ],
    time: 20,
    Nutritional_info: '--Calories: 304kcal\n--Fat: 7g\n--Carbohydrates: 49g\n--Protein: 12g\n--Fibre: 6g\n--Sugar: 15g\n--Sodium: 251mg',
    ingredients: [
      [60, '1 cup'],
      [18, '1/2 cup'],
      [61, '1 cup'],
      [51, '1 tbsp'],
      [52, '1 tsp'],
      [7, '1/4 tsp'],
      [53, '1/4 cup'],
      [54, '1/4 cup']
    ],
    description:
      '--  In a medium-sized pot, bring water and salt to a boil.\n-- Add the rolled oats and reduce heat to low.\n-- Add the rolled oats and reduce heat to low\n--Let the oatmeal cook on low heat for 10-15 minutes, stirring occasionally until the oatmeal is thick and creamy.\n--Serve hot and top with chopped nuts and fruits, if desired.'
  },
  {
    recipeId: 13,
    categoryId: 4,
    title: 'Millet pap',
    photo_url: 'https://www.fitnigerian.com/wp-content/uploads/2022/06/How-to-make-pap-akamu-ogi.jpeg',
    photosArray: [
      'https://www.fitnigerian.com/wp-content/uploads/2022/06/How-to-make-pap-akamu-ogi.jpeg',
      'https://somiigbene.com/wp-content/uploads/2023/01/ogi-pap-millet-for-blood-sugar-control-.png',
      'https://somiigbene.com/wp-content/uploads/2023/01/ogi-pap-millet-for-blood-sugar-control-.png'
    ],
    time: 10,
    Nutritional_info: '--Calories: 193kcal\n--Total fat: 1.2g\n--Total Carbohydrates: 41.3g\n--Protein: 4.8g\n--Cholesterol: 0mg\n--Dietary Fibre: 3.5g\n--Sugar: 0.5g',
    ingredients: [
      [62, '2 cups'],
      [18, '5-6 cups'],
      [7, 'a pinch'],
      [51, 'optional'],
      [61, 'optional']
    ],
    description:
      '--In a large pot, add millet flour, salt, water and mix well until you get a smooth batter. Keep stirring frequently for about 10-15 minutes, or until it thickens into a smooth and creamy porridge.\n\n--Once cooked, remove it from the heat and let it cool for a few minutes before serving.\n\n--Serve millet pap hot and enjoy it plain or with your desired toppings such as sugar,honey or milk.'

  },
  {
    recipeId: 14,
    categoryId: 4,
    title: 'Sorghum pap (Kunun-tsamiya)',
    photo_url: 'https://img-global.cpcdn.com/recipes/a8127156606aa179/1200x630cq70/photo.jpg',
    photosArray: [
      'https://img-global.cpcdn.com/recipes/a8127156606aa179/1200x630cq70/photo.jpg',
      'https://aminacookss.files.wordpress.com/2020/04/img_20200407_122945.jpg?w=1024',
      'https://aminacookss.files.wordpress.com/2020/04/img_20200407_122945.jpg?w=1024'
    ],
    time: 10,
    Nutritional_info: '--Calories: 160kcal\n--Total fat: 1g\n--Total Carbohydrates: 32g\n--Protein: 5g\n--Fibre: 4g\n--Sdium: 70mg\n--Potassium: 150mg\n--Calcium: 20mg\n--Iron: 1.8mg',
    ingredients: [
      [63, '2 cups'],
      [18, '5-6 cups'],
      [7, 'a pinch'],
      [51, 'optional'],
      [61, 'optional']
    ],
    description:
      '--In a large pot, add the sorghum flour, salt, and water and mix well until you get a smooth batter.\n\n-- Place the pot over medium heat and cook the batter, stirring frequently, for about 10-15 minutes, or until it thickens.\n\n-- Once the Sorghum Pap is cooked, remove it from the heat and let it cool for a few minutes before serving.\n\n-- Serve the Sorghum Pap hot and enjoy it plain or with your desired toppings such as sugar, honey, or milk.'
  },
  
  {
    recipeId: 17,
    categoryId: 0,
    title: 'Roasted Nuts',
    photo_url: 'https://cookieandkate.com/images/2019/11/sweet-and-spicy-party-nuts-recipe-3.jpg',
    photosArray: [
      'https://cookieandkate.com/images/2019/11/sweet-and-spicy-party-nuts-recipe-3.jpg',
      '',
      ''
    ],
    time: 10,
    Nutritional_info: '--Calories: 147kcal\n--Total fat: 0.5g\n--Total Carbohydrates: 36g\n--Protein: 2g\n--Fibre: 3g\n--Sugar: 26g',
    ingredients: [
      [64, '1 cup'],
      [17, '1 tbsp'],
      [65, '1 tsp'],
      [7, '1 tsp']
    ],
    description:
      '-- Preheat your oven to 350°F (175°C). In a bowl, combine the mixed nuts, olive oil, ground suya spice, and salt (if using).\n\n-- Spread the coated nuts in a single layer on a baking sheet lined with parchment paper. Place the baking sheet in the preheated oven and roast the nuts for 12-15 minutes, or until they are lightly golden and fragrant\n\n-- Remove the baking sheet from the oven and let the nuts cool completely.\n\n-- Once cooled, transfer the roasted nuts to an airtight container or enjoy them immediately as a snack.'

  },
  {
    recipeId: 18,
    categoryId: 0,
    title: 'Baked Plantain chips',
    photo_url: 'https://www.africanbites.com/wp-content/uploads/2013/01/IMG_5834.jpg',
    photosArray: [
      'https://www.africanbites.com/wp-content/uploads/2013/01/IMG_5834.jpg',
      '',
      ''
    ],
    time: 10,
    Nutritional_info: '--Calories: 147kcal\n--Total fat: 0.5g\n--Total Carbohydrates: 36g\n--Protein: 2g\n--Fibre: 3g\n--Sugar: 26g',
    ingredients: [
      [66, '2'],
      [17, '1 tbsp'],
      [34, '1/4 tsp'],
      [33, '1/2 tsp'],
      [31, '1/4 tsp'],
      [7, 'to taste']
    ],
    description:
      '-- Preheat your oven to 375°F (190°C). Peel the ripe plantains and slice them thinly into uniform rounds. In a bowl, combine the olive oil, paprika, garlic powder, onion powder, and salt.\n\n-- Add the plantain slices to the bowl and toss them gently in the seasoned oil mixture. Arrange the plantain slices in a single layer on the prepared baking sheet. Place the baking sheet in the preheated oven and bake for 15-20 minutes.\n\n-- Remove the baking sheet from the oven and let the plantain chips cool completely.\n\n-- Once cooled, transfer the plantain chips to an airtight container or enjoy them immediately.'

  }, 
  {
    recipeId: 19,
    categoryId: 0,
    title: 'Boli (Grilled Plantain)',
    photo_url: 'https://nkechiajaeroh.com/wp-content/uploads/2020/07/Roasted-baked-plantain-Recipe-w-avocado-7.jpg',
    photosArray: [
      'https://nkechiajaeroh.com/wp-content/uploads/2020/07/Roasted-baked-plantain-Recipe-w-avocado-7.jpg',
      'https://eatwellabi.com/wp-content/uploads/2021/05/air-fryer-plantain-1-720x480.jpg',
      'https://eatwellabi.com/wp-content/uploads/2021/05/air-fryer-plantain-1-720x480.jpg' ],
    time: 15,
    Nutritional_info: '--Calories: 122kcal\n--Total fat: 0.4g\n--Saturated fat: 0.1g\n--Cholesterol: 0mg\n--Sodium: 2mg\n--Dietary Fibre: 1.8g\n--Total Carbohydrates: 31.9g\n--Protein: 0.8g\n--Trans Fat: 0g\n--Total Sugar: 16.3g',
    ingredients: [
      [66, ''],
      [17, 'for brushing']
    ],
    description:
      '-- Preheat your grill or ove to medium heat. Peel the plantains and cut them lenghtwise into halves or quarters, depending on the size and shape preferred.\n\n-- Lightly brush the plantain pieces with olive oil on all sides. This will help prevent sticking and promote caramelization.\n\n-- Place the plantains on the grill or in the oven, and cook for about 5-7 minutes on each side, or until they are tender and have grill marks or a slightly charred appearance.\n\n-- Remove the plantains from the grill or oevn and let them cool for a few minutes before serving.'

  },
  {
    recipeId: 21,
    categoryId: 0,
    title: 'Puff-puff',
    photo_url: 'https://www.recipevibes.com/wp-content/uploads/2021/03/puff-puff-picture-b.jpeg',
    photosArray: [
      'https://www.recipevibes.com/wp-content/uploads/2021/03/puff-puff-picture-b.jpeg',
      'https://simshomekitchen.com/wp-content/uploads/2020/03/puff-puff-pepper.jpg',
      ''
    ],
    time: 60,
    Nutritional_info: '-- Calories: 135kcal\n-- Total fat: 45g\n-- Total Carbohydrates: 23g\n--Protein: 3g\n--Saturated fat: 0g\n-- Cholesterol: 0mg\n-- zSodium: 98mg\n-- Dietary Fibre: 2g\n--Total Sugar: 1g',
    ingredients: [
      [67, '2 cups'],
      [68, '1/4 cup'],
      [69, '1 packet'],
      [18, '1 cup warm'],
      [52, '1/2 tsp'],
      [7, '1/2 tsp'],
      [70, 'for deep frying']
    ],
    description:
      '-- Disolve yeast in warm water and let it sit for 5 minutes until frothy In a large bowl, mix the whole wheat flour, sweetner and salt. \n\n-- Add the frothy yeast mixture and vanilla extract to the dry ingredients. Stir until the batter is well combined. The consistency should be thick and sticky. Cover the bowl and let the batter rise in a warm place for 1 hour or until it doubles in size.\n\n--Heat oil in a pan or pot to 350°F (175°C). Drop small portions of the batter into the hot oil and fry until golden brown, turning them occasionally. Fry in batches to avoid overcrowding.\n\n-- Remove the puff puff from the oil and place them on a paper towel-lined plate to drain excess oil. Allow the puff puff to cool slightly before serving.'
  }
];

export const ingredients = [ 
  {
    ingredientId: 0,
    name: 'Egusi (melon) seeds',
    photo_url: 'https://somiigbene.com/wp-content/uploads/2021/03/EGUSI-SEEDS.jpg'
  },
  {
    ingredientId: 1,
    name: 'Spinach leaves',
    photo_url: 'https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg'
  },
  {
    ingredientId: 2,
    name: 'Red palm oil',
    photo_url: 'https://www.nutritionadvance.com/wp-content/uploads/2019/04/Red-Palm-fruit-and-red-palm-oil.jpg'
  },
  {
    ingredientId: 3,
    name: 'Onion',
    photo_url: 'https://images-cdn.welcomesoftware.com/Zz1hOThjNTQ5NDg1ZWZiOGEwYTMxYzljN2RiNmU1ZmJjYw==/ONION_chopped.jpg'
  },
  { 
    ingredientId: 4, 
    name: 'Habanero Peppers',
    photo_url: 'https://media.istockphoto.com/id/1200386657/photo/the-habaneros-pepper-typically-called-ata-rodo-in-yoruba-language.jpg?s=1024x1024&w=is&k=20&c=FNeCEiNXwKECTbs9Qe40ioqvrKr4ssvmHIRVVTWfe-Q='
  },
  {
    ingredientId: 5,
    name: 'Ground Crayfish',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71fpW7hROdL._AC_UL600_SR600,600_.jpg'
  },
  {
    ingredientId: 6,
    name: 'Ground Pepper',
    photo_url: 'https://www.gomarket.com.ng/wp-content/uploads/2021/11/aa.jpeg'
  },
  {
    ingredientId: 7,
    name: 'Salt',
    photo_url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322745_1100-732x549.jpg'
  },
  {
    ingredientId: 8,
    name: 'Okra',
    photo_url:
      'https://images.indianexpress.com/2022/07/FRIED-OKRA-1200.jpg'
  },
  {
    ingredientId: 9,
    name: 'Tomatoes',
    photo_url: 'https://www.evolvingtable.com/wp-content/uploads/2022/07/How-to-dice-a-tomato-15.jpg'
  },
  {
    ingredientId: 10,
    name: 'Chicken breast',
    photo_url: 'https://cdn.shopify.com/s/files/1/0364/9277/1372/products/Chicken_-_Cutlets_A_Square_fa9ce80b-cc94-4e43-b97e-389c90d62979_1024x1024.png?v=1591125012'
  },
  {
    ingredientId: 11,
    name: 'Fish',
    photo_url: 'https://mediacloud.theweek.com/image/private/s--vAllcYui--/v1608247944/263354.jpg'
  },
  {
    ingredientId: 12,
    name: 'Scotch bonnet',
    photo_url:
      'https://24hoursmarket.com/wp-content/uploads/2019/11/IMG_20171130_131548.jpg'
  },
  {
    ingredientId: 13,
    name: 'Ground black pepper',
    photo_url:
      'https://media.istockphoto.com/id/1301622377/photo/ground-black-pepper-in-a-wooden-bowl-and-peppercorns-on-a-white-background-isolated-top-view.jpg?s=612x612&w=0&k=20&c=xPqOOYHRslVzSSlFAyLc9evjCFgLW2oHxgvmw8uR1Nc='
  },
  {
    ingredientId: 14,
    name: 'Kale',
    photo_url:
      'https://tkdfarms.com/wp-content/uploads/2020/11/7631.png'
  },
  {
    ingredientId: 15,
    name: 'Pumpkin leaves (ugwu)',
    photo_url:
      'https://shoponclick.ng/wp-content/uploads/2020/07/Wmart-Ugwu-1.png'
  },
  {
    ingredientId: 16,
    name: 'Bell peppers',
    photo_url:
      'https://www.thespruceeats.com/thmb/KREtRDgPBBevtf_YaN3oavhGQFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-are-bell-peppers-5216131-still-life-9960d1febfd64dde9de5134dc184529e.jpg'
  },
  {
    ingredientId: 17,
    name: 'Olive oil',
    photo_url:
      'https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://media.istockphoto.com/id/1183424538/pt/foto/water-pouring-into-glass.jpg?s=612x612&w=0&k=20&c=DG6q0_Qeh9LzZJ7T083T_LHC8YmMYMFWncmaEs7Oexw='
  },
  {
    ingredientId: 19,
    name: 'Vegetable broth',
    photo_url:
      'https://m.media-amazon.com/images/I/81DJ0+ngsfL._SL1500_.jpg'
  },
  {
    ingredientId: 20,
    name: 'Garlic',
    photo_url:
      'https://www.jessicagavin.com/wp-content/uploads/2019/09/how-to-mince-garlic-3-1200.jpg'
  },
  {
    ingredientId: 21,
    name: 'Ginger',
    photo_url:
      'https://www.thespruceeats.com/thmb/oUW8rSyyLR-JPOcy1HjAdgovQFM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mincedgingerBaibaz-87183aa2c1864c8c8da2805205103754.jpg'
  },
  {
    ingredientId: 22,
    name: 'Ground Cumin',
    photo_url: 'https://pipingpotcurry.com/wp-content/uploads/2020/01/Roasted-cumin-powder-Piping-Pot-Curry-4.jpg'
  },
  {
    ingredientId: 23,
    name: 'Basil (uziza) leaves',
    photo_url:
      'https://www.executivemamaput.com/wp-content/uploads/2015/07/Uziza1-960x771.jpg'
  },
  {
    ingredientId: 24,
    name: 'Ehu seeds(calabash nutmeg)',
    photo_url:
      'https://cdn.pmnewsnigeria.com/2021/02/Ehuru.jpg'
  },
  {
    ingredientId: 25,
    name: 'Parsley',
    photo_url:
      'https://pastures.com.ng/wp-content/uploads/2022/06/parsley.jpg'
  },
  {
    ingredientId: 26,
    name: 'Water leaf',
    photo_url:
      'https://sendmi.com.ng/wp-content/uploads/2023/03/images-12-11.jpeg'
  },
  {
    ingredientId: 27,
    name: 'Beef',
    photo_url: 'https://www.ogbete.com.ng/wp-content/uploads/2020/05/beef-kg.jpg'
  },
  {
    ingredientId: 28,
    name: 'Cow skin',
    photo_url:
      'https://24hoursmarket.com/wp-content/uploads/2019/11/IMG_20180224_132853-scaled.jpg'
  },
  {
    ingredientId: 29,
    name: 'Smoked fish',
    photo_url:
      'https://www.smallstarter.com/wp-content/uploads/2013/02/Dried_and_smoked_fish_export_5.jpg'
  },
  {
    ingredientId: 30,
    name: 'Groundnut oil',
    photo_url: 'https://cdn2.stylecraze.com/wp-content/uploads/2013/08/9-Surprising-Benefits-Of-Peanut-Oil-The-Different-Uses.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground garlic',
    photo_url:
      'https://m.media-amazon.com/images/I/61NPM4bn2SL.jpg'
    
  },
  {
    ingredientId: 32,
    name: 'Ground ginger',
    photo_url: 'https://culturedtable.com/wp-content/uploads/2022/11/fresh-ginger-and-dried-ginger-1024x1024.jpg'
  },
  {
    ingredientId: 33,
    name: 'Paprika',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0170/3174/products/red-ground-paprika.jpg?v=1571438501'
  },
  {
    ingredientId: 34,
    name: 'Onion Powder',
    photo_url:
      'https://guardian.ng/wp-content/uploads/2020/12/onion-powder-500x500-1.jpg'
  },
  {
    ingredientId: 35,
    name: 'Lean Beef mince',
    photo_url:
      'https://themeatboxcompany.co.uk/wp-content/uploads/2020/07/Lean-Beef-Mince-1-a.jpg'
  },
  {
    ingredientId: 36,
    name: 'Turkey breast',
    photo_url: 'https://billkampsmeatmarket.com/wp-content/uploads/2018/11/ws-uncooked-tb-pic-for-web.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green bell Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red bell Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Red onion',
    photo_url:
      'https://media.istockphoto.com/id/1398765557/photo/red-onion-and-cut-in-half-sliced-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PzvZf-h5se3zPCEt9-VnfmDN0MJQR2JE2TehDptUo9U='
  },
  {
    ingredientId: 40,
    name: 'Ground Coriander',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Salt & pepper',
    photo_url:
      'https://secure.img1-fg.wfcdn.com/im/09526771/resize-h755-w755%5Ecompr-r85/4416/44163165/Home+Basics+Salt+and+Pepper+Shaker+Set.jpg'
  },
  {
    ingredientId: 42,
    name: 'Firm white fish fillets',
    photo_url: 'https://thecookful.com/wp-content/uploads/2022/07/Kinds-of-White-Fish-1200x1200-1.jpg'
  },
  {
    ingredientId: 43,
    name: 'Lemon juice',
    photo_url:
      'https://assets.epicurious.com/photos/54e658004f77a310045d66d4/16:9/w_2560%2Cc_limit/6x4.jpg'
  },
  {
    ingredientId: 44,
    name: 'Lamb chops',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/19/78/89/360_F_219788987_GUCQHwBzSYMuJMU9Bh32gEfID8pgBEFI.jpg'
  },
  {
    ingredientId: 45,
    name: 'Dried thyme',
    photo_url: 'https://www.spicejungle.com/media/catalog/product/cache/d05f1268908ab8b5b0991ad652fe1c91/t/h/thymemacro_2.jpg'
  },
  {
    ingredientId: 46,
    name: 'Dried rosemary',
    photo_url:
      'https://elsieorganics.com/wp-content/uploads/2023/02/buy-dried-rosemary-leaves-in-nigeria.jpg'
  },
  {
    ingredientId: 47,
    name: 'Black-eyed Beans',
    photo_url:
      'https://htsplus.ng/wp-content/uploads/2021/06/White-Beans-e1623247019992.jpg'
  },
  {
    ingredientId: 48,
    name: 'Eggs',
    photo_url: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'
  },
  {
    ingredientId: 49,
    name: 'Vegetable oil',
    photo_url:
      'https://msmestoday.com/wp-content/uploads/2021/01/Vegetable-Oil.jpg'
  },
  {
    ingredientId: 50,
    name: 'Plain greek yogurt',
    photo_url:
      'https://www.eatingwell.com/thmb/3D5Biw_HmvJ3f4-EnAGq3DINUzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3758635-8f162783cbf84ec385e122727ecbe396.jpg'
  },
  {
    ingredientId: 51,
    name: 'Honey',
    photo_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/9/0/hatk_honey-pot_s4x3.jpg.rend.hgtvcom.406.406.suffix/1371603793161.jpeg'
  },
  {
    ingredientId: 52,
    name: 'Vanilla extract',
    photo_url:
      'https://www.beanilla.com/wp/wp-content/uploads/2018/06/homemade-vanilla-extract-recipe-2-500x500.jpg'
  },
  {
    ingredientId: 53,
    name: 'Diced fresh fruits',
    photo_url:
      'https://prod-admin-images.s3.ap-south-1.amazonaws.com/7x2Ps1g9Ho9XCt2IpV1E-1/product/01307-Cutmixedfruit07.jpg'
  },
  {
    ingredientId: 54,
    name: 'Chopped nuts',
    photo_url:
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/dd071268-507d-4c2e-a0cf-9efaeeb37237/Derivates/0c38aeb3-738d-40fd-8ece-a271634a70a3.jpg'
  },
  {
    ingredientId: 55,
    name: 'Chia seeds',
    photo_url:
      'https://crushfoodng.com/wp-content/uploads/2020/11/chia_seeds.jpg'
  },
  {
    ingredientId: 56,
    name: 'diced white yam',
    photo_url:
      'https://healthiersteps.com/wp-content/uploads/2021/07/peel-chop-yam.jpg'
  },
  {
    ingredientId: 57,
    name: 'Curry powder',
    photo_url:
      'https://www.rachelcooks.com/wp-content/uploads/2022/03/curry-powder-2022-1500R-11-square.jpg'
  },
  {
    ingredientId: 58,
    name: 'White Rice flour',
    photo_url:
      'https://foodal.com/wp-content/uploads/2022/06/White-Rice-Flour-and-Sweet-Rice-Flour-Whats-the-Difference.jpg'
  },
  {
    ingredientId: 59,
    name: 'Baking powder',
    photo_url:
      'https://www.seriouseats.com/thmb/eMPfsLI7D9h1UxnuoDWTmd_K7tM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__12__20151201-baking-powder-vicky-wasik-2-bc534b7950894f70844dd914295d5951.jpg'
  },
  {
    ingredientId: 60,
    name: 'Rolled oats',
    photo_url:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/23/rolled-oats-linen-wood-surface-white-bowl.jpg.rend.hgtvcom.616.493.suffix/1632429307666.jpeg'
  },
  {
    ingredientId: 61,
    name: 'Milk',
    photo_url:
      'https://img.freepik.com/free-vector/isolated-milk-box-cartoon-style_1308-117384.jpg?w=360'
  },
  {
    ingredientId: 62,
    name: 'Millet flour',
    photo_url:
      'https://www.themarketfoodshop.com/product/millet-flour/millet-flour2/'
  },
  {
    ingredientId: 63,
    name: 'Sorghum flour',
    photo_url:
      'https://www.thespruceeats.com/thmb/k4be9pP1qoIP3UVZr_gfP78lg9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sorghum-flour-5201022-Hero_02-f5b8569624c34c648bb10a0d0f07c9f6.jpg'
  },
  {
    ingredientId: 64,
    name: 'Mixed nuts',
    photo_url:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-nuts-main-image-700-350-bb95ac2.jpg?quality=90&resize=960,872'
  },
  {
    ingredientId: 65,
    name: 'Ground suya spice',
    photo_url:
      'https://i0.wp.com/tamhouston.com/wp-content/uploads/2022/02/nittemon-suya-spice-front.jpg?fit=1080%2C1080&ssl=1'
  },
  {
    ingredientId: 66,
    name: 'Ripe plantain',
    photo_url:
      'https://media.istockphoto.com/id/1169934541/photo/plantain-banana-i.jpg?s=170667a&w=0&k=20&c=uZTsgMnR_RDpeWbkzM7KwDmL5wPF-Yy5nnxYEWMtw9I='
  },
  {
    ingredientId: 67,
    name: 'Whole wheat flour',
    photo_url:
      'https://www.world-grain.com/ext/resources/Article-Images/2020/02/Flour_AdobeStock_169806265_E.jpg?height=667&t=1581347743&width=1080'
  },
  {
    ingredientId: 68,
    name: 'Granulated sweetner',
    photo_url:
      'https://i5.walmartimages.com/asr/e633c120-bc68-420d-955d-2fade21eb549.3fad77251f0afb2a96b95b225d3fee9e.jpeg'
  },
  {
    ingredientId: 69,
    name: 'Active dry yeast',
    photo_url:
    'https://m.media-amazon.com/images/I/71cFFCu86OL._SY550_.jpg'
  },
  {
    ingredientId: 70,
    name: 'Canola oil',
    photo_url:
      'https://www.corolilife.com/wp-content/uploads/2020/04/shutterstock_195750317.jpg'
  }
];
