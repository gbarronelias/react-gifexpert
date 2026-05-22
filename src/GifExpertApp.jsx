import { useState } from "react"
import { AddCategory, GifGrid, ModalSuccess } from "./components";
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dragon ball'])
  const [modal, setModal] = useState(false);
  const [downloadData, setDownloadData] = useState({});
  
  const onAddCategory = (newCategory) => {
      if(categories.find( cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
      setCategories([newCategory, ...categories]);
  };

  const showModal = (data) => {
    setModal(true);
    setDownloadData(data);
  }

  const onClose = () => setModal(false);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
          onNewCategory={ onAddCategory } />

      { categories.map( category => 
        <GifGrid 
          key={category}
          category={category} 
          onDownload={showModal}
          />
        ) 
      }
     { modal ? <ModalSuccess downloadData={downloadData} onClose={onClose} /> : null}
      <h2> Realizado por el cepibolla  and noyim</h2>
    </>
  )
}
