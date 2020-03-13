import {elements,elementStrings} from './base';

export const getInput = () => elements.searchInput.value;

export const clearField = () => {
	elements.searchInput.value = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
	resultsArr.forEach(el => {
		el.classList.remove('results__link--active');
	});
	document.querySelector(`a[href = "#${id}"]`).classList.add('results__link--active');
}

export const clearResults = () => {
	elements.searchResList.innerHTML = '';
	elements.buttonplace.innerHTML = '';
};

const limitstring = (string, limit=17) => {
	if(string.length > limit){
		const newString = [];
		string.split(" ").reduce((acc,cur) => {
			if(acc + cur.length <= limit){
				newString.push(cur);
			}
			return acc+cur.length;
		},0);
		return `${newString.join(" ")}...`;
	}
	return string;
};

const recipe = data => {
	const markUp = `
	<li>
        <a class="results__link" href="#${data.recipe_id}">
                    <figure class="results__fig">
                        <img src="${data.image_url}" alt="${data.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitstring(data.title)}</h4>
                        <p class="results__author">${data.publisher}</p>
                    </div>
        </a>
    </li>
	`;
	elements.searchResList.insertAdjacentHTML('beforeend',markUp);
};

const selectbutton = (type,page) => {
    let button;
	if(type==='prev'){
		button = `
			<button class="btn-inline results__btn--${type}" data-goto=${page}>
				<span>Page ${page}</span>
        		<svg class="search__icon">
            		<use href="img/icons.svg#icon-triangle-left"></use>
        		</svg>
    		</button>
                	`;

	}else if(type==='next'){
	    button = `
			<button class="btn-inline results__btn--${type}" data-goto=${page}>
				<span>Page ${page}</span>
        		<svg class="search__icon">
            		<use href="img/icons.svg#icon-triangle-right"></use>
        		</svg>
    		</button>
                	`;
    }
    return button;
};

const renderButtons = (page,pages) =>{

	let buttons;

	if(page===1 && pages>1){
		buttons=selectbutton('next', page+1);
	}else if(page<pages){
		buttons =`${selectbutton('prev', page-1)}
		${selectbutton('next', page+1)}`;

	}else if(page===pages && pages>1){
		buttons = selectbutton('prev', page-1);
	}
	elements.buttonplace.insertAdjacentHTML('beforeend',buttons);
};

export const renderResult = (recipes,page=1,resPerPage=10) => {
	const pages = Math.ceil(recipes.length/resPerPage);
	const start = (page-1)*resPerPage;
	const end = page*resPerPage;

	const currec = recipes.slice(start,end);
	currec.forEach(recipe);

	renderButtons(page,pages);
};