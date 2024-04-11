const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input type="text" required/>
                <label>Blog Body:</label>
                <textarea required></textarea>
                <label>Blog Author: </label>
                <select>
                    <option value="Mario">Mario</option>
                    <option value="Liugi">Liugi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;