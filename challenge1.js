/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
    console.log(name)
}
printName("Anas Aljubah")

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year) {
    let age = 2022-year
    console.log(age)
}
printAge(1993)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name,language){
    if (language==="en") {
        console.log(`Hello ${name}`)
    }else if (language==="es"){
        console.log(`Hola ${name}`)

    }else if (language==="fr"){
        console.log(`Bonjour ${name}`)
        
    }
    else if (language==="tr"){
        console.log(`Merhaba ${name}`)
        
    }

}
printHello("Anas","en")
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(no1,no2){
    if (no1>no2) {
        console.log(no1)
    }else if (no2>no1){
        console.log(no2)
    } else {
        console.log("equals")
    }
}
printMax(5,9)