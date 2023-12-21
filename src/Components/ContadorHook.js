import useContador from '../Components/useContador';

function ContadorHook(){
  const {contador, sumar, restar} = useContador(0);



    return(
        <div>
         <h4> El contador va por: {contador}</h4>
         <button onClick={sumar}> Suma</button>
         <button onClick={restar}> Resta</button>
        </div>
    )
}
export default ContadorHook;