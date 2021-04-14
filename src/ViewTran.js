import AllTransac from "./AllTransac";
import useFetch from "./useFetch";

const ViewTran = ({a}) => {
    
    const { error, isPending, data:cust } = useFetch('/'+a)
    console.log(cust)
    return (  
        <div>
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
            { cust && <AllTransac cust={cust} /> }

        </div>
    );
}
 
export default ViewTran
