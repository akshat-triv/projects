import {elements} from './base';

export const toggLikeBtn = con => {

	const iconString = con ? 'icon-heart' : 'icon-heart-outlined';

	document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
};

export const renderLikes = likes =>{
	const markup = `
						<li>
                            <a class="likes__link" href="#${likes.id}">
                                <figure class="likes__fig">
                                    <img src="${likes.image}" alt="${likes.title}">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">${likes.title}</h4>
                                    <p class="likes__author">${likes.publisher}</p>
                                </div>
                            </a>
                        </li>
	`;

	elements.likelist.insertAdjacentHTML('beforeend',markup);
};

export const deleteLikes = id =>{

	const el = document.querySelector(`.likes__link[href="#${id}"]`).parentElement;

	el.parentElement.removeChild(el);

}

export const toggMenuLike = numLikes => {
	elements.likesMenu.style.visibility = numLikes>0 ? 'visible' : 'hidden';
};