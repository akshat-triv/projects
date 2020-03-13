import uniqid from 'uniqid';

export default class List {

	constructor(){
		this.lists = [];
	}

	addItem(count,unit,ingredient){
       const list = {
       		id : uniqid(), 
       		count,
        	unit,
        	ingredient
    	};
    	this.lists.push(list);
    	return list;
	}

	deleteItem(id){
		const itemIndex = this.lists.findIndex(el => el.id===id);
		this.lists.splice(itemIndex,1);
	}

	updateCount(id,newCount){
		this.lists.find(el => el.id===id).count = newCount;
	}
}