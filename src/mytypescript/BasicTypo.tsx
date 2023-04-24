
export const BasicTypo = () => {
  let mydata :string | number = 25;
  mydata = "indra darmawan " //angkan muncu angka 
  //type inferen
 let mynumber = 212 //otomatis mynumber bertype angka.numeri  kalau diberi string akan error
 //mynumber = "selemat"
 const mypil:boolean = true 
  return (
    <>
     <h2>basic typo</h2>
     {mydata} age : {mynumber} {mypil?"activate":"non-active"}
    </>
  )
}

