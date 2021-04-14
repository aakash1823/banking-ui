import Transactionhistory from "./Transactionhistory";
import useFetch from "./useFetch";

const History = () => {
    var b=window.location.pathname.split("/")[2];
    const { error, isPending, data: history } = useFetch('/history/'+b)
    console.log(history)
    return (  
        <div>
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
            { history && <Transactionhistory cust={history} /> }

        </div>
    );
}
 
export default History
