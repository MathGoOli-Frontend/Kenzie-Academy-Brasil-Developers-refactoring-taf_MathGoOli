// Implemente aqui as funções

/* funções que restornão booleanos tem como padrão começar com is por exemplo "isAbs" */

//Config:
// Homem
const alturaHomem = 1.7
const absHomem = 41
const barRepHomem = 6
const barSecondsHomen = 15
const swimDistanceHomem = 100
const swimTimeHomem = 60
const diveTimeHomem = 30
const runDistanceHomen1 = 3000
const runTimeHomen1 = 12*60
const runDistanceHomen2 = 5000
const runTimeHomen2 = 20*60
// Mulher
// eu sei que algumas constantes são iguais tipo swimTimeHomem e swimTimeMulher mas preferi deixar separado porque na explicação do taf estao separadas
const alturaMulher = 1.6
const absMulher = 41
const barRepMulher = 5
const barSecondsmulher = 12
const swimDistanceMulher = 100
const swimTimeMulher = 60
const diveTimeMulher = 30
const runDistanceMulher1 = 4000
const runTimeMulher1 = 15*60
const runDistanceMulher2 = 6000
const runTimeMulher2 = 22*60

function isAbs(gender, absRep){
    /* função que verifica se o candidato passou no teste de abdominais */
    if (gender == "male"){
        if (absRep >= absHomem){ // abnominais
            return true
        }
    } else if (gender == "female"){
        if (absRep >= absMulher){ // abnominais
            return true
    }
    return false
}
}
function isHeight(gender, height){
    /* função que verifica se o candidato tem a altura nescessária*/
    if (gender == "male"){
        if(height >= alturaHomem){ // Altura
            return true
        }
    }else if(gender == "female"){
        if(height >= alturaMulher){ // Altura
            return true
        }
    }
    return false
    }
    

function isBarReps(gender, barReps, barSeconds){
    /* função que verifica se o candidato passou no teste de barra*/
    if (gender == "male"){
        
        if(barReps >= barRepHomem || barSeconds <= barSecondsHomen){
            return true
        }
    
    }else if(gender == "female"){
        if(barReps >= barRepMulher|| barSeconds <= barSecondsmulher){
            return true
        }
    }
}
function isSwim(gender,swimDistance, swimTime, diveTime){
    /* função que verifica se o candidato passou no teste de natação */
    if (gender == "male"){
        if(swimDistance >= swimDistanceHomem && swimTime <= swimTimeHomem){
            return true
        }else if(diveTime <= diveTimeHomem){
            return true
        }
        return false
    }else if(gender == "female"){
        if(swimDistance >= swimDistanceMulher && swimTime <= swimTimeMulher){
            return true
        }else if(diveTime <= diveTimeMulher){
            return true
        }
        return false
    }

}
function isRun(gender, runDistance, runTime){
    /* função que verifica se o candidato passou no teste de corrida */
    if (gender == "male"){
        if(runDistance >= runDistanceHomen1){ 
            if (runTime <= runTimeHomen1){
                return true
            }else{
                return false
            }
        }
        if(runDistance >= runDistanceHomen2){
            if (runTime <= runTimeHomen2){
                return true
            }else{
                return false
            }
        }
        return false

    } else if (gender =="female"){
        if(runDistance >= runDistanceMulher1){ 
            if (runTime <= runTimeMulher1){
                return true
            }else{
                return false
            }
        }else if(runDistance >= runDistanceMulher2){
            if (runTime <= runTimeMulher2){
                return true
            }else{
                return false
            }
        }
        return false
    }
    
}


function areCandidateResultsValid(gender, height, bareps, bartime, absRep, runDistance,
                                 runTime, swimDistance, swimTime, diveTime) {
    /* função que avalia se o candidato passou em todos os testes */                                
    const result = (isAbs(gender, absRep)
                && isHeight(gender, height) 
                && isBarReps(gender, bareps, bartime)
                && isSwim(gender, swimDistance, swimTime, diveTime)
                && isRun(gender,runDistance,runTime))
    return result
}
function showMessage(message){
    /* função que retorna um log no console se o candidato passou 
        deixei um:  
        if (message == undefined){
        message = false
        }   
    pra corrigir um bug que eu não consegui tratar de retornar "undefined"
    */
    if (message == undefined){
        message = false
    }
    let messageUpper = message.toString().toUpperCase()
    console.log(messageUpper)
    
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
showMessage(areCandidateValid)
