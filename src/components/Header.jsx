// function Header( props ) {
// function Header( { numeros, isAdmin, fn } ) {
// function Header({ toma1Valor }) {
function Header( ) {

    // console.log( props )
    // console.log( numeros )
    // console.log( isAdmin )
    // fn()

    // Ejemplo de cómo pasar valores del hijo al padre
    // const variableHeader = true
    // toma1Valor( variableHeader )

    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes { " " }
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header