export default class Likes {

	constructor(){
		this.likes = [];
	}

	addLike(recipe){
		const like = {
			title : recipe.title,
			publisher : recipe.publisher,
			image : recipe.image,
			id : recipe.id
		}
		this.likes.push(like);
		this.persistData();
		return like;
	}

	deleteLike(id){
		const index = this.likes.findIndex(el => el.id===id);
		this.likes.splice(index,1);
	}

	isLiked(id){
		return this.likes.findIndex(el => el.id===id)!=-1;
	}

	getNumLikes(){
		return this.likes.length;
	}

	persistData(){
		localStorage.setItem('likes',JSON.stringify(this.likes));
	}

	readStorage(){
		const storage = JSON.parse(localStorage.getItem('likes'));

		//Restore from the likes
		if(storage)this.likes = storage;
	}
}