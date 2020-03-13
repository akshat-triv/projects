import axios from 'axios';

export default class recipes {

	constructor(id){
		this.id = id;
	}

	async getRecipe(){
		try{
			const request = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
			this.title = request.data.recipe.title;
			this.publisher = request.data.recipe.publisher;
			this.ingredients = request.data.recipe.ingredients;
			this.url = request.data.recipe.source_url;
			this.image = request.data.recipe.image_url;
			this.publisher_url = request.data.recipe.publisher_url;
			this.socialrank = request.data.recipe.social_rank;
			
		}catch(error){
			alert(error);
		}
	}

	calcTime(){
		//assuming that we need 15 min for each ingrediants
		const numIng = this.ingredients.length;
		const periods = Math.ceil(numIng/3);
		this.time = periods*15;
	}

	calcServings(){
		this.serving = 4;
	}

	parseIngredients(){
		const unitsLong = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups','pounds'];
		const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound','kg','g'];

		const newIngredients = this.ingredients.map(ingredient => {

			//1) Uniform units
			let ingredients = ingredient.toLowerCase();
			unitsLong.forEach( (unit,i) => {
				ingredients = ingredients.replace(unit,unitsShort[i]);
			});

			//2) Remove Parenthesis
			ingredients = ingredients.replace(/ *\([^)]*\) */g,' ');

			//3) Parse Ingredients into count - unit - ingredient
			const arrIng = ingredients.split(" ");
			const unitIndex = arrIng.findIndex(el => unitsShort.includes(el));

			let objIng ;
			if(unitIndex > -1){
				//there is a unit
				// Ex. 4 1/2 cups , arrCount is [4,1/2]
				//Ex. 4 cups , arrCount is [4]
				const arrCount = arrIng.slice(0,unitIndex);

				let count ;

				if(arrCount.length === 1){
					count = eval(arrIng[0].replace('-','+'));
				}else{
					count = eval(arrIng.slice(0,unitIndex).join('+'));
				}

				objIng = {
					count,
					unit : arrIng[unitIndex],
					ingredient : arrIng.slice(unitIndex+1).join(' ')
				};

			}else if(parseInt(arrIng[0],10)){
				//there is no unit but a number is at first position
				objIng = {
					count : parseInt(arrIng[0], 10),
					unit : '',
					ingredient : arrIng.slice(1).join(' ')
				}
			}else if(unitIndex===-1){
				//there is'nt any unit and no number in 1 st position
				objIng = {
					count : 1,
					unit : '',
					ingredient
				}
			}

			return objIng;
		});

		this.ingredients = newIngredients;
	}

	updateServing(type){
		//servings
		const newServings = type==='dec'? this.serving-1 : this.serving+1;

		//Ingredients

		this.ingredients.forEach(ing => {
			ing.count = ing.count*(newServings/this.serving);
		});
		this.serving = newServings;
	}
};