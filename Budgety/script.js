//User Interface module

var UIControl = (function(){
	var DOMstrings = {
		DOMtype : '.add__type',
		DOMdes : '.add__description',
		DOMvalue : '.add__value',
		DOMbtn : '.add__btn',
		DOMinclist : '.income__list',
		DOMexplist : '.expenses__list',
		budgetLabel : '.budget__value',
		incomeLabel : '.budget__income--value',
		expensesLabel : '.budget__expenses--value',
		percentageLabel : '.budget__expenses--percentage',
		container : '.container',
		exppercentageLabel : '.item__percentage',
		month : '.budget__title--month'
	};

	var numberFormat = function(num,type){
		var numSplit,int,dec,i;
		/*
		apply decimals upto 2 position
		+ or - should appear
		commas for thousands
		*/
		num=Math.abs(num);
		num=num.toFixed(2);
		numSplit = num.split('.');

		int=numSplit[0];

		dec=numSplit[1];

		if(int.length > 3){
			i=int.length-3;
			console.log(int,int.length);
			int = int.substr(0,i) + ',' + int.substr(i,3);
			var myString = int.split(',');
			var myString1 = myString[0];
			console.log(myString1,myString1.length);
			if(myString1.length > 2){
				var g = myString1.length;
				var f =g-2;
				while(f >= 1){
					myString1 = myString1.substr(0,f) + ',' + myString1.substr(f,g);
					f=f-2;
				}
			}
			int = myString1 + ',' + myString[1]; 
		}

		return (type==='inc' ? '+' : '-') + ' ' + int + '.' + dec;

	};

	var listforEach = function(list,callBack){
    		for(var i=0;i<list.length;i++)
    			callBack(list[i],i);

    };

    return {
    	getDOMstrings : function(){
    		return DOMstrings;
    	},
    	getValue : function() {
    		return {
    			type : document.querySelector(DOMstrings.DOMtype).value,
    			description : document.querySelector(DOMstrings.DOMdes).value,
    			value : parseFloat(document.querySelector(DOMstrings.DOMvalue).value)
    		};
    	},
    	additemUI : function(obj,type){
    		var html,newhtml,element;
    		if(type==='inc'){
    			element=DOMstrings.DOMinclist;
    			html='<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    		}else if(type==='exp'){
    			element=DOMstrings.DOMexplist;
    			html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">24%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    		}
    		newhtml = html.replace('%id%',obj.ID);
    		newhtml = newhtml.replace('%description%',obj.description);
    		newhtml = newhtml.replace('%value%',numberFormat(obj.value,type));

    		document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
    	},
    	deleteitemUI : function(selectorID){
    		var el = document.getElementById(selectorID);
    		el.parentNode.removeChild(el);
    	},
    	clearfields : function(){
    		var fields,fieldsarr;
    		fields = document.querySelectorAll(DOMstrings.DOMdes + ',' + DOMstrings.DOMvalue);
    		fieldsarr = Array.prototype.slice.call(fields);
    		fieldsarr.forEach(function(current,index,array){
    			current.value = "";
    		});
    		fieldsarr[0].focus();
    	},
    	updateBudget : function(obj){
    		var type;

    		obj.bud > 0 ? type='inc' : type='exp';

    		document.querySelector(DOMstrings.budgetLabel).textContent=numberFormat(obj.bud,type);
    		document.querySelector(DOMstrings.incomeLabel).textContent=numberFormat(obj.income,'inc');
    		document.querySelector(DOMstrings.expensesLabel).textContent=numberFormat(obj.expenses,'exp');
    		if(obj.percen > 0){
    			document.querySelector(DOMstrings.percentageLabel).textContent=obj.percen + '%';
    		}else{
    			document.querySelector(DOMstrings.percentageLabel).textContent='--';
    		}

    	},
    	getmonth : function(){
    		var now,month,months,year;
    		now = new Date();
    		months = ['January','February','March','May','April','June','July','August','September','October','November','December'];
    		month = now.getMonth();
    		year = now.getFullYear();

    		document.querySelector(DOMstrings.month).textContent = months[month] + ' ' + year + ' ';

    	},
    	changeType : function(){
    		var types;
    		types = document.querySelectorAll(DOMstrings.DOMvalue + ',' + DOMstrings.DOMdes + ',' + DOMstrings.DOMtype);
    		listforEach(types,function(cur){
    			cur.classList.toggle('red-focus');
    		});
    		document.querySelector(DOMstrings.DOMbtn).classList.toggle('red');
    	},
    	updatePercen : function(obj2){
    		var list;
    		list = document.querySelectorAll(DOMstrings.exppercentageLabel);

    		listforEach(list,function(current,index){
    			if(obj2.arrper[index] > 0){
    				current.textContent = obj2.arrper[index] + '%';
    			}else{
    				current.textContent = '--';
    			}
    		});

    		
    	}
    };

})();


//Data module
var DataControl = (function(){

	var Expense = function(ID,description,value) {
		this.ID=ID;
		this.description=description;
		this.value=value;
	};
	var Income = function(ID,description,value) {
		this.ID=ID;
		this.description=description;
		this.value=value;
	};

	var data = {
		allitems : {
			exp:[],
			inc:[]
		},
		totalitems : {
			exp:0,
			inc:0
		},
		budget : 0,
		percentage : 0
	};

	//function to create total expenses and income.

	var totals = function(type){
		var sum = 0;
		data.allitems[type].forEach(function(cur){
			sum += cur.value;
		});
		data.totalitems[type] = sum;
	};

    
    return {
    	additem : function(type,description,value){
    		var aa,newitem;
    		if(data.allitems[type].length > 0){
    		    aa = data.allitems[type][data.allitems[type].length - 1].ID + 1;
            }else{
            	aa=0;
            }
    		if(type==='inc'){
    			newitem = new Income(aa,description,value);
    			data.allitems.inc.push(newitem);
    		}
    		else if(type=='exp'){
    			newitem = new Expense(aa,description,value);
    			data.allitems.exp.push(newitem);
    		}
    		return newitem;
    	},
    	deleteitem : function(type,id){
    		var IDs,index;

    		//create an array of just id's of the objects present in the array
    		IDs = data.allitems[type].map(function(cur){
    			return cur.ID;
    		});

    		//now find the index of the ID from the IDs array
    		index = IDs.indexOf(id);

    		//now delete the whole object from original array
    		data.allitems[type].splice(index,1);
    	},
    	calculateBudget : function(){

    		//sum of the income, expenses , by which you'll calculate the budget
    		totals('inc');
    		totals('exp');

    		//calculate the budget income - expenses
    		data.budget = data.totalitems.inc - data.totalitems.exp;

    		//calculate the percentage
    		if(data.totalitems.inc>0){
    		    data.percentage = Math.round((data.totalitems.exp/data.totalitems.inc)*100);
    	    }else{
    	    	data.percentage = -1;
    	    }
    	},
    	getBudget : function(){
    		return {
    			income : data.totalitems.inc,
    			expenses : data.totalitems.exp,
    			bud : data.budget,
    			percen : data.percentage
    		};
    	},
    	exppercen : function(){
    		var arrper,arrid;

    		arrper = data.allitems['exp'].map(function(cur){
    			return cur.value;
    		});

    		arrid = data.allitems['exp'].map(function(cur){
    			return cur.ID;
    		});

    		for(var i=0;i<arrper.length;i++){
    			if(data.totalitems.inc > 0){
    				arrper[i]=Math.round((arrper[i]/data.totalitems.inc)*100);
    			}else{
    				arrper[i]=-1;
    			}
    		}
    		return {
    			arrper : arrper,
    			arrid : arrid
    		};
    	},
    	testing : function(){
    		console.log(data.allitems);
    	}
    };


})();





//Controller module
var Controller = (function(UICtrl,DataCtrl){

	var event = function(){
		var Dstrings = UICtrl.getDOMstrings();

		document.querySelector(Dstrings.DOMbtn).addEventListener('click',CtrlAddItem);
    
        document.addEventListener('keypress',function(e){
    	        if(e.keycode===13 || e.which===13)
    	            CtrlAddItem();
        });	

        document.querySelector(Dstrings.container).addEventListener('click',CtrlDeleteItem);
        document.querySelector(Dstrings.DOMtype).addEventListener('change',UICtrl.changeType);
	};

	var CtrlAddItem = function(){
		var input,newitem,exppercen;
		input = UICtrl.getValue();
		if(input.description!="" && !isNaN(input.value) && input.value > 0){
		    newitem = DataCtrl.additem(input.type,input.description,input.value);
            UICtrl.additemUI(newitem,input.type);
            UICtrl.clearfields();
        }
        
        BudgetCtrl(input);
        percen();
	};

	var CtrlDeleteItem = function(evg){
		var ItemID,type,ID,ItemIDsplit;
		//delegation event handeling(event bubbling)
		ItemID = evg.target.parentNode.parentNode.parentNode.parentNode.id;
		ItemIDsplit=ItemID.split("-");
		type=ItemIDsplit[0];
		ID=parseInt(ItemIDsplit[1]);

		//make changes to the internal datastructure
		DataCtrl.deleteitem(type,ID);

		//make changes to the UI
		UICtrl.deleteitemUI(ItemID);

		//Update the Budget
		BudgetCtrl();

		percen();
	};

	var BudgetCtrl = function(inputs){

		//calculate budget with the input values.
        DataCtrl.calculateBudget();

        //recieve caculated budget
        var budget = DataCtrl.getBudget();

        //change the UI
        UICtrl.updateBudget(budget);
	}

	var percen = function(){

		var exparr;

		//Update the datastructure
		exparr=DataCtrl.exppercen();

		//Update the UI
		UICtrl.updatePercen(exparr);
	};


	return {
    	addevent : function(){
    		console.log("It works");
    		event();
    		UICtrl.updateBudget({
    			income : 0,
    			expenses : 0,
    			bud : 0,
    			percen : -1
    		});
    		UICtrl.getmonth();
    	}
    }

})(UIControl,DataControl);



Controller.addevent();
















