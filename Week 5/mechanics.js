 	var game = {
		user: player,
		monsters: listOfMonsters
	}
	
	// Player Information
	var player_name = player.name;
	var player_health = player.hp;
	var player_damage = player.damage;
	var player_potions = player.potions;
	var player_gold = 0;
	console.log(player_name 
	+ "\nHealth: " + player_health + " " 
	+ "\nDamage: " + player_damage + " " 
	+ "\nPotions: " + player_potions + " "
	+ "\nGold: " + player_gold);
	//
	
	// Enemy Information
	var enemy_index = generateRandomNumber(game.monsters.length);		
	var enemy_name = game.monsters[enemy_index].name;
	var enemy_health = game.monsters[enemy_index].hp;			
	var enemy_damage = game.monsters[enemy_index].damage;
	var enemy_gold = game.monsters[enemy_index].gold;
	console.log(enemy_name
	+ "\nHealth: " + enemy_health + " " 
	+ "\nDamage: " + enemy_damage + " "
	+ "\nGold Dropped: " + enemy_gold);
	//
	
	// Display Stats
	var showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + player_name 
	+ "<br />" + "Health: " + player_health
	+ "<br />" + "Potions: " + player_potions
	+ "<br />" + "Gold: " + this.player_gold;
	
	var showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name
	+ "<br />"  + "Health: " + enemy_health;
	//
	
	function skirmish(){
		// Attack
		if(enemy_health > 0 && player_health > 0){
		var playerAttack = enemy_health = enemy_health - player_damage < 0 ? 0 : enemy_health -= player_damage;
		var enemyAttack = this.player_health = player_health - enemy_damage < 0 ? 0 : player_health -= enemy_damage;
		
		// Update Health
		showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + player_name 
		+ "<br />" + "Health: " + this.player_health 
		+ "<br />" + "Potions: " + this.player_potions
		+ "<br />" + "Gold: " + this.player_gold;
		showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;
		//
		console.log(player_health);
		}else if(enemy_health <= 0){
			console.log("You killed the " + enemy_name);
			document.getElementById("playerStats").innerHTML = "Player: " + player_name 
			+ "<br />" + "Health: " + this.player_health 
			+ "<br />" + "Potions: " + this.player_potions
			+ "<br />" + "Gold: " + this.player_gold;
			showKillText = document.getElementById("killText").style.display = "block";
			showKillText = document.getElementById("killText").innerHTML = "You killed the " + enemy_name + " !";
			showContinueButton = document.getElementById("continueButton").style.display = "inline-block";
			showContinueButton = document.getElementById("shopButton").style.display = "inline-block";
			//alert("You killed the " + enemy_name);
		}else if (player_health <= 0){
			console.log("The " + enemy_name + " killed you!");
			setTimeout("location.reload(true);",500);
			alert("The game is over! You Lose :(");
		}
	}
	
	function drinkPotion(){
		// Drink Potion
		if(player_health < 100 && player_potions >= 1){
			this.player_health = player_health + 10 > 100 ? 100 : player_health += 10;
			this.player_potions--;
			showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + player_name 
			+ "<br />" + "Health: " + player_health 
			+ "<br />" + "Potions: " + player_potions
			+ "<br />" + "Gold: " + this.player_gold;
		}else if(player_potions === 0){alert("You have no more potions!");}
	}
	
	function continueButton(){
		showKillText = document.getElementById("killText").style.display = "none";
		showContinueButton = document.getElementById("continueButton").style.display = "none";
		showContinueButton = document.getElementById("shopButton").style.display = "none";
		
		player_gold += enemy_gold;
		console.log(this.player_gold);
		console.log(this.enemy_gold);
		
		var new_enemy_index = generateRandomNumber(game.monsters.length);
		enemy_name = game.monsters[new_enemy_index].name;
		enemy_health = game.monsters[new_enemy_index].hp;			
		enemy_damage = game.monsters[new_enemy_index].damage;
		enemy_gold = game.monsters[new_enemy_index].gold;
		showPlayerStats = document.getElementById("playerStats").innerHTML = "Player: " + player_name
		+ "<br />" + "Health: " + this.player_health 
		+ "<br />" + "Potions: " + this.player_potions
		+ "<br />" + "Gold: " + this.player_gold;
		showEnemyStats = document.getElementById("EnemyStats").innerHTML = "Enemy: " + enemy_name + "<br />"  + "Health: " + enemy_health;		
	}
	
	function shop(){
		
	}
	
	function generateRandomNumber(maxNumber){return Math.floor(Math.random()*maxNumber);}
