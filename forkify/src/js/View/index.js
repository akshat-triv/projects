//Controller Module
import Search from './Model/Search';
import List from './Model/List';
import Likes from './Model/Likes';
import {elements,render_loader,remove_loader} from './View/base';
import * as searchView from './View/searchView';
import * as listView from './View/listView';
import Recipe from  './Model/Recipe';
import * as recipeView from './View/recipeView';
import * as likesView from './View/likesView';

/**Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - liked recipes
*/

const state = {};

const controlSearch = async () => {

	//1) Get query from view 
	const query = searchView.getInput();

	if(query){

		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for results
		searchView.clearField();
		searchView.clearResults();
		render_loader(elements.result);

		// 4) search for recipe
		await state.search.getResults();

		//5 Render results on UI
		remove_loader();
		searchView.renderResult(state.search.result);
		

	}
};

elements.searchForum.addEventListener('submit',e =>{
	e.preventDefault();
	controlSearch();
});

elements.buttonplace.addEventListener('click',g=>{
	const btn = g.target.closest('.btn-inline');
	if(btn){
		const goToPage = parseInt(btn.dataset.goto,10);
		searchView.clearResults();
		searchView.renderResult(state.search.result,goToPage);
	}
});

//Recipe Controller

const recipeController = async () => {
    //Get ID from the URL 
    const id = window.location.hash.replace('#','');

    if(id){

    	//prepare for the UI
    	recipeView.clearRecipe();
    	if(state.search)searchView.highlightSelected(id);
    	render_loader(elements.recipe);

    	//Create new recipe object
    	state.recipe = new Recipe(id);

    	//Get recipe data and parse the ingrediants
    	await state.recipe.getRecipe();
    	state.recipe.parseIngredients();

    	//Calculate the servings and time
    	state.recipe.calcTime();
    	state.recipe.calcServings();

    	//render Recipe
    	remove_loader();
    	recipeView.renderRecipe(state.recipe);
    	if(state.likes.isLiked(id)){
    		likesView.toggLikeBtn(true);
    	}
    }
}; 

/**
List Controller
****/
const listControl = () => {

	//creating a new list if not present already
	if(!state.list)state.list = new List;

	//adding ingredients to data model and to the UI
	state.recipe.ingredients.forEach(el => {
		let curlist = state.list.addItem(el.count,el.unit,el.ingredient);
		listView.renderList(curlist);
	});
};


/**
*Likes Controller
*****************
*/

const likesController = () => {

	//Creating new Likes in state
	if(!state.likes)state.likes = new Likes;

	//checking is recipe already in model
	const currID = state.recipe.id;

    if(state.likes.isLiked(currID)){

    	//deleting the recipe in the data model
		state.likes.deleteLike(currID);

		//toggle the like button
		likesView.toggLikeBtn(false);
		likesView.toggMenuLike(state.likes.getNumLikes());

		//changing the UI
		likesView.deleteLikes(currID);

	}else{

		//adding the item to the likes model
		const currlike = state.likes.addLike(state.recipe);

		//toggle the like Button
		likesView.toggLikeBtn(true);
		likesView.toggMenuLike(state.likes.getNumLikes());

		//changing the UI
		likesView.renderLikes(currlike);
	}




};


//event handeller for local storage

window.addEventListener('load',()=>{

	state.likes = new Likes();

	//Restore likes
	state.likes.readStorage();

	//Toggle like menu button
	likesView.toggMenuLike(state.likes.getNumLikes());

	//Rendering the exiting Likes
	state.likes.likes.forEach(like => likesView.renderLikes(like));
});

// event handellers - recipe controll
['hashchange','load'].forEach(event => window.addEventListener(event,recipeController));

elements.recipe.addEventListener('click',e=>{
	if(e.target.matches('.btn-decrease,.btn-decrease *')){
		//decrease button is clicked
		if(state.recipe.serving > 1){
			state.recipe.updateServing('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	}
	else if(e.target.matches('.btn-increase,.btn-increase *')){
		//inc btn clicked
		state.recipe.updateServing('inc');
		recipeView.updateServingsIngredients(state.recipe);
	}else if(e.target.matches('.recipe__btn--add,.recipe__btn--add *')){
		listControl();
	}else if(e.target.matches('.recipe__love , .recipe__love *')){
		likesController();
	}
});

elements.shopping.addEventListener('click',n => {
	const id = n.target.closest('.shopping__item').dataset.itemid;

	//Handel the delete button
	if(n.target.matches('.shopping__delete , .shopping__delete *')){
		//delete from the Model
		state.list.deleteItem(id);

		//delete from the UI
		listView.deleteItem(id);
	}else if(n.target.matches('.shopping__count--value')){
		const val = parseFloat(n.target.value,10);
		state.list.updateCount(id,val);
	}
	console.log(state);
});


