import useFetch from "./useFetch";
// import Summa from "./Summa";
import CustTable from "./CustTable";
const Customers = () => {
    const { error, isPending, data: cust } = useFetch('/api/custdetails')
    console.log(cust)
    return (  
        <div>
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
            { cust && <CustTable cust={cust} /> }

        </div>
    );
}
 
export default Customers
