
const EmailBody = ({listBody, list}) => {
   
    return ( 
        <>
        <div>
        <header>From: {list?.from?.name} {list?.from?.email}</header>
        <p>Subject: {list?.subject}</p>
        <footer>{new Date(list?.date)?.toLocaleString()}</footer>
        <button>Mark as Favourite</button>
    </div>
        <div dangerouslySetInnerHTML={{__html: listBody}}>
        </div>
        </>
        
    );
}
 
export default EmailBody;