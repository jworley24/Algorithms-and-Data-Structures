let drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  function getDrinkByProfession(param){
    return drinks[param.toLowerCase()] || 'Beer'
  }