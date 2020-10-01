	var game = {
		user: human,
		monsters: listOfMonsters
	}
	
	// Player Information
	/*var human_max_health = 100;
	var human_min_health = 0;
	var human_max_potions = 3;
	var human_min_potions = 0;*/
	var human_name = human.name;
	var human_health = human.hp;
	var human_damage = human.damage;
	var human_potions = human.potions;
	console.log(human_name + "\nHealth: " + human_health + " " +"\nDamage: " + human_damage + " " +"\nPotions: " + human_potions);
	//
	
	// Enemy Information
	var enemy_index = generateRandomNumber(game.monsters.length);		
	var enemy_name = game.monsters[enemy_index].name;
	var enemy_health = game.monsters[enemy_index].hp;			
	var enemy_damage = game.monsters[enemy_index].damage;
	console.log(enemy_name + "\nHealth: " + enemy_health + " " +"\nDamage: " + enemy_damage);
	//
	
	// Display Stats
	var showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human.name + "<br />" + "Health: " + human.hp + "<br />" + "Potions: " + human.potions;
	var showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;
	//
	
	function skirmish(){		
		// Attack
		if(enemy_health > 0 && human.hp > 0){
		var playerAttack = enemy_health = enemy_health - human.damage < 0 ? 0 : enemy_health -= human.damage;
		var enemyAttack = human.hp = human.hp - enemy_damage < 0 ? 0 : human.hp -= enemy_damage;
		
		// Update Health
		showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human.name + "<br />" + "Health: " + human.hp + "<br />" + "Potions: " + human.potions;
		showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;
		//
		console.log(human.hp);
		//console.log("You hit the enemy for " + playerAttack);
		//console.log("The monster hit you for  " + enemyAttack);
		}else if(enemy_health <= 0){
			console.log("You killed the " + enemy_name);
			alert("The game is over! You win!");
		}else if (human.hp <= 0){
			console.log("The " + enemy_name + " killed you!");
			alert("The game is over! You Lose :(");
		}
	}
	
	function drinkPotion(){
		// Drink Potion
		if(human.hp < 100 && human.potions >= 1){
			human.hp += 10;
			human.potions--;
			showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human.name + "<br />" + "Health: " + human.hp + "<br />" + "Potions: " + human.potions;
		}else if(human.potions === 0){alert("You have no more potions!");}
	}
	
	function generateRandomNumber(maxNumber){return Math.floor(Math.random()*maxNumber);}
