const Notification = ({message}) => {
    if(message !== '')
        return(
            <>
                <div className="error">
                    <p>{message}</p>
                </div>
            </>
        )
}

export default Notification