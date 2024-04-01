const Form = ({handleSubmit, handleChangeName, handleChangeNumber}) => {
    return(
        <form onSubmit={handleSubmit}>
        <h3>Add new</h3>
        <div>
          name: <input onChange={handleChangeName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form