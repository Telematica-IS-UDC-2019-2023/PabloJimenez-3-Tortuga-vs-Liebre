class Randomness {
    constructor(){}
    random(){
    return Math.ceil(Math.random() *100);
    }
}

class Runner {
    constructor(name){
        this.name=name
        this.position=0;
        this.randomness= new Randomness
    }
}

class Turtle extends Runner{
    constructor(name,position,randomness){
        super({name,position,randomness})
        this.name = name
    }

    movTurtle(){
        let movT = this.randomness.random()
        if(movT <= 50){ // 50 % - Paso Rápido
            this.position +=1
        } else if (movT <= 20){ // 20% Resbalón
            this.position -=6
        } else if (movT <=100) { // 30% Paso Lento
            this.posicion +=3
        }
    }
}

class Rabbit extends Runner{
    constructor(name, position,randomness){
        super({name,position,randomness})
        this.name=name
        
    }

    movRabbit(){
        let movR= this.randomness.random()
        if(movR <= 10){ // 10 % - Resbalón grande
            this.position -=12
        } else if (movR <= 25){ // 15% - Resbalón pequeño
            this.position -=2
        } else if (movR <= 45){ // 20 % - Dormir
            this.position +=0
        } else if (movR <= 65){ // 20 % - Salto grande 
            this.position +=9
        } else if (movR <= 100){ // 15 % - Salto pequeño
            this.position +=1
        }
    }
}

let RunnerTurtle = new Turtle("TurtleBoi")
let RunnerRabbit = new Rabbit("BunnyBoi")

while (RunnerTurtle.position < 90 && RunnerRabbit.position < 90){
    RunnerTurtle.movTurtle();
    RunnerRabbit.movRabbit();

    console.log(`Posicion de Tortuga: ${RunnerTurtle.position} - Posicion de Liebre: ${RunnerRabbit.position}`)
}

if (RunnerTurtle.position >= 90 && RunnerRabbit.position >= 90){
    console.log("\nEmpataron!!!")
} else if (RunnerTurtle.position >= 90) {
    console.log(`\nGanó la tortuga "${RunnerTurtle.name}"!`)
} else if (RunnerRabbit.position >=90){
    console.log(`\nGanó la liebre "${RunnerRabbit.name}"!`)
}