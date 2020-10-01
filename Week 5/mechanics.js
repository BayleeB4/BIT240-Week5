	var game = {
		user: human,
		monsters: listOfMonsters
	}
	
	// Player Information
	// Player
	/*var human_max_health = 100;
	var human_min_health = 0;
	// Items
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
	var showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human_name + "<br />" + "Health: " + human_health + "<br />" + "Potions: " + human_potions;
	var showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;
	//
	
	function skirmish(){		
		// Attack
		if(enemy_health > 0 && human_health > 0){
		var playerAttack = enemy_health = enemy_health - human_damage < 0 ? 0 : enemy_health -= human_damage;
		var enemyAttack = human_health = human_health - enemy_damage < 0 ? 0 : human_health -= enemy_damage;
		
		// Update Health
		showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human_name + "<br />" + "Health: " + human_health + "<br />" + "Potions: " + human_potions;
		showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;
		//
		console.log(human_health);
		}else if(enemy_health <= 0){
			console.log("You killed the " + enemy_name);
			alert("The game is over! You win!");
		}else if (human_health <= 0){
			console.log("The " + enemy_name + " killed you!");
			alert("The game is over! You Lose :(");
		}
	}
	
	function drinkPotion(){
		// Drink Potion
		if(human_health < 100 && human_potions >= 1){
			human_health = human_health + 10 < 100 ? 100 : human_health += 10;
			human_potions--;
			showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + human_name + "<br />" + "Health: " + human_health + "<br />" + "Potions: " + human_potions;
		}else if(human_potions === 0){alert("You have no more potions!");}
	}
	
	function generateRandomNumber(maxNumber){return Math.floor(Math.random()*maxNumber);}
