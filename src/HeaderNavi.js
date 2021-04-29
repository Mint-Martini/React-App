
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function HeaderNavi (props){
  console.log(this)
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" onClick={() => openInNewTab("https://www.linkedin.com/in/martin-quintanilla-90601b211/")}>Martin's LinkedIn </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a onClick={() => {props.functionCall("Home");} } class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a onClick={() => props.functionCall("Capone")} class="nav-link" href="#">Capones Corner</a>
            </li>
            <li class="nav-item">
              <a onClick={() => props.functionCall("Tic")} class="nav-link" href="#">Tic-Tac-Toe</a>
            </li>
            <li class="nav-item dropdown ">
              <a class="nav-link disabled dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                API Calls (Coming Soon!)
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">API1</a>
                <a class="dropdown-item" href="#">API2</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">3</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Custom API Coming soon</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0"  >
            <input class="form-control mr-sm-2" style={{width: "420px"}} type="Search" placeholder="Custom Text Field That Doesnt Do Anything (Yet!)" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Nothing!</button>
          </form>
        </div>
      </nav>
    )
}
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}




export default HeaderNavi;