import Cupcake  from "./Cupcake";
import './app.css';

const App = () => (
  <div className="grid-container">
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>
{/* 
    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
    
    <Cupcake color="rosa" sabor="vainilla" url="https://envato-shoebox-0.imgix.net/046c/5c00-55b9-11e1-bd94-842b2b692e1a/IMG_8926.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e93b12d194348aa67e26b550a434edde"/>

    <Cupcake color="azul" sabor="chocolate" url="https://envato-shoebox-0.imgix.net/7ca6/7668-5359-11e1-bd94-842b2b692e1a/IMG_2438.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=df661869f8c16f5896dfad8206867912" />
     */}
  </div>
);

export default App;
