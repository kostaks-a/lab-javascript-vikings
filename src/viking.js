// Soldier
class Soldier {
    constructor ( hp , str){
        this.health= hp
        this.strength = str
        
    }
    attack(){return this.strength}
    receiveDamage(dmg){
        this.health = this.health - dmg
     }
    
}

// Viking
class Viking extends Soldier{
    constructor (vikName , vikHp , vikStr){
        super ( vikHp , vikStr)
        this.name = vikName
        
    }
    receiveDamage(dmg){
        this.health = this.health - dmg
        if ( this.health > 0 ){

            return `${this.name} has received ${dmg} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor (saxHp, saxStr){
        super (saxHp , saxStr)
    }
    receiveDamage(dmg){
        this.health = this.health - dmg
        if ( this.health > 0 ){

            return `A Saxon has received ${dmg} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
       
}
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){

    let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let attack = randomSax.receiveDamage(randomVik.strength)
    
    this.saxonArmy.forEach((element, i) => {
            if(element.health <= 0) {
                this.saxonArmy.splice(i, 1) 
            }
        });
    return attack
        
        
    }
    saxonAttack(){

        let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)


        if ( this.vikingArmy[0].health <= 0)
        {
            this.vikingArmy.splice(0,1)
        }

        return result

    }


    showStatus(){

        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else if ( this.saxonArmy.length >=1 && this.vikingArmy.length >=1  )
            return `Vikings and Saxons are still in the thick of battle.`
    }
}




