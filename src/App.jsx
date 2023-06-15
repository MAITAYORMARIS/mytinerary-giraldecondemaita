
import './App.css';
import trabajando from'./images/ESTAMOS TRABAJANDO EN SU PAGINA WEB. (1).png';


function App() {
  return (
    <div className="App">
      <main>
        <img src={trabajando} alt="" />
      </main>
      
      <footer>
        
      <div class="footer">
            
              <div class="others">
                  <h3>OTHER LINKS:</h3>
                  <p>LEGAL WARNING</p>
                  <p>PRIVACY POLICY</p>
                  <p>TERMS AND CONDITIONS</p>
              </div>
              <div class= "contact">
                  <h3>CONTACT:</h3>
                  <p>+54 11-5555-8888</p>
                  <p>MYTINERARY@GMAIL.COM</p>
                  <p>AUTONOMOUS CITY OF BUENOS AIRES, ARGENTINA</p>
              </div>
          </div>
          <div class="icons-rrss">
              <button><i class="fa-brands fa-twitter"></i></button>
              <button><i class="fa-brands fa-facebook-f"></i></button>
              <button><i class="fa-brands fa-instagram"></i></button>
              <button><i class="fa-brands fa-youtube"></i></button>
          </div>
      </footer>
    </div>
    
  );
}

export default App;
