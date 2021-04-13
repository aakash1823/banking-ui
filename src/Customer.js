import useFetch from "./useFetch";
// import Summa from "./Summa";
import CustTable1 from "./CustTable1";
const Customers = () => {
    var b=window.location.pathname.split("/")[2];
    const { error, isPending, data: cust } = useFetch('http://localhost:8080/view/'+b)
    console.log(cust)
    return (  
        <div>
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
            { cust && <CustTable1 cust={cust} /> }

        </div>
    );
}
 
export default Customers
