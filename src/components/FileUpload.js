
import "./FileUpload.css";
function FileUpload(){
return (
    <div className="top">
      <form className="form" /*</div>onSubmit={handleSubmit}*/>
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          //disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          
          //onChange={retrieveFile}
        />
        <span className="textArea">Report: </span>
        <button type="submit" className="upload" /*disabled={!file}*/>
          Upload File
        </button>
      </form>
    </div>
  );
};
export default FileUpload;