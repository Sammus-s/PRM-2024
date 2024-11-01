import { useEffect, useState } from "react"
import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighLightSection from "./app/components/HighLightSection"
import Section from "./app/components/Section"
import { ICategory } from "./app/@libs/types"
import { CategoryService } from "./app/services/category-service"

function App() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoryService.getAll()
    .then(result => {
      console.log('--------', result);
      setCategories(result.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main
        style={{
          marginTop: '8rem'
        }}
      >
        <HighLightSection />

        {
          categories.map(item => (
            <Section category={item} key={item.id} />
          ))
        }
        
      </main>
      <Footer />
    </div>
  )
}

export default App
