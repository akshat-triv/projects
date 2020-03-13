export const elements = {
	searchForum : document.querySelector('.search'),
	searchInput : document.querySelector('.search__field'),
	result : document.querySelector('.results'),
	searchResList : document.querySelector('.results__list'),
	buttonplace : document.querySelector('.results__pages'),
	recipe : document.querySelector('.recipe'),
	shopping : document.querySelector('.shopping__list'),
	likelist : document.querySelector('.likes__list'),
	likesMenu : document.querySelector('.likes__field')
};

export const render_loader = parent => {
	const loader = `
	<div class="loader">
		<svg>
			<use href = "img/icons.svg#icon-cw"></use>
		</svg>
	</div>
	`;
	parent.insertAdjacentHTML('afterbegin',loader);
};

export const remove_loader = () => {
	const loader = document.querySelector(`.loader`);
	if(loader)
	loader.parentElement.removeChild(loader);
};