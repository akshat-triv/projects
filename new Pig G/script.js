let scores,temp,activePlayer,dice,state;

function init(){
	scores=[0,0];
	temp=0;
	activePlayer=0;
	state=1;
	document.getElementById('score-1').textContent=0;
	document.getElementById('local-1').textContent=0;
	document.getElementById('score-2').textContent=0;
	document.getElementById('local-2').textContent=0;
	document.getElementById('player-1').classList.add('active');
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('n-1').classList.remove('winner');
	document.getElementById('n-2').classList.remove('winner');
	document.getElementById('player-2').classList.remove('active');
	document.getElementById(`player-${activePlayer+1}`).classList.add('active');
}

function change(){

	activePlayer ? activePlayer=0 : activePlayer=1;

	document.getElementById('player-1').classList.remove('active');
	document.getElementById('player-2').classList.remove('active');
	document.getElementById(`player-${activePlayer+1}`).classList.add('active');
	temp=0;
}

init();

document.querySelector('.btn-roll').addEventListener('click',() => {
	if(state){
		dice= Math.ceil(Math.random()*6);
		dice ? dice=dice : dice++;
		document.querySelector('.dice').src = `img/${dice}.png`;
		document.querySelector('.dice').style.display = 'block';
		if(dice!=1){
			temp=temp+dice;
			document.querySelector(`#local-${activePlayer+1}`).textContent=temp;
		}else{
			document.querySelector(`#local-${activePlayer+1}`).textContent=0;
			change();
		}
	}	
});

document.querySelector('.btn-hold').addEventListener('click',()=>{

	if(state){
		scores[activePlayer] += temp;
		document.querySelector(`#score-${activePlayer+1}`).textContent = scores[activePlayer];
		document.getElementById(`local-${activePlayer+1}`).textContent=0;
		document.querySelector('.dice').style.display = 'none';
		if(scores[activePlayer]>=100){
			document.querySelector(`#n-${activePlayer+1}`).classList.add('winner');
			document.querySelector(`#n-${activePlayer+1}`).textContent = '!WINNER!';
			state=0;
		}else{
			change();
		}
	}
	
});

document.querySelector('.btn-new').addEventListener('click',()=>{
	document.querySelector(`#n-${activePlayer+1}`).textContent = `player-${activePlayer+1}`;
	init();
});