function NewBoxForm() {





    return 
    <form>

     <label htmlFor = "height">
         <input id = "height" value = {formData.height} name = "height"></input>
     </label>

     <label htmlFor = "width">
         <input id = "width"value = {formData.width} name = "width"></input>
     </label>

     <label htmlFor = "background-color">
         <input id = "background-color" value = {formData.backgroundColor} name = "heibackground-color"></input>
     </label>





    </form>
}

export default NewBoxForm