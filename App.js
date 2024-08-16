import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Subject from './Subject';
import ContentChild from './ContentChild';



function App() {
  
  return (
    <div>
      <Header title='to do list'/>
      <Navigation />
      <ContentChild />
      <Subject />
       <Footer />
       
    
    </div>
     
  );
}

export default App;
